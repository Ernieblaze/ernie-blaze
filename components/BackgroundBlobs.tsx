export default function BackgroundBlobs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="animate-blob absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald/15 blur-[90px]" />
      <div
        className="animate-blob absolute top-10 right-[-60px] h-80 w-80 rounded-full bg-indigo-300/20 blur-[100px]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="animate-blob absolute bottom-[-80px] left-1/3 h-64 w-64 rounded-full bg-mint blur-[90px]"
        style={{ animationDelay: "8s" }}
      />
    </div>
  );
}
