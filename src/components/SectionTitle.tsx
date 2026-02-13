interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  color?: "primary" | "accent";
}

export default function SectionTitle({
  children,
  color = "primary",
  ...props
}: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl font-bold uppercase tracking-[0.15em] sm:text-4xl ${
        color === "accent" ? "text-accent" : "text-primary"
      }`}
      {...props}
    >
      {children}
    </h2>
  );
}
