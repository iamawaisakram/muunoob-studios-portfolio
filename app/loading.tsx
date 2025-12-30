export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          <div className="absolute inset-2 animate-pulse rounded-full bg-primary/50" />
          <div className="absolute inset-4 rounded-full bg-primary" />
        </div>
        <div className="font-display text-lg text-gray-400">Loading...</div>
      </div>
    </div>
  )
}
