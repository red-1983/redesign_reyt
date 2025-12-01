import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface YandexMapsProps {
  lat?: number;
  lon?: number;
  zoom?: number;
  width?: string;
  height?: string;
  className?: string;
}

export const YandexMaps = ({
  lat = 52.038667,
  lon = 29.192,
  zoom = 15,
  width = "100%",
  height = "100%",
  className,
}: YandexMapsProps) => {
  const src = `https://static-maps.yandex.ru/1.x/?ll=${lon},${lat}&z=${zoom}&size=650,450&l=map&pt=${lon},${lat},pm2rdm`;
  return (
    <Link
      className={cn("block h-[100%] w-[100%]", className)}
      href={`https://yandex.ru/maps/?ll=${lon}%2C${lat}&z=${zoom}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={cn(`relative w-[${width}] h-[${height}]`)}>
        <Image src={src} alt="Map" fill style={{ objectFit: "cover" }} />
      </div>
    </Link>
  );
};

// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// export const YandexMaps = () => {
//   const coordinates = [52.038667, 29.192];
//   const defaultState = {
//     center: coordinates,
//     zoom: 15,
//   };

//   return (
//     <YMaps
//       query={{
//         apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY,
//       }}
//     >
//       <Map defaultState={defaultState} width="100%" height="100%">
//         <Placemark
//           geometry={coordinates}
//           properties={{
//             balloonContentHeader: "Автостекла 'Реут'",
//             balloonContentBody:
//               "Мозырь, 1-ый переулок Малинина, 6 Б (Авторынок)",
//           }}
//           options={{
//             preset: "islands#redAutoIcon",
//           }}
//         />
//       </Map>
//     </YMaps>
//   );
// };
