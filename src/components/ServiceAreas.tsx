import Link from "next/link";
import Image from "next/image";
import { menuStates } from "@/lib/menu-states";
import { siteConfig } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section
      id="areas"
      className="py-20 px-5"
      style={{ background: "var(--color-dark-bg-alt)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-14">
          Service <span className="text-[#fb8f2c]">Areas</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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

          {/* Areas List */}
          <div>
            <h3 className="text-[28px] text-white mb-6">We Come to You!</h3>
            <p className="text-white/70 mb-6 leading-[1.8]">
              Hibachi CU provides mobile hibachi catering services across multiple states. Explore
              menu pricing and service details for your area below:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {menuStates.map((state) => (
                <Link
                  key={state.slug}
                  href={`/menu/${state.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#15213a]/40 px-4 py-3 text-white/85 transition-colors duration-300 hover:border-[#fb8f2c]/40 hover:text-white"
                >
                  <span className="text-[#fb8f2c]">📍</span>
                  <span className="text-[15px]">{state.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                BOOK ONLINE NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
