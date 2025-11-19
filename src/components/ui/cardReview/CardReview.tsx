import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
interface CardReviewProps {
  className?: string;
  avatarImage?: string;
  title: string;
  review: string;
  fillStar?: number;
}
export const CardReview = ({
  className,
  avatarImage,
  title,
  fillStar,
  review,
  ...props
}: CardReviewProps) => {
  return (
    <div
      className={cn(
        "hover:bg-brand-footer hover:border-brand-components flex min-h-[200px] w-full max-w-[410px] cursor-pointer flex-col gap-6 rounded-md border-2 bg-white p-4 text-black transition-all duration-500 hover:text-white",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-4 self-start">
          <Avatar>
            <AvatarImage src={avatarImage} alt="avatar" />
            <AvatarFallback className="bg-[#D9D9D9]">CN</AvatarFallback>
          </Avatar>
          <h3>{title}</h3>
        </div>
        <ul className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => {
            const isFilled = index < (fillStar || 0);
            return (
              <li key={index}>
                <Star
                  size={17}
                  className={cn(
                    isFilled ? "text-brand-components" : "text-gray-300"
                  )}
                  fill="currentColor"
                />
              </li>
            );
          })}
        </ul>
      </div>

      <p className="text-[clamp(0.9rem,1.5vw,1.1rem)] font-medium">{review}</p>
    </div>
  );
};
