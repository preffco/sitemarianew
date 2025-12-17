import type { LucideIcon } from "lucide-react"

type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
  highlight?: boolean
}

export function FeatureCardsRow({
  items,
  variant,
}: {
  items: FeatureItem[]
  variant: "carousel" | "grid"
}) {
  if (variant === "grid") {
    return (
      <div className="grid grid-cols-2 gap-4">
        {items.map((card) => (
          <div
            key={card.title}
            className={`rounded-[18px] px-7 py-6 border min-h-[160px] flex flex-col ${
              card.highlight ? "border-sky-600 bg-sky-400" : "border-black/5 bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <p className={`font-semibold leading-tight flex-1 ${card.highlight ? "text-white" : "text-neutral-950"}`}>
                {card.title}
              </p>
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  card.highlight ? "bg-amber-400" : "bg-neutral-200"
                }`}
              >
                <card.icon className="h-5 w-5 text-neutral-950" />
              </div>
            </div>
            <div className="flex-1 flex items-end">
              <p className={`text-sm leading-relaxed ${card.highlight ? "text-white/80" : "text-neutral-600"}`}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // carousel
  return (
      <div
        className="overflow-x-auto scrollbar-hide -mx-6 px-6 pb-2 flex gap-4 snap-x snap-mandatory overscroll-x-contain touch-pan-x [-webkit-overflow-scrolling:touch]"
        aria-label="Преимущества (листаются горизонтально)"
      >
      {items.map((card) => (
          <div
            key={card.title}
            className={`snap-start flex-shrink-0 w-[min(200px,55vw)] rounded-[18px] px-5 py-10 border min-h-[250px] flex flex-col ${
              card.highlight ? "border-sky-600 bg-sky-400" : "border-black/5 bg-white"
            }`}
          >
          <div className="flex items-start justify-between gap-4 mb-4">
            <p className={`font-semibold leading-tight text-base flex-1 ${card.highlight ? "text-white" : "text-neutral-950"}`}>
              {card.title}
            </p>
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                card.highlight ? "bg-amber-400" : "bg-neutral-200"
              }`}
            >
              <card.icon className="h-5 w-5 text-neutral-950" />
            </div>
          </div>
          <div className="flex-1 flex items-end">
          <p className={`text-sm leading-relaxed ${card.highlight ? "text-white/80" : "text-neutral-600"}`}>
            {card.description}
          </p>
          </div>
        </div>
      ))}
    </div>
  )
}


