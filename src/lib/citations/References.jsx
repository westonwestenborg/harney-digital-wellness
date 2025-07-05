import { citations } from './citations.js';

export default function References() {
  return (
    <ol className="space-y-2 list-decimal list-inside">
      {citations.map((c, idx) => (
        <li key={c.id} id={`cite-${idx + 1}`}>{c.text}</li>
      ))}
    </ol>
  );
}
