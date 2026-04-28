import BookNowLink from "@/components/BookNowLink";

type PromotionalOfferProps = {
  ctaName: string;
  align?: "left" | "center";
  className?: string;
};

export default function PromotionalOffer({
  ctaName,
  align = "left",
  className = "",
}: PromotionalOfferProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center sm:justify-center"
      : "text-left";

  return (
    <BookNowLink
      ctaName={ctaName}
      className={`group inline-flex max-w-full flex-col gap-1 rounded-lg border border-[#facc15]/50 bg-[#1a1512]/70 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#facc15] hover:bg-[#2a2018]/85 sm:flex-row sm:items-center sm:gap-4 ${alignment} ${className}`}
    >
      <span className="text-xl font-black leading-tight text-[#ffe08a] drop-shadow md:text-2xl">
        Groups of 15+ Guests Save $50
      </span>
      <span className="text-sm font-semibold leading-snug text-white/85 md:text-base">
        Take $50 off your event total when you book for 15 or more guests.
      </span>
    </BookNowLink>
  );
}
