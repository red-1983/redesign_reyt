import { NextResponse } from "next/server";
import { z } from "zod";
import { callbackFormSchema } from "@/lib/schemas/callbackFormSchema";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validationResult = callbackFormSchema.safeParse(body);

    if (!validationResult.success) {
      const flattenedErrors = z.flattenError(validationResult.error);
      return NextResponse.json(
        {
          message: "Неверные данные формы",
          errors: flattenedErrors.fieldErrors,
        },
        { status: 400 }
      );
    }

    const { userName, phone } = validationResult.data;

    const emailHtml = `
      <h1>Заявка с сайта на обратный звонок</h1>
      <p><strong>Имя:</strong> ${userName}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
         `;

    await sendEmail({
      to: process.env.EMAIL_USER!,
      subject: `Новая заявка от ${userName}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: "Сообщение успешно отправлено!" });
  } catch (error) {
    console.error("Ошибка в API-маршруте /api/callback:", error);
    return NextResponse.json(
      { message: "Произошла внутренняя ошибка сервера." },
      { status: 500 }
    );
  }
}
