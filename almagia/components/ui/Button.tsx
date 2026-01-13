// components/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, href, onClick }: ButtonProps) {
  const styles =
    "inline-flex items-center justify-center rounded-full \
   bg-[#CFC3B5] px-5 py-2 text-sm font-medium text-[#3f3a36] \
   shadow-sm hover:shadow-md hover:bg-[#C3B6A8] \
   transition-all";

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
