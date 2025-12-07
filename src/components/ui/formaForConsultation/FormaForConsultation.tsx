"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Spinner } from "@/components/ui/spinner";
import { MyButton } from "@/components/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  consultationFormSchema,
  ConsultationFormValues,
} from "@/lib/schemas/consultationFormSchema";
import { useFormSubmit } from "@/hooks/useFormSubmit";

export const FormaForConsultation = () => {
  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      phone: "",
      checkbox: false,
    },
  });

  const [isDownloadFile, setIsDownloadFile] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("policyDownLoaded") === "true")
      setIsDownloadFile(true);
  }, []);
  const handlePolicyDowload = () => {
    localStorage.setItem("policyDownLoaded", "true");
    setIsDownloadFile(true);
  };
  const { submitForm, isSubmitting } = useFormSubmit({
    endpoint: "/api/consultation",
    onSuccess: () => {
      form.reset();
    },
  });
  async function onSubmit(values: ConsultationFormValues) {
    await submitForm(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваше имя</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="rounded-none border-0 border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Иван"
                  {...field}
                />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-0 border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="+375 (XX) XXX-XX-XX"
                  {...field}
                  type="tel"
                />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checkbox"
          render={({ field }) => (
            <>
              <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    <p className="text-[clamp(0.9rem,1.5vw,1rem)] tracking-wider">
                      {" "}
                      Я даю согласие на обработку персональных данных и
                      соглашаюсь с{" "}
                      <a
                        href="/docs/politica.pdf"
                        download
                        onClick={handlePolicyDowload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-components hover:text-brand-components/80 underline"
                        aria-label="Скачать политику конфиденциальности"
                      >
                        политикой конфиденциальности
                      </a>
                    </p>
                  </FormLabel>
                  <div className="h-5">
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
              <div className="h-10">
                {!form.formState.errors.checkbox && !isDownloadFile && (
                  <p>
                    Пожалуйста, скачайте и ознакомьтесь с Политикой
                    конфиденциальности
                  </p>
                )}
                <FormMessage className="text-brand-components text-[clamp(0.9rem,1.5vw,1rem]" />
              </div>
            </>
          )}
        />

        <div className="w-full text-center md:text-left">
          <MyButton
            variant={"secondary"}
            type="submit"
            className="bg-brand-components h-[50px] w-[300px]"
            disabled={
              !form.formState.isValid || !isDownloadFile || isSubmitting
            }
          >
            {isSubmitting ? <Spinner className="size-6" /> : "Отправить"}
          </MyButton>
        </div>
      </form>
    </Form>
  );
};
