"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const YandexMaps = () => {
  const coordinates = [52.03869, 29.192031];
  const defaultState = {
    center: coordinates,
    zoom: 15,
  };

  return (
    <YMaps
      query={{
        apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY,
      }}
    >
      <Map defaultState={defaultState} width="100%" height="100%">
        <Placemark
          geometry={coordinates}
          properties={{
            balloonContentHeader: "Автостекла 'Реут'",
            balloonContentBody:
              "Мозырь, 1-ый переулок Малинина, 6 Б (Авторынок)",
          }}
          options={{
            preset: "islands#redAutoIcon",
          }}
        />
      </Map>
    </YMaps>
  );
};
