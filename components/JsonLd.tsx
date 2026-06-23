/**
 * Renders a JSON-LD structured-data block. Content is trusted (built from our
 * own data), so dangerouslySetInnerHTML is appropriate here.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
