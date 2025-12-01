import { NextResponse } from "next/server";
import { z } from "zod";
import { contactFormSchema } from "@/lib/schemas/contactFormSchema";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      // Применяем ваше исправление
      const flattenedErrors = z.flattenError(validationResult.error);
      return NextResponse.json(
        {
          message: "Неверные данные формы",
          errors: flattenedErrors.fieldErrors,
        },
        { status: 400 }
      );
    }

    const { userName, phone, email, textarea, checkbox } =
      validationResult.data;

    const emailHtml = `
      <h1>Новая заявка с контактной формы сайта</h1>
      <p><strong>Имя:</strong> ${userName}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Пользователь согласился на обработку персональных данных:</strong> ${checkbox}</p>
      <hr>
      <p><strong>Сообщение:</strong></p>
      <p>${textarea || "Пользователь не оставил сообщения."}</p>
    `;

    await sendEmail({
      to: process.env.EMAIL_USER!,
      subject: `Новая заявка от ${userName}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: "Сообщение успешно отправлено!" });
  } catch (error) {
    console.error("Ошибка в API-маршруте /api/contact:", error);
    return NextResponse.json(
      { message: "Произошла внутренняя ошибка сервера." },
      { status: 500 }
    );
  }
}
