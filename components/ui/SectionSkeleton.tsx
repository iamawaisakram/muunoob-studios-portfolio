export function SectionSkeleton({ height = 'min-h-[600px]' }: { height?: string }) {
  return (
    <div className={`${height} w-full bg-light-200 animate-pulse`}>
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="space-y-8">
          {/* Header skeleton */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-4 w-24 rounded-full bg-light-300" />
            <div className="h-10 w-96 max-w-full rounded-lg bg-light-300" />
            <div className="h-4 w-80 max-w-full rounded bg-light-300" />
          </div>

          {/* Content skeleton */}
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-light-300 p-6 h-64" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CardsSkeleton() {
  return (
    <div className="min-h-[500px] w-full bg-white animate-pulse py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-light-200 h-80" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSkeleton() {
  return (
    <div className="min-h-[400px] w-full bg-light-200 animate-pulse py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl bg-light-300 h-48 w-full" />
      </div>
    </div>
  )
}

export function ContactSkeleton() {
  return (
    <div className="min-h-[600px] w-full bg-white animate-pulse py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="h-10 w-64 rounded-lg bg-light-200" />
            <div className="h-4 w-full rounded bg-light-200" />
            <div className="h-4 w-3/4 rounded bg-light-200" />
          </div>
          <div className="rounded-2xl bg-light-200 h-96" />
        </div>
      </div>
    </div>
  )
}
