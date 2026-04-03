export type ServiceAreaDetail = {
  name: string;
  description: string;
  venues: string[];
};

export type HighlightDetail = {
  title: string;
  description: string;
};

export type StateFaq = {
  question: string;
  answer: string;
};

export type StateGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

export type MenuState = {
  slug: string;
  name: string;
  region: string;
  markets: string[];
  metaDescription: string;
  overview: string;
  eventFocus: string;
  travelNote: string;
  serviceAreaIntro: string;
  serviceAreas: ServiceAreaDetail[];
  hostingHighlights: HighlightDetail[];
  planningChecklist: string[];
  localFaqs: StateFaq[];
  photoGallery: StateGalleryItem[];
  legacyPaths: string[];
};

export const menuStates: MenuState[] = [
  {
    slug: "connecticut",
    name: "Connecticut",
    region: "New England",
    markets: ["Stamford", "Greenwich", "New Haven", "Hartford"],
    metaDescription:
      "Explore Connecticut hibachi catering pricing, backyard party packages, and private hibachi chef service for Stamford, Greenwich, New Haven, Hartford, and nearby towns.",
    overview:
      "Connecticut bookings are often centered around polished backyard birthdays, graduation dinners, and private celebrations where guests want dinner and entertainment in one setup.",
    eventFocus:
      "Fairfield County hosts usually book for elevated birthdays and family milestones, while New Haven and Hartford parties trend toward larger reunions, graduation weekends, and neighborhood gatherings.",
    travelNote:
      "Traffic between lower Fairfield County and central Connecticut can shift quickly on Fridays and weekends, so earlier planning helps us protect the best dinner window.",
    serviceAreaIntro:
      "Our Connecticut coverage is strongest across lower Fairfield County, New Haven County, and the Hartford corridor, with travel quoted from the exact address instead of a one-size-fits-all fee.",
    serviceAreas: [
      {
        name: "Stamford",
        description:
          "A strong fit for backyard birthdays, apartment amenity spaces, and polished at-home dinners where hosts want a premium chef experience without going into the city.",
        venues: ["backyards", "townhome patios", "rooftop amenity decks"],
      },
      {
        name: "Greenwich",
        description:
          "Greenwich events usually lean private and upscale, with plenty of bookings for milestone dinners, graduation parties, and summer entertaining at home.",
        venues: ["estate patios", "poolside setups", "private family homes"],
      },
      {
        name: "New Haven",
        description:
          "New Haven area bookings work well for family parties, graduation dinners, and mixed-age celebrations where the hibachi show keeps the whole group engaged.",
        venues: ["suburban yards", "multi-family homes", "weekend rentals"],
      },
      {
        name: "Hartford",
        description:
          "Hartford and the surrounding suburbs are ideal for larger backyard gatherings that need reliable arrival timing, easy setup, and a menu that works across different age groups.",
        venues: ["driveway setups", "large patios", "family event spaces"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "Connecticut hosts most often book for birthdays, graduation dinners, anniversaries, and backyard weekends where they want the night to feel high-touch but still easy to manage.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Fairfield County addresses typically need tighter arrival planning, while New Haven and Hartford groups have more flexibility for larger setups and earlier start times.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "A flat outdoor space, guest count locked in ahead of time, and clear parking or access details make Connecticut events run especially cleanly.",
      },
    ],
    planningChecklist: [
      "Share the exact town early so we can quote travel correctly between Fairfield County and central Connecticut.",
      "For condo or townhouse events, confirm whether the chef setup is on a patio, driveway, or common outdoor space.",
      "Weekend graduation and summer Saturday slots fill first, especially around Stamford and Greenwich.",
    ],
    localFaqs: [
      {
        question: "Do you cover both Fairfield County and central Connecticut?",
        answer:
          "Yes. We regularly serve Stamford, Greenwich, New Haven, Hartford, and nearby Connecticut towns. Travel timing and fees depend on the exact address, not just the state.",
      },
      {
        question: "What kinds of Connecticut events book hibachi most often?",
        answer:
          "The most common Connecticut bookings are backyard birthdays, graduation dinners, family celebrations, and polished private chef nights at home.",
      },
      {
        question: "How far ahead should I book a Connecticut date?",
        answer:
          "We recommend booking as early as possible for peak spring graduation weekends and summer Saturdays, especially if your event is in lower Fairfield County.",
      },
    ],
    photoGallery: [
      {
        src: "/images/menu-hibachi-table-1.png",
        alt: "Connecticut hibachi setup inspiration for backyard entertaining",
        caption: "A layout that works well for Stamford and Greenwich backyard dinner parties.",
        position: "center center",
      },
      {
        src: "/images/gallery5.jpg",
        alt: "Connecticut hibachi fried rice and grill setup inspiration",
        caption: "Food-forward service that fits New Haven family gatherings and graduation dinners.",
        position: "center 70%",
      },
      {
        src: "/images/gallery8.jpg",
        alt: "Connecticut outdoor hibachi grill inspiration for private parties",
        caption: "An easy outdoor setup style for Hartford-area homes and larger suburban patios.",
        position: "center center",
      },
    ],
    legacyPaths: ["/connecticut-hibachi-menu", "/menu/connecticut-hibachi-menu"],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    region: "New England",
    markets: ["Boston", "Worcester", "Cambridge", "Cape Cod"],
    metaDescription:
      "See Massachusetts hibachi menu pricing and private chef options for Boston, Cambridge, Worcester, Cape Cod, and nearby backyard hibachi events.",
    overview:
      "Massachusetts events range from compact city celebrations near Boston and Cambridge to bigger backyard dinners and summer rentals around Worcester and Cape Cod.",
    eventFocus:
      "Boston and Cambridge bookings usually prioritize convenience and space planning, while Worcester and Cape Cod are stronger for family weekends, summer rentals, and larger private homes.",
    travelNote:
      "Cape traffic, summer shore movement, and tighter urban access around Boston can all affect arrival timing, so a little lead time makes scheduling smoother.",
    serviceAreaIntro:
      "Massachusetts bookings often split between city-adjacent events and destination-style weekends, so we plan setup around parking, guest flow, and whether the event is at a primary home or rental.",
    serviceAreas: [
      {
        name: "Boston",
        description:
          "Boston-area hibachi works best for smaller curated groups that want the chef performance at home instead of dealing with restaurant reservations and travel.",
        venues: ["brownstone patios", "amenity terraces", "private courtyards"],
      },
      {
        name: "Cambridge",
        description:
          "Cambridge bookings are often intimate birthdays, graduation-adjacent dinners, and professional gatherings that need a clean setup in tighter spaces.",
        venues: ["shared patios", "townhome courtyards", "small backyard spaces"],
      },
      {
        name: "Worcester",
        description:
          "Worcester is a strong fit for larger backyard groups, family milestone dinners, and weekend celebrations where guest counts are higher and space is easier.",
        venues: ["suburban patios", "family backyards", "covered outdoor spaces"],
      },
      {
        name: "Cape Cod",
        description:
          "Cape Cod dates are ideal for summer rentals, reunion dinners, and vacation-week meals where the host wants a memorable centerpiece without leaving the house.",
        venues: ["vacation rentals", "beach-house patios", "poolside decks"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "Massachusetts hosts most often book for birthdays, graduation weekends, rehearsal dinners, and summer rental stays that need both entertainment and a clear dinner format.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Boston and Cambridge need more attention to loading, parking, and path-of-travel, while Worcester and Cape Cod are more about drive times and seasonal scheduling.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "The most successful Massachusetts parties have a confirmed outdoor setup area, realistic start time, and host contact available for access details on the day of service.",
      },
    ],
    planningChecklist: [
      "Cape Cod weekends and summer holidays should be booked early because travel windows tighten quickly.",
      "For Boston or Cambridge events, share loading instructions and whether stairs or elevators are involved.",
      "Let us know if the booking is at a vacation rental so we can plan around property check-in and quiet-hour rules.",
    ],
    localFaqs: [
      {
        question: "Do you serve both Boston and Cape Cod?",
        answer:
          "Yes. We cover Boston, Cambridge, Worcester, Cape Cod, and surrounding Massachusetts markets. Travel fees and scheduling depend on the exact address.",
      },
      {
        question: "Are Massachusetts hibachi bookings good for rentals and vacation houses?",
        answer:
          "Yes. Cape Cod and other summer-rental stays are a strong fit as long as there is a workable outdoor setup space and we have the property details in advance.",
      },
      {
        question: "What should I plan for an urban Massachusetts event?",
        answer:
          "For Boston and Cambridge, the most important details are parking, loading access, and having enough outdoor space for the grill, seating, and guest flow.",
      },
    ],
    photoGallery: [
      {
        src: "/images/menu-hibachi-table-2.png",
        alt: "Massachusetts private hibachi dinner setup inspiration",
        caption: "A clean setup style that fits city-adjacent Boston and Cambridge celebrations.",
        position: "center center",
      },
      {
        src: "/images/gallery6.jpg",
        alt: "Massachusetts hibachi chef performance inspiration for backyard events",
        caption: "An easy format for Worcester family parties and larger home gatherings.",
        position: "center center",
      },
      {
        src: "/images/gallery9.jpg",
        alt: "Massachusetts outdoor hibachi event inspiration for vacation rentals",
        caption: "The kind of relaxed setup hosts love for Cape Cod weekend rentals.",
        position: "center center",
      },
    ],
    legacyPaths: ["/massachusetts-hibachi-menu", "/menu/massachusetts-hibachi-menu"],
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    region: "New England",
    markets: ["Providence", "Newport", "Warwick", "Narragansett"],
    metaDescription:
      "Browse Rhode Island hibachi catering packages for Providence, Newport, Warwick, Narragansett, and private hibachi chef events by the coast.",
    overview:
      "Rhode Island is a strong fit for intimate backyard dinners, coastal vacation rentals, and summer weekends where guests want a lively dinner experience without leaving home.",
    eventFocus:
      "Providence and Warwick commonly book family-style celebrations, while Newport and Narragansett are ideal for waterfront rentals, bachelor or bachelorette weekends, and seasonal get-togethers.",
    travelNote:
      "Coastal dates can book quickly in warmer months, especially near Newport and Narragansett, so reserving ahead matters more here than in many inland markets.",
    serviceAreaIntro:
      "Rhode Island bookings are usually less about distance and more about timing, seasonal demand, and whether the property is a year-round home or a short-term coastal rental.",
    serviceAreas: [
      {
        name: "Providence",
        description:
          "Providence events are usually birthdays, family dinners, and private celebrations where hosts want a dinner format that feels festive without getting overly formal.",
        venues: ["city backyards", "patios", "private courtyards"],
      },
      {
        name: "Newport",
        description:
          "Newport is ideal for waterfront homes, summer weekends, and travel groups who want a memorable chef experience at the property instead of dining out.",
        venues: ["waterfront patios", "vacation homes", "event-weekend rentals"],
      },
      {
        name: "Warwick",
        description:
          "Warwick works especially well for neighborhood parties and family gatherings where guest counts are moderate and setup access is straightforward.",
        venues: ["residential patios", "driveways", "backyard dining spaces"],
      },
      {
        name: "Narragansett",
        description:
          "Narragansett bookings lean heavily seasonal, with strong demand for summer rentals, beach-house dinners, and weekend groups celebrating together.",
        venues: ["shore rentals", "beach-house decks", "poolside spaces"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "Rhode Island hosts most often call for vacation-house dinners, birthdays, bachelorette weekends, and family gatherings where the chef show becomes the center of the night.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Providence and Warwick are usually simpler operationally, while Newport and Narragansett require more advance planning because of traffic, rentals, and peak-season demand.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "For coastal events, the key details are exact property access, start time, and whether the host is coordinating around check-in, beach plans, or multiple families.",
      },
    ],
    planningChecklist: [
      "Summer weekends near Newport and Narragansett should be reserved early.",
      "If the event is at a coastal rental, confirm parking and whether the chef setup is on a deck, patio, or yard.",
      "Keep guest count firm before the event so the cooking pace and setup are matched to the group.",
    ],
    localFaqs: [
      {
        question: "Do you serve Rhode Island beach towns and rentals?",
        answer:
          "Yes. Newport and Narragansett are strong markets for hibachi at home, especially for summer rentals and coastal group weekends.",
      },
      {
        question: "What are the most common Rhode Island hibachi events?",
        answer:
          "The most common bookings are birthdays, waterfront dinners, bachelor or bachelorette weekends, and family gatherings at home or in a rental.",
      },
      {
        question: "When should I book a Rhode Island date?",
        answer:
          "For coastal Rhode Island weekends in peak season, earlier is always better. Prime Fridays and Saturdays book first.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery1.jpg",
        alt: "Rhode Island hibachi event inspiration for coastal gatherings",
        caption: "A relaxed format that works well for Providence-area family dinners.",
        position: "center center",
      },
      {
        src: "/images/gallery10.jpg",
        alt: "Rhode Island hibachi chef setup inspiration for waterfront rentals",
        caption: "The kind of chef-at-home experience Newport and Narragansett groups usually want.",
        position: "center center",
      },
      {
        src: "/images/gallery11.jpg",
        alt: "Rhode Island backyard hibachi inspiration for summer weekends",
        caption: "A simple outdoor service style for Warwick patios and beach-house weekends.",
        position: "center center",
      },
    ],
    legacyPaths: ["/rhode-island-hibachi-menu", "/menu/rhode-island-hibachi-menu"],
  },
  {
    slug: "vermont",
    name: "Vermont",
    region: "New England",
    markets: ["Burlington", "Stowe", "Montpelier", "Killington"],
    metaDescription:
      "Find Vermont hibachi catering pricing and private hibachi chef service for Burlington, Stowe, Montpelier, Killington, and mountain vacation stays.",
    overview:
      "Vermont bookings are often tied to ski-house weekends, mountain birthdays, family reunions, and destination stays where guests want a private dining experience on-site.",
    eventFocus:
      "Stowe and Killington work especially well for vacation rentals and resort-area groups, while Burlington and Montpelier see more local birthdays, anniversaries, and family gatherings.",
    travelNote:
      "Mountain travel and weather can influence timing in Vermont, so we recommend flexible booking windows and early planning for peak winter or foliage weekends.",
    serviceAreaIntro:
      "Vermont events are less about urban setup constraints and more about travel timing, weather, and making sure the property can comfortably host both the grill and guest seating outdoors.",
    serviceAreas: [
      {
        name: "Burlington",
        description:
          "Burlington bookings often center on birthdays, graduation weekends, and polished private dinners where the chef show makes a smaller gathering feel like a full event.",
        venues: ["backyards", "lake-adjacent homes", "patio dining spaces"],
      },
      {
        name: "Stowe",
        description:
          "Stowe is a natural fit for destination stays, ski-house weekends, and hosted dinners where guests want to stay at the property after a full day out.",
        venues: ["mountain rentals", "vacation chalets", "lodge patios"],
      },
      {
        name: "Montpelier",
        description:
          "Montpelier works well for family milestone dinners and local home events where the host wants a memorable format without coordinating a large off-site reservation.",
        venues: ["family homes", "covered patios", "private yards"],
      },
      {
        name: "Killington",
        description:
          "Killington bookings are usually built around weekend groups, ski houses, and vacation homes where hibachi becomes the social centerpiece for the trip.",
        venues: ["ski rentals", "mountain homes", "group getaway properties"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "Vermont groups usually book for weekend trips, birthdays, reunions, and house-based entertaining where everyone wants a fun dinner without driving again.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Mountain destinations such as Stowe and Killington require more lead time, while Burlington and Montpelier events are usually easier to slot on flexible dates.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "The biggest wins are a clear outdoor cooking area, realistic travel window, and backup thinking around cold-weather timing during winter weekends.",
      },
    ],
    planningChecklist: [
      "Peak ski and foliage weekends should be booked early because travel and staffing windows are tighter.",
      "Tell us whether the event is at a mountain rental, primary home, or resort-area property.",
      "If the group is arriving the same day, avoid overly early dinner times that collide with check-in or traffic.",
    ],
    localFaqs: [
      {
        question: "Are Vermont hibachi bookings good for ski houses and rentals?",
        answer:
          "Yes. Stowe and Killington are especially strong for vacation rentals and ski-house weekends, as long as there is a workable outdoor setup area.",
      },
      {
        question: "Do you serve Burlington and central Vermont too?",
        answer:
          "Yes. We regularly serve Burlington, Montpelier, and destination markets such as Stowe and Killington, with travel quoted from the exact address.",
      },
      {
        question: "What should I plan for a Vermont winter booking?",
        answer:
          "The most important details are the property location, weather-aware timing, and whether the setup area stays accessible and safe in colder conditions.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery2.jpg",
        alt: "Vermont hibachi setup inspiration for mountain rentals",
        caption: "A cozy event format that works well for Burlington birthdays and private dinners.",
        position: "center center",
      },
      {
        src: "/images/gallery7.jpg",
        alt: "Vermont private hibachi dinner inspiration for ski-house weekends",
        caption: "The kind of at-home dinner Stowe and Killington groups love after a full day out.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-1.png",
        alt: "Vermont backyard hibachi inspiration for destination stays",
        caption: "An easy-to-host setup for Montpelier homes and mountain vacation properties.",
        position: "center center",
      },
    ],
    legacyPaths: ["/vermont-hibachi-menu", "/menu/vermont-hibachi-menu"],
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    region: "New England",
    markets: ["Portsmouth", "Manchester", "Nashua", "Lake Winnipesaukee"],
    metaDescription:
      "View New Hampshire hibachi menu pricing for Portsmouth, Manchester, Nashua, Lake Winnipesaukee, and private backyard hibachi chef events.",
    overview:
      "New Hampshire is popular for lake-house weekends, backyard parties, and casual private chef nights where the grill show adds energy without the hassle of going out.",
    eventFocus:
      "Portsmouth and Lake Winnipesaukee tend to draw summer groups and weekend rentals, while Manchester and Nashua commonly book birthdays, family dinners, and neighborhood gatherings.",
    travelNote:
      "Weekend traffic toward lake destinations can impact arrival windows, so early evening bookings are usually the most reliable on busy summer dates.",
    serviceAreaIntro:
      "New Hampshire bookings usually split between local residential parties and destination weekends, so we plan around whether the event is a same-day home setup or a travel-heavy lake booking.",
    serviceAreas: [
      {
        name: "Portsmouth",
        description:
          "Portsmouth is a strong fit for smaller coastal celebrations, backyard birthdays, and house-based dinners where the host wants the night to stay social and low-friction.",
        venues: ["private patios", "coastal homes", "courtyard spaces"],
      },
      {
        name: "Manchester",
        description:
          "Manchester bookings are often family birthdays and neighborhood gatherings where guest counts are solid and the setup area is straightforward.",
        venues: ["backyards", "driveways", "suburban patios"],
      },
      {
        name: "Nashua",
        description:
          "Nashua works well for birthdays, anniversaries, and private home dinners where guests want restaurant-style hibachi without leaving the property.",
        venues: ["townhome patios", "residential yards", "family homes"],
      },
      {
        name: "Lake Winnipesaukee",
        description:
          "Lake Winnipesaukee is one of the best fits for vacation homes and long-weekend groups that want dinner, entertainment, and a clean host experience on-site.",
        venues: ["lake houses", "dockside patios", "vacation rentals"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "New Hampshire hosts most often book for birthdays, family gatherings, weekend getaways, and lake-house stays where hibachi becomes the night’s main event.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Manchester and Nashua are typically easier weekday or weekend fits, while Portsmouth and lake bookings need more lead time during warm-weather months.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "Property access, realistic dinner timing, and knowing whether the event is a home or rental booking are the details that make the biggest difference.",
      },
    ],
    planningChecklist: [
      "Summer lake weekends should be booked early because arrival windows can tighten with traffic.",
      "If the event is at a vacation home, share parking and outdoor setup notes as soon as you have them.",
      "For neighborhood parties, confirm whether the setup is on grass, pavers, concrete, or a deck-adjacent area.",
    ],
    localFaqs: [
      {
        question: "Do you serve lake houses in New Hampshire?",
        answer:
          "Yes. Lake Winnipesaukee is one of our strongest destination-style New Hampshire markets for hibachi at home.",
      },
      {
        question: "Are New Hampshire hibachi bookings only for big groups?",
        answer:
          "No. We see everything from intimate backyard dinners in Portsmouth and Nashua to larger travel groups at lake rentals.",
      },
      {
        question: "What is the main thing to plan for a New Hampshire booking?",
        answer:
          "The most important details are the exact location, the outdoor setup space, and whether summer travel could affect the preferred dinner time.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery3.jpg",
        alt: "New Hampshire backyard hibachi inspiration for family parties",
        caption: "A comfortable setup style for Manchester and Nashua home celebrations.",
        position: "center center",
      },
      {
        src: "/images/gallery8.jpg",
        alt: "New Hampshire hibachi grill inspiration for lake-house weekends",
        caption: "The kind of chef-at-home experience Lake Winnipesaukee groups book for long weekends.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-2.png",
        alt: "New Hampshire private hibachi dinner inspiration for coastal homes",
        caption: "An easy private dinner format for Portsmouth patios and backyard gatherings.",
        position: "center center",
      },
    ],
    legacyPaths: ["/new-hampshire-hibachi-menu", "/menu/new-hampshire-hibachi-menu"],
  },
  {
    slug: "new-york",
    name: "New York",
    region: "Mid-Atlantic",
    markets: ["New York City", "Long Island", "Westchester", "Hudson Valley"],
    metaDescription:
      "Explore New York hibachi catering packages and private chef pricing for NYC, Long Island, Westchester, Hudson Valley, and at-home hibachi events.",
    overview:
      "New York bookings span everything from curated city dinners and suburban backyard parties to full weekend celebrations in Long Island and the Hudson Valley.",
    eventFocus:
      "City events usually prioritize access and convenience, while Long Island, Westchester, and the Hudson Valley trend toward birthdays, milestone dinners, and larger family gatherings.",
    travelNote:
      "Traffic, parking, elevators, and property access matter more in New York than most states, so detailed location notes help us confirm the right arrival and service window.",
    serviceAreaIntro:
      "New York service is highly location-sensitive. We quote from the exact borough, town, or property because city loading rules and suburban drive times can change the logistics completely.",
    serviceAreas: [
      {
        name: "New York City",
        description:
          "NYC bookings are strongest for private rooftop or patio gatherings, milestone dinners at home, and building-friendly setups that give guests a premium night in.",
        venues: ["terraces", "private courtyards", "residential amenity spaces"],
      },
      {
        name: "Long Island",
        description:
          "Long Island is ideal for larger backyard birthdays, poolside dinners, and family celebrations where guests want a full hibachi show without leaving the house.",
        venues: ["backyards", "pool decks", "family homes"],
      },
      {
        name: "Westchester",
        description:
          "Westchester bookings are a great fit for polished private dinners and milestone parties at homes that have the space for both the grill and comfortable guest seating.",
        venues: ["estate patios", "suburban yards", "covered outdoor areas"],
      },
      {
        name: "Hudson Valley",
        description:
          "Hudson Valley events often center on weekend homes, larger family gatherings, and destination-style celebrations where everyone stays on-site.",
        venues: ["country homes", "vacation rentals", "weekend retreat properties"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "New York hosts most often book for birthdays, anniversaries, bachelorette weekends, private chef nights, and multi-family celebrations that need both dinner and energy.",
      },
      {
        title: "Local planning rhythm",
        description:
          "NYC is mostly about access and loading, while Long Island and Westchester are about start time, guest count, and the outdoor footprint available for the setup.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "For New York parties, the biggest wins are accurate venue notes, a real host contact on-site, and no surprises around stairs, parking, or doorman access.",
      },
    ],
    planningChecklist: [
      "For New York City, share building rules, elevator details, and loading notes before the final confirmation.",
      "For Long Island and Hudson Valley properties, confirm whether the chef setup is on grass, pavers, patio, or poolside hardscape.",
      "Friday and Saturday evenings book fastest across Westchester, Long Island, and NYC-adjacent markets.",
    ],
    localFaqs: [
      {
        question: "Do you serve both New York City and suburban markets?",
        answer:
          "Yes. We cover NYC, Long Island, Westchester, Hudson Valley, and nearby New York markets, with logistics planned around the exact address.",
      },
      {
        question: "What is the biggest planning difference for New York events?",
        answer:
          "The biggest variables are building access in the city and drive-time coordination for suburban or destination properties.",
      },
      {
        question: "Are New York hibachi bookings good for larger home celebrations?",
        answer:
          "Yes. Long Island, Westchester, and Hudson Valley homes are especially strong fits for larger backyard birthdays, milestone dinners, and family weekends.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery4.jpg",
        alt: "New York hibachi setup inspiration for private chef events",
        caption: "A polished dinner format that works well for city-adjacent private events and smaller curated groups.",
        position: "center center",
      },
      {
        src: "/images/gallery9.jpg",
        alt: "New York backyard hibachi inspiration for suburban homes",
        caption: "The kind of setup Long Island and Westchester hosts book for birthdays and family milestones.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-1.png",
        alt: "New York hibachi grill inspiration for Hudson Valley weekend homes",
        caption: "A destination-style chef experience that fits Hudson Valley weekend gatherings.",
        position: "center center",
      },
    ],
    legacyPaths: [
      "/new-york-hibachi-menu",
      "/menu/new-york-hibachi-menu",
      "/nyc-hibachi-menu",
      "/long-island-hibachi-menu",
    ],
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    region: "Mid-Atlantic",
    markets: ["Jersey City", "Hoboken", "Princeton", "Monmouth County"],
    metaDescription:
      "Check New Jersey hibachi menu pricing and private hibachi chef service for Jersey City, Hoboken, Princeton, Monmouth County, and nearby events.",
    overview:
      "New Jersey works especially well for backyard birthday parties, graduation celebrations, and family dinners where guests want restaurant-style hibachi without leaving the house.",
    eventFocus:
      "Jersey City and Hoboken often book for smaller private groups with limited space, while Princeton and Monmouth County are a great fit for larger homes, patios, and weekend celebrations.",
    travelNote:
      "Because travel can shift significantly between North Jersey and the shore, we usually confirm timing and travel fees based on the exact address before finalizing the booking.",
    serviceAreaIntro:
      "New Jersey events vary more by property style than by state line, so we plan around whether the event is in a compact urban space, a suburban home, or a shore-adjacent weekend property.",
    serviceAreas: [
      {
        name: "Jersey City",
        description:
          "Jersey City bookings are ideal for polished private dinners and amenity-space gatherings where hosts want a memorable chef experience without restaurant logistics.",
        venues: ["amenity terraces", "private patios", "shared outdoor courtyards"],
      },
      {
        name: "Hoboken",
        description:
          "Hoboken events usually involve tighter footprints, smaller groups, and a premium at-home dinner experience built around convenience and atmosphere.",
        venues: ["roof decks", "townhome patios", "compact outdoor spaces"],
      },
      {
        name: "Princeton",
        description:
          "Princeton is a strong fit for graduation dinners, family milestones, and backyard gatherings that want a polished but easy-to-host dinner format.",
        venues: ["suburban yards", "family homes", "covered patios"],
      },
      {
        name: "Monmouth County",
        description:
          "Monmouth County is one of the better New Jersey markets for larger homes, summer weekends, and shore-adjacent entertaining with plenty of outdoor space.",
        venues: ["poolside patios", "coastal homes", "backyard party setups"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "New Jersey hosts book hibachi most often for birthdays, graduation weekends, family dinners, and house-based entertaining where guests want both dinner and a show.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Jersey City and Hoboken need more attention to access and setup footprint, while Princeton and Monmouth County are more about travel timing and guest count.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "The smoothest New Jersey parties have clear access notes, a hard-surface setup area, and a realistic sense of how shore traffic may affect evening timing.",
      },
    ],
    planningChecklist: [
      "For Jersey City and Hoboken, confirm where the grill will be set up and how the team enters the property.",
      "For Monmouth County events, book early on summer Fridays and Saturdays.",
      "If the booking is near the shore, share the exact town and address as soon as possible for accurate travel planning.",
    ],
    localFaqs: [
      {
        question: "Do you serve both North Jersey and shore markets?",
        answer:
          "Yes. We regularly serve Jersey City, Hoboken, Princeton, Monmouth County, and nearby New Jersey areas, with pricing finalized from the exact event address.",
      },
      {
        question: "What are the best New Jersey event types for hibachi at home?",
        answer:
          "The most common New Jersey bookings are birthdays, graduations, family dinners, summer shore weekends, and house-based celebrations.",
      },
      {
        question: "What should I plan for a New Jersey booking?",
        answer:
          "The key details are the setup footprint, parking or access notes, and whether shore traffic could affect the preferred dinner time.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery6.jpg",
        alt: "New Jersey hibachi event inspiration for private home parties",
        caption: "A flexible dinner format for Jersey City and Hoboken hosts who want a polished night in.",
        position: "center center",
      },
      {
        src: "/images/gallery10.jpg",
        alt: "New Jersey backyard hibachi inspiration for family celebrations",
        caption: "The kind of setup Princeton and Monmouth County families book for milestone dinners.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-2.png",
        alt: "New Jersey private hibachi chef inspiration for outdoor events",
        caption: "A reliable layout for suburban patios, poolside parties, and shore-adjacent gatherings.",
        position: "center center",
      },
    ],
    legacyPaths: ["/new-jersey-hibachi-menu", "/menu/new-jersey-hibachi-menu"],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    region: "Mid-Atlantic",
    markets: ["Philadelphia", "Main Line", "Poconos", "Pittsburgh"],
    metaDescription:
      "See Pennsylvania hibachi catering prices and private chef options for Philadelphia, Main Line, the Poconos, Pittsburgh, and backyard hibachi events.",
    overview:
      "Pennsylvania bookings cover a wide mix of city-adjacent dinners, suburban backyard celebrations, and destination weekends in the Poconos where guests want dinner and entertainment together.",
    eventFocus:
      "Philadelphia and the Main Line often book milestone birthdays and family celebrations, while Poconos trips are popular for vacation homes, bachelor weekends, and large-group getaways.",
    travelNote:
      "Distance between Pennsylvania markets can be substantial, so the exact location matters when we quote travel and recommend the best service window.",
    serviceAreaIntro:
      "Pennsylvania service spans both residential home markets and destination bookings, so we plan around whether the event is a city-adjacent home dinner, a suburban yard party, or a multi-night rental stay.",
    serviceAreas: [
      {
        name: "Philadelphia",
        description:
          "Philadelphia events are a great fit for private birthdays, family dinners, and house-based celebrations where the host wants a restaurant-quality experience at home.",
        venues: ["private patios", "rowhome courtyards", "backyard spaces"],
      },
      {
        name: "Main Line",
        description:
          "Main Line bookings usually lean polished and family-oriented, with strong demand for milestone dinners, graduations, and backyard entertaining.",
        venues: ["estate patios", "suburban yards", "covered outdoor spaces"],
      },
      {
        name: "Poconos",
        description:
          "The Poconos are one of the strongest Pennsylvania fits for hibachi at home because travel groups love keeping dinner at the rental and making it the highlight of the trip.",
        venues: ["vacation homes", "weekend rentals", "group getaway properties"],
      },
      {
        name: "Pittsburgh",
        description:
          "Pittsburgh works well for larger private homes and family-centered celebrations where guest counts are solid and the setup can stay simple.",
        venues: ["family backyards", "driveway setups", "residential patios"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "Pennsylvania hosts most often book for birthdays, graduations, family dinners, bachelor or bachelorette trips, and destination-weekend meals at rentals.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Philadelphia and the Main Line are more access-driven, while the Poconos and Pittsburgh require earlier coordination around drive time and property details.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "The most successful Pennsylvania bookings lock in the final address early, confirm the outdoor cooking space, and keep start times realistic for longer-travel markets.",
      },
    ],
    planningChecklist: [
      "Poconos weekends and holiday dates should be booked early because those slots go first.",
      "For Main Line and Philadelphia events, share access and parking notes with the final guest count.",
      "If the party is at a rental, confirm property rules and outdoor setup location before the event week.",
    ],
    localFaqs: [
      {
        question: "Do you serve both Philadelphia homes and Poconos rentals?",
        answer:
          "Yes. We regularly serve Philadelphia, the Main Line, Poconos properties, Pittsburgh, and nearby Pennsylvania markets.",
      },
      {
        question: "What kinds of Pennsylvania events book hibachi most often?",
        answer:
          "The biggest categories are birthdays, graduation dinners, family parties, and destination-weekend meals for Poconos trips.",
      },
      {
        question: "What matters most when planning a Pennsylvania hibachi booking?",
        answer:
          "The final address, drive time, and setup area matter most, especially when the event is outside the Philadelphia area or at a vacation rental.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery11.jpg",
        alt: "Pennsylvania hibachi setup inspiration for suburban backyard events",
        caption: "A comfortable setup style for Philadelphia and Main Line family celebrations.",
        position: "center center",
      },
      {
        src: "/images/gallery8.jpg",
        alt: "Pennsylvania private hibachi inspiration for vacation rental dinners",
        caption: "The kind of at-home dinner format Poconos groups love for a weekend stay.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-1.png",
        alt: "Pennsylvania hibachi grill inspiration for private home parties",
        caption: "A straightforward layout that works well for Pittsburgh-area backyards and patios.",
        position: "center center",
      },
    ],
    legacyPaths: ["/pennsylvania-hibachi-menu", "/menu/pennsylvania-hibachi-menu"],
  },
  {
    slug: "delaware",
    name: "Delaware",
    region: "Mid-Atlantic",
    markets: ["Wilmington", "Newark", "Lewes", "Rehoboth Beach"],
    metaDescription:
      "Browse Delaware hibachi menu packages for Wilmington, Newark, Lewes, Rehoboth Beach, and private chef catering at home or rental properties.",
    overview:
      "Delaware is a strong market for easy at-home parties, beach-house dinners, and family weekends where a live hibachi chef adds a memorable focal point to the event.",
    eventFocus:
      "Wilmington and Newark usually book local birthdays and celebrations, while Lewes and Rehoboth Beach are perfect for summer rental stays, reunion dinners, and coastal weekends.",
    travelNote:
      "Beach-season demand rises quickly in southern Delaware, so earlier booking is especially helpful for prime weekends and holiday dates.",
    serviceAreaIntro:
      "Delaware bookings are usually split between local residential parties in the north and destination-style beach rentals in the south, which means planning is mostly about seasonality and property type.",
    serviceAreas: [
      {
        name: "Wilmington",
        description:
          "Wilmington works well for private birthdays, family dinners, and smaller curated events where the chef performance lifts the whole evening.",
        venues: ["private patios", "backyards", "family homes"],
      },
      {
        name: "Newark",
        description:
          "Newark bookings are often casual celebrations and neighborhood gatherings that want a fun dinner format without a lot of operational complexity.",
        venues: ["suburban yards", "driveways", "residential patios"],
      },
      {
        name: "Lewes",
        description:
          "Lewes is ideal for summer rentals, extended-family dinners, and vacation stays where hosts want to keep the whole group at the property.",
        venues: ["coastal rentals", "beach-house patios", "vacation homes"],
      },
      {
        name: "Rehoboth Beach",
        description:
          "Rehoboth Beach is one of the stronger Delaware fits for celebratory weekends, beach-house dinners, and travel groups booking the chef experience as the night’s highlight.",
        venues: ["shore rentals", "poolside homes", "group getaway properties"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "Delaware hosts usually book for birthdays, summer beach weekends, family reunion dinners, and house-based entertaining where everyone can stay put.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Northern Delaware bookings are usually straightforward, while Lewes and Rehoboth need more advance planning during summer because demand clusters around the same dates.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "For southern Delaware properties, early scheduling, clear property notes, and a confirmed outdoor setup spot do the most to keep service on time.",
      },
    ],
    planningChecklist: [
      "Book Lewes and Rehoboth Beach summer weekends early if the event date is fixed.",
      "If the property is a rental, share check-in timing and parking notes with the address.",
      "For beach markets, keep a little flexibility around dinner time on heavy-travel Fridays.",
    ],
    localFaqs: [
      {
        question: "Do you cover both Wilmington and Delaware beach towns?",
        answer:
          "Yes. We serve Wilmington, Newark, Lewes, Rehoboth Beach, and surrounding Delaware markets, with travel based on the exact address.",
      },
      {
        question: "Are Delaware hibachi bookings popular for beach rentals?",
        answer:
          "Yes. Lewes and Rehoboth Beach are strong markets for hibachi at home during summer trips and long weekends.",
      },
      {
        question: "What should I plan for a Delaware beach booking?",
        answer:
          "The most important details are the exact property, parking, setup surface, and whether beach-season traffic could affect the best dinner window.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery5.jpg",
        alt: "Delaware hibachi setup inspiration for family dinners",
        caption: "A food-first chef setup that works well for Wilmington and Newark celebrations.",
        position: "center 70%",
      },
      {
        src: "/images/gallery9.jpg",
        alt: "Delaware hibachi event inspiration for beach-house weekends",
        caption: "The kind of easy-to-host dinner Rehoboth and Lewes groups love at vacation rentals.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-2.png",
        alt: "Delaware private hibachi chef inspiration for coastal rentals",
        caption: "A clean setup style for shore homes, patios, and poolside properties.",
        position: "center center",
      },
    ],
    legacyPaths: ["/delaware-hibachi-menu", "/menu/delaware-hibachi-menu"],
  },
  {
    slug: "maryland",
    name: "Maryland",
    region: "Mid-Atlantic",
    markets: ["Baltimore", "Bethesda", "Annapolis", "Ocean City"],
    metaDescription:
      "Find Maryland hibachi catering pricing for Baltimore, Bethesda, Annapolis, Ocean City, and private hibachi chef events at home or by the shore.",
    overview:
      "Maryland bookings range from suburban private dinners near Bethesda to waterfront celebrations in Annapolis and beach-week events around Ocean City.",
    eventFocus:
      "Baltimore and Bethesda are common for birthdays, anniversaries, and family dinners, while Annapolis and Ocean City shine for summer groups, rentals, and destination weekends.",
    travelNote:
      "Shore traffic and seasonal demand can affect timing around Annapolis and Ocean City, so we recommend earlier booking for warm-weather dates.",
    serviceAreaIntro:
      "Maryland service covers both local residential markets and shore-adjacent destinations, so we plan around whether the event is a same-day home gathering or a summer-weekend travel property.",
    serviceAreas: [
      {
        name: "Baltimore",
        description:
          "Baltimore bookings are a strong fit for private birthdays, family dinners, and lively backyard celebrations where hosts want the energy of hibachi without a restaurant reservation.",
        venues: ["city patios", "private courtyards", "family homes"],
      },
      {
        name: "Bethesda",
        description:
          "Bethesda events usually lean polished and family-oriented, with strong demand for anniversaries, birthdays, and private chef-style entertaining at home.",
        venues: ["suburban patios", "estate homes", "covered outdoor spaces"],
      },
      {
        name: "Annapolis",
        description:
          "Annapolis works especially well for waterfront homes, summer house dinners, and celebrations where guests want to stay on-site and keep the evening relaxed.",
        venues: ["waterfront patios", "boat-accessible homes", "backyard dining areas"],
      },
      {
        name: "Ocean City",
        description:
          "Ocean City is a destination-style market for beach-week dinners, rentals, and group trips where hibachi becomes a centerpiece event for the stay.",
        venues: ["shore rentals", "vacation homes", "group getaway properties"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "Maryland hosts usually book for birthdays, anniversaries, beach-week dinners, and family gatherings where the chef performance makes the night feel special without adding extra logistics.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Baltimore and Bethesda are usually easier to schedule around home-event timing, while Annapolis and Ocean City need more lead time in warm weather.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "The smoothest Maryland parties have the exact address finalized early, especially if the event is near the water or tied to a vacation rental schedule.",
      },
    ],
    planningChecklist: [
      "For Annapolis and Ocean City, lock in the address and target dinner time as early as possible during spring and summer.",
      "If the event is at a shore rental, share property rules, parking notes, and setup location in advance.",
      "For Bethesda and Baltimore home events, confirm the outdoor cooking surface and any gate or access notes before the event week.",
    ],
    localFaqs: [
      {
        question: "Do you serve both suburban Maryland and beach markets?",
        answer:
          "Yes. We regularly serve Baltimore, Bethesda, Annapolis, Ocean City, and nearby Maryland markets, with travel planned from the exact address.",
      },
      {
        question: "What kinds of Maryland events book hibachi most often?",
        answer:
          "The most common Maryland bookings are birthdays, anniversaries, family dinners, waterfront celebrations, and beach-week meals at rentals.",
      },
      {
        question: "What matters most when planning a Maryland hibachi event?",
        answer:
          "The big details are the final property location, outdoor setup space, and whether shore-season traffic could affect arrival timing.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery7.jpg",
        alt: "Maryland hibachi event inspiration for waterfront and home gatherings",
        caption: "A clean dinner format that works well for Baltimore and Bethesda family celebrations.",
        position: "center center",
      },
      {
        src: "/images/gallery10.jpg",
        alt: "Maryland hibachi chef setup inspiration for coastal rentals",
        caption: "The kind of at-home chef experience Annapolis and Ocean City groups book for warm-weather weekends.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-1.png",
        alt: "Maryland backyard hibachi inspiration for private events",
        caption: "A flexible setup style for waterfront patios, suburban homes, and beach rentals.",
        position: "center center",
      },
    ],
    legacyPaths: ["/maryland-hibachi-menu", "/menu/maryland-hibachi-menu"],
  },
  {
    slug: "washington-dc",
    name: "Washington D.C.",
    region: "Mid-Atlantic",
    markets: ["Georgetown", "Capitol Hill", "Dupont Circle", "Northwest D.C."],
    metaDescription:
      "Explore Washington D.C. hibachi catering options and private hibachi chef pricing for Georgetown, Capitol Hill, Dupont Circle, and Northwest D.C.",
    overview:
      "Washington D.C. is ideal for polished private dinners, rooftop or patio gatherings, and celebrations where guests want a standout chef experience without booking a restaurant.",
    eventFocus:
      "D.C. events are often smaller and more curated, with demand strongest for birthdays, client-style entertaining, apartment amenity spaces, and private home dinners.",
    travelNote:
      "Access, parking, elevators, and building rules can all shape setup in D.C., so detailed venue information is especially important before confirming the event.",
    serviceAreaIntro:
      "Washington D.C. bookings are usually less about distance and more about access. The exact building, courtyard, roof deck, or home setup determines how cleanly the event can run.",
    serviceAreas: [
      {
        name: "Georgetown",
        description:
          "Georgetown is a strong fit for curated private dinners and intimate celebrations where hosts want the food and atmosphere to feel elevated but still easy to manage.",
        venues: ["private patios", "courtyard homes", "garden terraces"],
      },
      {
        name: "Capitol Hill",
        description:
          "Capitol Hill bookings often center on private birthdays and family dinners at homes with smaller but workable outdoor footprints.",
        venues: ["rowhome patios", "courtyards", "shared outdoor spaces"],
      },
      {
        name: "Dupont Circle",
        description:
          "Dupont Circle works especially well for amenity-space dinners, rooftop gatherings, and polished social events that need a strong experience in a compact space.",
        venues: ["roof decks", "amenity terraces", "private courtyards"],
      },
      {
        name: "Northwest D.C.",
        description:
          "Northwest D.C. usually offers the most flexibility for family-centered private dinners, milestone events, and larger home setups.",
        venues: ["residential patios", "larger yards", "private home spaces"],
      },
    ],
    hostingHighlights: [
      {
        title: "Best-fit celebrations",
        description:
          "D.C. hosts usually book for birthdays, polished private dinners, smaller social gatherings, and hosted events where convenience matters as much as the food itself.",
      },
      {
        title: "Local planning rhythm",
        description:
          "Most D.C. planning comes down to access details, building rules, and making sure the chef setup has a clear outdoor footprint before the date is locked.",
      },
      {
        title: "What makes bookings smooth",
        description:
          "The easiest D.C. events have complete venue notes, a host contact ready on arrival, and enough buffer built in for parking and elevator access if needed.",
      },
    ],
    planningChecklist: [
      "Share building access instructions and any concierge or loading notes before final confirmation.",
      "If the event is on a roof deck or shared amenity floor, confirm property rules and reservation windows.",
      "Smaller D.C. spaces work best when guest count and table layout are finalized in advance.",
    ],
    localFaqs: [
      {
        question: "Do you serve rooftops and amenity spaces in Washington D.C.?",
        answer:
          "Yes, when the building allows it and the outdoor footprint is workable. Access details matter more in D.C. than almost anywhere else we serve.",
      },
      {
        question: "What kinds of D.C. events book hibachi most often?",
        answer:
          "The most common D.C. bookings are birthdays, polished private dinners, rooftop gatherings, and hosted social events at homes or amenity spaces.",
      },
      {
        question: "What should I plan for a Washington D.C. hibachi booking?",
        answer:
          "The most important details are building access, elevator or stairs, setup location, and any venue rules that affect arrival or cleanup timing.",
      },
    ],
    photoGallery: [
      {
        src: "/images/gallery4.jpg",
        alt: "Washington D.C. hibachi dinner inspiration for private events",
        caption: "A polished setup style for Georgetown and Dupont Circle private dinners.",
        position: "center center",
      },
      {
        src: "/images/menu-hibachi-table-2.png",
        alt: "Washington D.C. rooftop hibachi inspiration for curated gatherings",
        caption: "The kind of compact, high-impact format that works well for amenity-space bookings.",
        position: "center center",
      },
      {
        src: "/images/gallery1.jpg",
        alt: "Washington D.C. backyard hibachi inspiration for home events",
        caption: "An easy private chef setup for Northwest D.C. homes and outdoor entertaining.",
        position: "center center",
      },
    ],
    legacyPaths: [
      "/washington-dc-hibachi-menu",
      "/menu/washington-dc-hibachi-menu",
      "/dc-hibachi-menu",
    ],
  },
];

export const legacyMenuPathMap = new Map(
  menuStates.flatMap((state) =>
    state.legacyPaths.map((legacyPath) => [legacyPath, `/menu/${state.slug}`] as const)
  )
);

export function getMenuState(slug: string) {
  return menuStates.find((state) => state.slug === slug);
}
