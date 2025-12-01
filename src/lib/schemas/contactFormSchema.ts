import { z } from "zod";
export const contactFormSchema = z.object({
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
  email: z.email("Неверный формат электронной почты."),
  textarea: z
    .string()
    .max(500, { message: "Сообщение не должно превышать 500 символов." })
    .refine((val) => val === "" || /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?-]*$/.test(val), {
      message: "Допустимы только буквы, цифры и знаки пунктуации .,!?-",
    })
    .optional(),
  checkbox: z.boolean().refine((val) => val === true, {
    message: "Вы должны согласиться с политикой конфиденциальности.",
  }),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;
