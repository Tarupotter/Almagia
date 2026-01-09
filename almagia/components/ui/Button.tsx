// components/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, href, onClick }: ButtonProps) {
  const styles =
    "rounded-full bg-[#D1AD95] px-6 py-2 text-sm text-white hover:opacity-90 transition-opacity";

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
