import { useState } from "react";
import type { Locale } from "./i18n";

const scenes = ["meadow", "sunset", "rain"] as const;
const copy = {
  ko: {
    to: "너의 홈 화면에", from: "네게 남길 한마디", sender: "나에게서", time: "방금",
    scene: "마음에 어울리는 풍경", names: ["꽃길 산책", "노을 물결", "창가의 비"],
    notes: ["문득 네 생각이 났어.", "오늘도 정말 수고했어.", "이 풍경, 너랑 같이 보고 싶어."],
    noteLabels: ["생각나서", "응원하고 싶어서", "함께하고 싶어서"],
    presets: "이런 마음은 어때요?", replay: "다시 펼쳐보기",
    disclaimer: "웹 미리보기 · 실제 메시지는 전송되지 않아요.", preview: "꾸민 위젯 미리보기", placeholder: "네게 남기고 싶은 말…", count: "최대 40자",
  },
  en: {
    to: "On your Home Screen", from: "A little note for you", sender: "From me", time: "Just now",
    scene: "A scene for the feeling", names: ["Flower walk", "Sunset tide", "Window rain"],
    notes: ["You just crossed my mind.", "You did so well today.", "Wish we could see this together."],
    noteLabels: ["Thinking of you", "Cheering you on", "Wish you were here"],
    presets: "A little inspiration", replay: "Let it unfold again",
    disclaimer: "Web preview · No message is sent.", preview: "Your styled widget preview", placeholder: "Something you want to leave…", count: "Up to 40 characters",
  },
  ja: {
    to: "あなたのホーム画面に", from: "あなたに残すひとこと", sender: "私から", time: "たった今",
    scene: "想いに似合う景色", names: ["花道の散歩", "夕暮れの波", "窓辺の雨"],
    notes: ["ふと、あなたを思い出した。", "今日も本当におつかれさま。", "この景色、あなたと一緒に見たい。"],
    noteLabels: ["思い出したから", "応援したくて", "一緒にいたくて"],
    presets: "こんな気持ちはどう？", replay: "もう一度ひらく",
    disclaimer: "ウェブプレビュー · 実際の送信は行いません。", preview: "彩ったウィジェットのプレビュー", placeholder: "あなたに残したい言葉…", count: "最大40文字",
  },
};

const segmenter = typeof Intl.Segmenter === "function" ? new Intl.Segmenter(undefined, { granularity: "grapheme" }) : null;
const characters = (value: string) => segmenter ? Array.from(segmenter.segment(value), ({ segment }) => segment) : Array.from(value);

export const leafScenePath = (scene: string) => `${import.meta.env.BASE_URL}leaf-message/${scene}.webp`;

export function LeafMessagePreview({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const [scene, setScene] = useState(0);
  const [message, setMessage] = useState(text.notes[0]);
  const [isComposing, setIsComposing] = useState(false);
  const [replay, setReplay] = useState(0);
  const visibleCharacters = characters(message);
  const previewMessage = visibleCharacters.slice(0, 40).join("");

  function chooseNote(index: number) {
    setMessage(text.notes[index]);
    setReplay((value) => value + 1);
  }

  return (
    <div className="lm-studio" id="leafmessage-studio">
      <div className={`lm-scene-stage lm-scene-${scenes[scene]}`}>
        {scenes.map((name, index) => (
          <img className={`lm-landscape ${index === scene ? "is-selected" : ""}`} key={name} src={leafScenePath(name)} alt="" width="960" height="960" fetchPriority={index === 0 ? "high" : "auto"} />
        ))}
        <div className="lm-scene-heading"><span>TO. YOU</span><span>{text.to}</span></div>
        <div className="lm-scene-inscription" aria-hidden="true">A little feeling,<br /><em>a place to stay.</em></div>
        <div className="lm-widget-wrap">
          <article className="lm-widget" aria-label={text.preview}>
            <img src={leafScenePath(scenes[scene])} alt="" width="960" height="960" />
            <div className="lm-widget-meta"><strong>{text.sender}</strong><span>{text.time}</span></div>
            <p key={`${scene}-${replay}`} className={visibleCharacters.length > 26 ? "lm-message is-long" : "lm-message"}>{previewMessage || text.placeholder}</p>
          </article>
          <span className="lm-widget-app-name">Leaf Message</span>
        </div>
      </div>

      <div className="lm-studio-controls">
        <fieldset className="lm-scene-picker">
          <legend>{text.scene}</legend>
          <div>{scenes.map((name, index) => (
            <button type="button" key={name} aria-pressed={scene === index} onClick={() => setScene(index)}>
              <img src={leafScenePath(name)} alt="" width="52" height="40" />
              <span>{text.names[index]}</span><span className="lm-selection-mark" aria-hidden="true">{scene === index ? "✓" : ""}</span>
            </button>
          ))}</div>
        </fieldset>

        <div className="lm-note-editor">
          <div className="lm-note-label"><label htmlFor="leaf-note">{text.from}</label><span id="leaf-note-limit" aria-label={text.count}>{Math.min(visibleCharacters.length, 40)} / 40</span></div>
          <textarea id="leaf-note" value={message} rows={2} aria-describedby="leaf-note-limit leaf-note-hint" placeholder={text.placeholder}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={(event) => { setIsComposing(false); setMessage(characters(event.currentTarget.value).slice(0, 40).join("")); }}
            onChange={(event) => setMessage(isComposing ? event.target.value : characters(event.target.value).slice(0, 40).join(""))} />
          <div className="lm-note-presets" role="group" aria-label={text.presets}>
            {text.noteLabels.map((label, index) => <button type="button" key={label} aria-pressed={message === text.notes[index]} onClick={() => chooseNote(index)}>{label}</button>)}
          </div>
        </div>
        <div className="lm-preview-foot"><p id="leaf-note-hint">{text.disclaimer}</p><button type="button" onClick={() => setReplay((value) => value + 1)}><span aria-hidden="true">↻</span>{text.replay}</button></div>
      </div>
    </div>
  );
}
