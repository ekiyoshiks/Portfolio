import {ButtonHTMLAttributes} from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props}: ButtonProps) => {
    return (
        <button
            className={cn(
                "px-4 py-3 rounded-lg flex items-center gap-2 justify-center bg-stone-500 text-white hover:bg-stone-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};