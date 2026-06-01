type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl ${className}`}
    >
      {title}
    </h2>
  );
}
