"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MyButton } from "@/components/ui";
import { Spinner } from "@/components/ui/spinner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  callbackFormSchema,
  CallbackFormValues,
} from "@/lib/schemas/callbackFormSchema";
import { useFormSubmit } from "@/hooks/useFormSubmit";
interface FormCallbackProps {
  onSuccess?: () => void;
}
export const FormCallback = ({ onSuccess }: FormCallbackProps) => {
  const form = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackFormSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      phone: "",
    },
  });
  const { submitForm, isSubmitting } = useFormSubmit({
    endpoint: "/api/callback",
    onSuccess: () => {
      form.reset();
      onSuccess?.();
    },
  });
  async function onSubmit(values: CallbackFormValues) {
    await submitForm(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[clamp(0.9rem,1.5vw,1rem] text">
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
              <div className="h-10">
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
                Номер телефона (обязательное поле)
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

        <div className="mt-5 w-full text-center md:text-left">
          <MyButton
            variant={"secondary"}
            type="submit"
            className="bg-brand-components h-[50px] w-full max-w-[300px]"
            disabled={!form.formState.isValid || isSubmitting}
          >
            {isSubmitting ? <Spinner className="size-6" /> : "Отправить"}
          </MyButton>
        </div>
      </form>
    </Form>
  );
};

export default FormCallback;
