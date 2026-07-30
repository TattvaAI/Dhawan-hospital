import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextArea?: boolean;
  rows?: number;
  containerClassName?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  isTextArea = false,
  rows = 3,
  containerClassName = "",
  className = "",
  id,
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <label htmlFor={inputId} className={`block ${containerClassName}`}>
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{label}</span>
      {isTextArea ? (
        <textarea
          id={inputId}
          rows={rows}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`mt-1.5 w-full rounded-xl glass border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none ${className}`}
        />
      ) : (
        <input
          id={inputId}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className={`mt-1.5 w-full rounded-xl glass border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold transition-colors ${className}`}
        />
      )}
    </label>
  );
};
