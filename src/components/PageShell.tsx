export default function PageShell() {
  return (
    <main className="app-shell" aria-label="AI TriView">
      <div className="dashboard-frame">
        <header className="page-header">
          <p className="page-kicker">Dashboard</p>
          <h1>AI TriView</h1>
        </header>
        <section className="dashboard-host" aria-label="AI TriView dashboard" />
      </div>
    </main>
  );
}
