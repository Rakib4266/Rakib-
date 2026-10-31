export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
      <span className="font-mono text-emerald-400">{index}.</span>
      {title}
      <span className="hidden h-px flex-1 bg-slate-800 sm:block" />
    </h2>
  );
}
