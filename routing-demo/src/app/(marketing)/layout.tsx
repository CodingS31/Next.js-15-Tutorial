export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header style={{ background: "lightblue", padding: "1rem" }}>
        <h1>Marketing Header</h1>
      </header>
      {children}
      <footer style={{ background: "lightgray", padding: "1rem" }}>
        <p>Marketing Footer</p>
      </footer>
    </div>
  );
}
