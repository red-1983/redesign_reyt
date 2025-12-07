import { useState, useCallback } from "react";
import { toast } from "sonner";

interface UseFormSubmitOptions<T> {
  endpoint: string;
  onSuccess?: () => void;
}

export const useFormSubmit = <T extends Record<string, unknown>>({
  endpoint,
  onSuccess,
}: UseFormSubmitOptions<T>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = useCallback(
    async (values: T) => {
      setIsSubmitting(true);

      const promise = fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Ошибка сервера");
          return res.json();
        })
        .then(() => {
          onSuccess?.();
        })
        .finally(() => {
          setIsSubmitting(false);
        });

      toast.promise(promise, {
        loading: "Отправка сообщения...",
        success: "Сообщение успешно отправлено!",
        error: "Произошла ошибка при отправке.",
      });
    },
    [endpoint, onSuccess]
  );

  return { submitForm, isSubmitting };
};
