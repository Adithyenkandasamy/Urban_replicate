import React from "react";

type Props = {
  id: string;
  title: string;
};

export default function HorizontalSection({ id, title }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 mt-10">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a href="#" className="text-sm text-black/60 hover:text-black">See all</a>
      </div>
      <div className="flex gap-4 overflow-x-auto snap-x pb-2">
        {[...Array(10)].map((_, i) => (
          <article key={i} className="min-w-[180px] snap-start">
            <div className="relative h-36 rounded-xl overflow-hidden border bg-white">
              {/* Card image */}
              <div className="absolute inset-0 grid place-items-center bg-neutral-100 text-neutral-500 text-xs">{/* image */}</div>
            </div>
            <h3 className="mt-2 text-sm font-medium truncate">Service {i + 1}</h3>
            <p className="text-xs text-black/60">4.{(7 + (i % 3)) % 10} • 5k+ bookings</p>
          </article>
        ))}
      </div>
    </section>
  );
}
