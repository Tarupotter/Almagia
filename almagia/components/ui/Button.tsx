import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; 
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full bg-[#CFC3B5] px-5 py-2 text-sm font-medium text-[#3f3a36] transition-all";

  const hoverAndShadow = disabled
  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
  : "shadow-sm hover:shadow-md hover:bg-[#C3B6A8]";

  const combined = `${base} ${hoverAndShadow}${className ? ` ${className}` : ""}`;

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={combined}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combined}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
