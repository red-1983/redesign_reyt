"use client";
import dynamic from "next/dynamic";
const FormaForConsultationOpti = dynamic(
  () =>
    import("./FormaForConsultation").then((mod) => mod.FormaForConsultation),
  {
    ssr: false,
  }
);

export const DynamicFormaForConsultation = () => {
  return <FormaForConsultationOpti />;
};
