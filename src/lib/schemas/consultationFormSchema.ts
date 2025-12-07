import { z } from "zod";
export const consultationFormSchema = z.object({
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
export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
