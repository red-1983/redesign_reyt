import { StaticImageData } from "next/image";
export type ResponsiveImageSources = {
  mobile: string | StaticImageData;
  tablet: string | StaticImageData;
  desktop: string | StaticImageData;
};
