"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui";
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

const formSchema = z.object({
  userName: z
    .string()
    .min(2, {
      message: "Имя должно содержать минимум 2 символа.",
    })
    .max(50, { message: "Имя не должно превышать 50 символов." })
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, {
      message: "Имя может содержать только буквы и дефисы.",
    }),
  phone: z
    .string()
    .transform((val) => val.replace(/[^\d+]/g, ""))
    .refine((val) => /^(\+375\d{9}|80\d{9})$/.test(val), {
      message: "Неверный формат номера.",
    }),
  checkbox: z.boolean().refine((val) => val === true, {
    message: "Вы должны согласиться с политикой конфиденциальности.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const FormaForConsuoltation = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      phone: "",
      checkbox: false,
    },
  });

  function onSubmit(values: FormValues) {
    // Тут будет логика отправки формы
    console.log(values);
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
                    Я даю согласие на обработку персональных данных и соглашаюсь
                    с{" "}
                    <a
                      href="/privacy-policy.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-components hover:text-brand-components/80 underline"
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
          )}
        />
        <div className="w-full text-center md:text-left">
          <Button
            variant={"secondary"}
            type="submit"
            className="bg-brand-components h-[50px] w-[300px]"
          >
            Отправить
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormaForConsuoltation;
