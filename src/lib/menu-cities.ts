import {
  type MenuState,
  type ServiceAreaDetail,
  type StateFaq,
  type StateGalleryItem,
  menuStates,
} from "@/lib/menu-states";

export type MenuCity = {
  stateSlug: string;
  stateName: string;
  stateLabel: string;
  cityName: string;
  citySlug: string;
  path: string;
  metaDescription: string;
  overview: string;
  hostingFocus: string;
  nearbyCoverage: string;
  planningNote: string;
  planningChecklist: string[];
  faqs: StateFaq[];
  photoGallery: StateGalleryItem[];
  venues: string[];
  nearbyMarkets: string[];
  keywords: string[];
};

function slugifySegment(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[.'"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getStateLabel(state: MenuState) {
  return state.name;
}

function buildFaqs(state: MenuState, area: ServiceAreaDetail): StateFaq[] {
  const stateLabel = getStateLabel(state);

  return [
    {
      question: `Do you only serve ${area.name}, or nearby ${stateLabel} areas too?`,
      answer: `We regularly serve ${area.name} plus nearby ${stateLabel} addresses when the property is a good fit for our mobile hibachi setup. Final travel is always confirmed from the exact event address.`,
    },
    {
      question: `What kinds of events book hibachi most often in ${area.name}?`,
      answer: `${area.description} In ${area.name}, the most common bookings are birthdays, family dinners, vacation-rental meals, and private celebrations where hosts want dinner and entertainment in one format.`,
    },
    {
      question: `What should I confirm before booking a ${area.name} hibachi event?`,
      answer: `The most important details are the exact address, the outdoor setup area, and whether the space works best as ${area.venues.slice(0, 2).join(" or ")}. We also recommend locking guest count and start time in advance.`,
    },
  ];
}

function buildPlanningChecklist(state: MenuState, area: ServiceAreaDetail) {
  return [
    `Confirm whether the chef setup in ${area.name} will be on ${area.venues.slice(0, 2).join(" or ")}.`,
    `Share the final address early so we can quote ${area.name} travel and arrival timing accurately.`,
    `${state.travelNote}`,
  ];
}

function buildNearbyCoverage(state: MenuState, area: ServiceAreaDetail, nearbyMarkets: string[]) {
  const stateLabel = getStateLabel(state);

  if (nearbyMarkets.length === 0) {
    return `We quote ${area.name} events across ${stateLabel} from the exact property, especially when the setup is at ${area.venues.join(", ")}.`;
  }

  return `We usually plan ${area.name} events alongside nearby ${stateLabel} markets like ${nearbyMarkets.join(", ")}. That helps us quote the right travel window instead of treating every address the same.`;
}

function buildPhotoGallery(area: ServiceAreaDetail, state: MenuState) {
  return state.photoGallery.map((photo, index) => ({
    ...photo,
    alt: `${area.name} hibachi catering inspiration ${index + 1}`,
    caption:
      index === 0
        ? `A setup style that fits ${area.name} bookings at ${area.venues.slice(0, 2).join(" and ")}.`
        : `${photo.caption} This layout works especially well for ${area.name} private hibachi events.`,
  }));
}

function buildMenuCity(state: MenuState, area: ServiceAreaDetail): MenuCity {
  const stateLabel = getStateLabel(state);
  const citySlug = slugifySegment(area.name);
  const path = `/menu/${state.slug}/${citySlug}`;
  const nearbyMarkets = state.serviceAreas
    .filter((serviceArea) => serviceArea.name !== area.name)
    .map((serviceArea) => serviceArea.name)
    .slice(0, 3);

  const locationLabel =
    state.slug === "washington-dc" ? area.name : `${area.name}, ${stateLabel}`;

  return {
    stateSlug: state.slug,
    stateName: state.name,
    stateLabel,
    cityName: area.name,
    citySlug,
    path,
    metaDescription: `Book ${locationLabel} hibachi catering with mobile chef pricing, backyard party service, and private at-home hibachi for ${area.name} events.`,
    overview: `${area.description} ${state.overview}`,
    hostingFocus: `${state.eventFocus} In ${area.name}, the best-fit venue types are ${area.venues.join(", ")}.`,
    nearbyCoverage: buildNearbyCoverage(state, area, nearbyMarkets),
    planningNote: `${state.travelNote} We plan ${area.name} bookings around the exact property layout and access notes.`,
    planningChecklist: buildPlanningChecklist(state, area),
    faqs: buildFaqs(state, area),
    photoGallery: buildPhotoGallery(area, state),
    venues: area.venues,
    nearbyMarkets,
    keywords: [
      `${area.name} hibachi catering`,
      `${area.name} hibachi at home`,
      `${area.name} private hibachi chef`,
      `${stateLabel} hibachi catering`,
    ],
  };
}

export const menuCities = menuStates.flatMap((state) =>
  state.serviceAreas.map((area) => buildMenuCity(state, area))
);

const citySlugCounts = menuCities.reduce<Record<string, number>>((counts, city) => {
  counts[city.citySlug] = (counts[city.citySlug] ?? 0) + 1;
  return counts;
}, {});

export const legacyMenuCityPathMap = new Map(
  menuCities.flatMap((city) => {
    const aliases = new Set<string>([`/menu/${city.stateSlug}-${city.citySlug}`]);

    // Some older programmatic location pages used a single market slug under /menu.
    if (citySlugCounts[city.citySlug] === 1) {
      aliases.add(`/menu/${city.citySlug}`);
    }

    if (city.stateSlug === "washington-dc") {
      aliases.add(`/menu/dc-${city.citySlug}`);
    }

    return [...aliases].map((alias) => [alias, city.path] as const);
  })
);

export function getMenuCity(stateSlug: string, citySlug: string) {
  return menuCities.find(
    (city) => city.stateSlug === stateSlug && city.citySlug === citySlug
  );
}

export function getMenuCitiesForState(stateSlug: string) {
  return menuCities.filter((city) => city.stateSlug === stateSlug);
}
