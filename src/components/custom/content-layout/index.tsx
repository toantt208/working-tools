export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-grow">{children}</div>;
}
