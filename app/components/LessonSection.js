export default function LessonSection({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
        {title}
      </h2>
      <div className="prose prose-lg max-w-none">{children}</div>
    </section>
  );
}
