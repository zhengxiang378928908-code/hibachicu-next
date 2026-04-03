import Link from "next/link";
import Image from "next/image";
import { menuStates } from "@/lib/menu-states";
import { siteConfig } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section
      id="areas"
      className="py-24"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Where We Serve
        </h2>
        <p className="text-center text-[#ddc1b0] mb-16 text-lg">
          We serve select markets across the East Coast. Browse your local menu and
          pricing below.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* States Grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {menuStates.map((state) => (
                <Link
                  key={state.slug}
                  href={`/menu/${state.slug}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#131f38] px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#1e2a43] hover:text-[#ffb786]"
                >
                  <span className="text-sm">{state.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                OPEN ACUITY
              </a>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/map.png"
              alt="Service areas map"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
