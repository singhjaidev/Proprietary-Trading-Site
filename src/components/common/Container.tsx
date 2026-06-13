type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 ${className}`}
      style={{
        maxWidth: "var(--container-width)",
      }}
    >
      {children}
    </div>
  );
}