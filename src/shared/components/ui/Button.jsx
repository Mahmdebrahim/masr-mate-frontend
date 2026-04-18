import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      icon: Icon = null,
      fullWidth = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center 
      font-semibold rounded-xl 
      cursor-pointer
      transition-all duration-200 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-70
    `;

    const variants = {
      primary: "bg-[#003366] text-white hover:bg-[#002244]",
      secondary:
        "bg-white border border-gray-300 text-[#003366] hover:bg-gray-50",
      outline:
        "bg-transparent border border-[#003366] text-[#003366] hover:bg-[#003366]/5",
      ghost: "bg-[#F8FAFC] text-[#003366] hover:bg-gray-100",
      success: "bg-green-600 text-white hover:bg-green-700",
      warning: "bg-[#E6B34B] text-white hover:bg-[#d9a13f]",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm min-h-[42px]",
      md: "px-6 py-3 text-base min-h-[48px]",
      lg: "px-8 py-4 text-lg min-h-[56px]",
    };

    const isIconOnly = Icon && !children;

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={`
          ${baseClasses}
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : isIconOnly ? (
          <Icon className="w-6 h-6" />
        ) : (
          <>
            {Icon && <Icon className="w-5 h-5 mr-2" />}
            {children}
          </>
        )}
      </button>
    );
  },
);

export default Button;
