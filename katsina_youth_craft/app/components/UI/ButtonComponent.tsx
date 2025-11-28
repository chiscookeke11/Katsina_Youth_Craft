import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonComponent({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-all cursor-pointer ${className}`}
      {...props}
    >
      {/* <span className="w-5 h-5 border-2 border-white rounded-sm"></span> */}
      <span className="font-medium">{children}</span>
    </button>
  );
}
