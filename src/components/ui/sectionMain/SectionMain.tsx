import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ResponsiveImageSources } from "@/types";

interface SectionMainProps extends React.ComponentProps<"section"> {
  children: React.ReactNode;
  h1: string;
  imageSRC: string | ResponsiveImageSources;
  imageALT: string;
  className?: string;
  mainText?: React.ReactNode;
  mainTextClassName?: string;
  textClassName?: string;
  text?: React.ReactNode;
}
export const SectionMain = ({
  children,
  text,
  mainText,
  className,
  h1,
  imageSRC,
  imageALT,
  ...props
}: SectionMainProps) => {
  return (
    <section
      className={cn(
        "relative flex aspect-[1920/820] justify-center px-5 pb-10 md:mb-5 md:items-start md:pt-20 lg:px-4 lg:pt-30 xl:px-0",
        className
      )}
    >
      <h1 className="sr-only">{h1}</h1>
      {typeof imageSRC === "object" && "desktop" in imageSRC ? (
        <picture>
          <source
            media="(min-width:1024px) "
            srcSet={(imageSRC.desktop as StaticImageData).src}
          />
          <source
            media="(min-width: 768px)"
            srcSet={(imageSRC.tablet as StaticImageData).src}
          />
          <Image
            src={imageSRC.mobile}
            alt={imageALT}
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            priority
          />
        </picture>
      ) : (
        <Image
          src={imageSRC as string | StaticImageData}
          alt={imageALT}
          fill
          sizes="100vw"
          quality={100}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          className="z-0"
          priority
        />
      )}

      <div
        data-slot="section-text"
        className="z-10 flex w-full max-w-[1350px] flex-col justify-center gap-5 px-4"
      >
        <p
          data-slot="main-text"
          className={cn(
            "xs:leading-snug xmd:w-[50%] w-[60%] text-[clamp(1rem,3.3vw,2.5rem)] leading-[1.5rem] font-bold tracking-wide text-[#000000c7] lowercase first-letter:uppercase md:w-full",
            className
          )}
        >
          {mainText}
        </p>
        <p
          data-slot="text"
          className={cn(
            "hidden w-[50%] text-[clamp(1rem,2.5vw,1.4rem)] font-bold text-[#000000c4] md:block lg:block lg:w-[600px]",
            className
          )}
        >
          {text}
        </p>
        {children}
      </div>
    </section>
  );
};
