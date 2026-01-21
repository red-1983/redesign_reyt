type YandexMetrika = {
  (
    id: number,
    event: "init",
    params: {
      clickmap?: boolean;
      trackLinks?: boolean;
      accurateTrackBounce?: boolean;
      webvisor?: boolean;
    }
  ): void;
  (
    id: number,
    event: "hit",
    url: string,
    params?: Record<string, unknown>
  ): void;
  // Здесь можно добавить другие перегрузки для ym, если они понадобятся
};

declare global {
  interface Window {
    ym?: YandexMetrika;
  }
}

export {};
