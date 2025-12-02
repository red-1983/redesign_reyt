"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MyButton } from "@/components/ui";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
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
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/schemas/contactFormSchema";

export const FormContact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      phone: "",
      email: "",
      textarea: "",
      checkbox: false,
    },
  });
  const [isDownloadFile, setIsDownloadFile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("policyDownLoaded") === "true")
      setIsDownloadFile(true);
  }, []);

  const handlePolicyDowload = () => {
    localStorage.setItem("policyDownLoaded", "true");
    setIsDownloadFile(true);
  };

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);

    const promise = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка сервера");
        }
        form.reset();
        return res.json();
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    toast.promise(promise, {
      loading: "Отправка сообщения...",
      success: "Сообщение успешно отправлено!",
      error: "Произошла ошибка при отправке.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[clamp(0.9rem,1.5vw,1rem]">
                Ваше имя
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="focus-visible:ring-brand-components rounded-1 border-2 bg-white text-black focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Дмитрий"
                  {...field}
                />
              </FormControl>
              <div className="h-5">
                <FormMessage className="text-brand-components text-[clamp(0.9rem,1.5vw,1rem]" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[clamp(0.9rem,1.5vw,1rem]">
                Номер телефона
              </FormLabel>
              <FormControl>
                <Input
                  className="rounded-1 border-2 bg-white text-black focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="+375 (XX) XXX-XX-XX"
                  {...field}
                  type="tel"
                />
              </FormControl>
              <div className="h-5">
                <FormMessage className="text-brand-components text-[clamp(0.9rem,1.5vw,1rem]" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[clamp(0.9rem,1.5vw,1rem]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="rounded-1 border-2 bg-white text-black focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="reyt@example.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <div className="h-5">
                <FormMessage className="text-brand-components text-[clamp(0.9rem,1.5vw,1rem]" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="textarea"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[clamp(0.9rem,1.5vw,1rem]">
                Сообщение (необязательно)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ваш вопрос или комментарий..."
                  className="rounded-1 h-40 resize-none border-2 bg-white text-black focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <div className="h-5">
                <FormMessage className="text-brand-components text-[clamp(0.9rem,1.5vw,1rem]" />
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
                    className="hover:cursor-pointer data-[state=checked]:bg-white"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-[clamp(0.9rem,1.5vw,1rem] hover:cursor-pointer">
                  <p className="text-[clamp(0.9rem,1.5vw,1rem)] tracking-wider">
                    {" "}
                    Я даю согласие на обработку персональных данных и соглашаюсь
                    с{" "}
                    <a
                      href="/docs/politica.pdf"
                      download
                      onClick={handlePolicyDowload}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-components hover:text-brand-components/80 underline"
                      aria-label="Скачать политику конфиденциальности"
                    >
                      Политикой конфиденциальности
                    </a>
                  </p>
                </FormLabel>
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

        <div className="mt-5 w-full text-center md:text-left">
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
