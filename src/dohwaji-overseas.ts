import type { Locale } from "./i18n";

type OverseasTrip = {
  id: "tokyo" | "portugal";
  routeUrl: string;
  attribution: string;
  content: Record<Locale, {
    label: string;
    eyebrow: string;
    days: Array<{
      day: number;
      label: string;
      title: string;
      description: string;
      stops: [string, string, string];
    }>;
  }>;
};

export const overseasTrips: OverseasTrip[] = [
  {
    id: "tokyo",
    routeUrl: "https://dohwaji.app/explore/df6a82eb-2537-4efc-833e-d7e80d3076bb",
    attribution: "© Google",
    content: {
      ko: {
        label: "도쿄",
        eyebrow: "동네마다 다른 풍경을 담은 도쿄 여행",
        days: [
          { day: 1, label: "1일차", title: "신주쿠의 밤과 골목", description: "도쿄도청 전망대에서 도시를 내려다보고, 오모이데 요코초와 골든가이의 골목으로.", stops: ["도쿄도청 전망대", "오모이데 요코초", "신주쿠 골든가이"] },
          { day: 2, label: "2일차", title: "숲길에서 시부야까지", description: "메이지 신궁에서 시작해 하라주쿠를 걷고, 시부야 스크램블 교차로로 향해요.", stops: ["메이지 신궁", "다케시타도리 입구", "시부야 스크램블 교차로"] },
          { day: 3, label: "3일차", title: "아사쿠사에서 우에노로", description: "센소지와 도쿄 스카이트리를 둘러본 뒤, 우에노 공원으로 이어지는 하루.", stops: ["센소지", "도쿄 스카이트리", "우에노 공원"] },
        ],
      },
      en: {
        label: "Tokyo",
        eyebrow: "A Tokyo trip, neighborhood by neighborhood",
        days: [
          { day: 1, label: "Day 1", title: "Shinjuku after dark", description: "Take in the city from the Metropolitan Government observatory, then explore Omoide Yokocho and Golden Gai.", stops: ["Metropolitan Gov. Observatory", "Omoide Yokocho", "Shinjuku Golden Gai"] },
          { day: 2, label: "Day 2", title: "From forest paths to Shibuya", description: "Start at Meiji Jingu, walk through Harajuku, and make your way to Shibuya Crossing.", stops: ["Meiji Jingu", "Takeshita Street entrance", "Shibuya Crossing"] },
          { day: 3, label: "Day 3", title: "From Asakusa to Ueno", description: "Visit Senso-ji and Tokyo Skytree before continuing to Ueno Park.", stops: ["Senso-ji", "Tokyo Skytree", "Ueno Park"] },
        ],
      },
      ja: {
        label: "東京",
        eyebrow: "街ごとの風景をたどる東京旅行",
        days: [
          { day: 1, label: "1日目", title: "新宿の夜景と路地", description: "都庁展望室から街を眺めて、思い出横丁とゴールデン街の路地へ。", stops: ["都庁展望室", "思い出横丁", "新宿ゴールデン街"] },
          { day: 2, label: "2日目", title: "森の参道から渋谷へ", description: "明治神宮から原宿を歩き、渋谷スクランブル交差点へ向かいます。", stops: ["明治神宮", "竹下通り入口", "渋谷スクランブル交差点"] },
          { day: 3, label: "3日目", title: "浅草から上野へ", description: "浅草寺と東京スカイツリーをめぐり、上野公園へと続く一日。", stops: ["浅草寺", "東京スカイツリー", "上野公園"] },
        ],
      },
    },
  },
  {
    id: "portugal",
    routeUrl: "https://dohwaji.app/explore/1ab108e6-843e-4854-9771-24d069c8609b",
    attribution: "© Google · Inst. Geogr. Nacional",
    content: {
      ko: {
        label: "리스본",
        eyebrow: "리스본에서 시작하는 포르투갈 여행",
        days: [
          { day: 1, label: "1일차", title: "광장을 지나 강변으로", description: "호시우 광장에서 코메르시우 광장을 거쳐 카이스 두 소드레까지, 리스본의 첫날.", stops: ["호시우 광장", "코메르시우 광장", "카이스 두 소드레"] },
          { day: 2, label: "2일차", title: "알파마 골목을 따라", description: "상 조르제 성에서 산타 루지아 전망대와 리스본 대성당을 향해 내려와요.", stops: ["상 조르제 성", "산타 루지아 전망대", "리스본 대성당"] },
          { day: 3, label: "3일차", title: "벨렝의 강변을 걷는 날", description: "MAAT 미술관부터 제로니무스 수도원, 벨렝탑까지 서쪽으로 이어지는 동선.", stops: ["MAAT 미술관", "제로니무스 수도원", "벨렝탑"] },
        ],
      },
      en: {
        label: "Lisbon",
        eyebrow: "A Portugal trip beginning in Lisbon",
        days: [
          { day: 1, label: "Day 1", title: "From squares to the river", description: "A first day in Lisbon, from Rossio through Praça do Comércio to Cais do Sodré.", stops: ["Rossio Square", "Praça do Comércio", "Cais do Sodré"] },
          { day: 2, label: "Day 2", title: "Through Alfama's alleyways", description: "Walk downhill from São Jorge Castle to Santa Luzia viewpoint and Lisbon Cathedral.", stops: ["São Jorge Castle", "Santa Luzia viewpoint", "Lisbon Cathedral"] },
          { day: 3, label: "Day 3", title: "Along Belém's waterfront", description: "Head west from MAAT to Jerónimos Monastery and Belém Tower.", stops: ["MAAT", "Jerónimos Monastery", "Belém Tower"] },
        ],
      },
      ja: {
        label: "リスボン",
        eyebrow: "リスボンからはじまるポルトガル旅行",
        days: [
          { day: 1, label: "1日目", title: "広場を抜けて川辺へ", description: "ロシオ広場からコメルシオ広場を経てカイス・ド・ソドレへ。リスボンを歩く初日。", stops: ["ロシオ広場", "コメルシオ広場", "カイス・ド・ソドレ"] },
          { day: 2, label: "2日目", title: "アルファマの路地をたどる", description: "サン・ジョルジェ城からサンタ・ルジア展望台、リスボン大聖堂へと坂道を下ります。", stops: ["サン・ジョルジェ城", "サンタ・ルジア展望台", "リスボン大聖堂"] },
          { day: 3, label: "3日目", title: "ベレンの川辺を歩く日", description: "MAATからジェロニモス修道院、ベレンの塔へ。西へと続くルートをたどります。", stops: ["MAAT", "ジェロニモス修道院", "ベレンの塔"] },
        ],
      },
    },
  },
];
