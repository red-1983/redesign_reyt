// Определяем тип для функции ym и ее возможных вызовов
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

// Расширяем глобальный интерфейс Window
declare global {
  interface Window {
    // Объявляем, что у window может быть свойство ym с нашим типом
    ym?: YandexMetrika;
  }
}

// Эта строка нужна, чтобы TypeScript считал этот файл модулем.
export {};
