"use client";
import dynamic from "next/dynamic";
import { Spinner } from "../spinner";
const FormContactOpti = dynamic(
  () => import("./FormContact").then((mod) => mod.FormContact),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

export const DynamicFormContact = () => {
  return <FormContactOpti />;
};
