export type MenuState = {
  slug: string;
  name: string;
  region: string;
  markets: string[];
  metaDescription: string;
  overview: string;
  eventFocus: string;
  travelNote: string;
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
      "Connecticut bookings are often centered around backyard birthdays, graduation dinners, and polished at-home celebrations where guests want both dinner and entertainment in one setup.",
    eventFocus:
      "Stamford and Greenwich parties usually lean upscale and private, while New Haven and Hartford events often book for family gatherings, birthdays, and larger weekend celebrations.",
    travelNote:
      "Travel timing can vary between Fairfield County and central Connecticut, so earlier planning helps lock in the best dinner window for your date.",
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
      "We most often see birthday dinners, graduation weekends, rehearsal events, and vacation-house bookings where the hibachi grill becomes the centerpiece of the night.",
    travelNote:
      "Cape traffic, weekend shore travel, and tighter urban setups around Boston can all affect arrival planning, so a little lead time makes scheduling much smoother.",
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
  },
  {
    slug: "new-york",
    name: "New York",
    region: "Mid-Atlantic",
    markets: ["New York City", "Long Island", "Westchester", "Hudson Valley"],
    metaDescription:
      "Explore New York hibachi catering packages and private chef pricing for NYC, Long Island, Westchester, Hudson Valley, and at-home hibachi events.",
    overview:
      "New York bookings span everything from rooftop-style private dinners and suburban backyard parties to full weekend celebrations in Long Island and the Hudson Valley.",
    eventFocus:
      "NYC-area events often prioritize convenience and a premium experience at home, while Long Island, Westchester, and Hudson Valley groups tend to book for birthdays, milestone dinners, and larger family gatherings.",
    travelNote:
      "Traffic, parking, and setup access matter more in New York than most states, so detailed address planning helps us confirm the right arrival and service window.",
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
      "Distance between markets in Pennsylvania can be substantial, so exact location matters when we quote travel and recommend the best service window.",
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
  },
  {
    slug: "florida-miami",
    name: "Florida - Miami",
    region: "Southeast",
    markets: ["Miami", "Miami Beach", "Fort Lauderdale", "Aventura"],
    metaDescription:
      "See Miami hibachi catering pricing and private chef packages for Miami Beach, Fort Lauderdale, Aventura, and luxury backyard or vacation-rental events.",
    overview:
      "Miami-area bookings are built around high-energy birthdays, vacation-house dinners, waterfront homes, and stylish private parties where the grill show matches the atmosphere.",
    eventFocus:
      "Miami Beach and Aventura lean more premium and design-forward, while Fort Lauderdale works especially well for larger home events, poolside dinners, and weekend group trips.",
    travelNote:
      "South Florida traffic and condo or rental access can affect timing, so full address details help us plan arrival, setup, and any travel-based pricing clearly.",
  },
  {
    slug: "florida-orlando",
    name: "Florida - Orlando",
    region: "Southeast",
    markets: ["Orlando", "Winter Park", "Kissimmee", "Lake Nona"],
    metaDescription:
      "Browse Orlando hibachi catering prices and private chef service for Winter Park, Kissimmee, Lake Nona, and vacation-home hibachi dinners.",
    overview:
      "Orlando is one of the best markets for vacation-home hibachi, family trip dinners, and birthday celebrations where guests want a fun night in after a busy day out.",
    eventFocus:
      "Kissimmee and resort areas are especially popular for large travel groups, while Winter Park and Lake Nona often book local birthdays, graduations, and polished backyard dinners.",
    travelNote:
      "Vacation-home communities often have timing or access rules, so sharing the exact property details early helps avoid day-of delays.",
  },
  {
    slug: "florida-tampa",
    name: "Florida - Tampa",
    region: "Southeast",
    markets: ["Tampa", "St. Petersburg", "Clearwater", "Sarasota"],
    metaDescription:
      "Check Tampa hibachi catering and private chef pricing for St. Petersburg, Clearwater, Sarasota, and at-home hibachi events on Florida's Gulf Coast.",
    overview:
      "Tampa-area hibachi is a great fit for backyard birthdays, waterfront homes, family dinners, and Gulf Coast weekend gatherings that need both food and entertainment.",
    eventFocus:
      "Tampa and St. Petersburg often book local celebrations, while Clearwater and Sarasota are especially strong for beach stays, seasonal visitors, and larger private rentals.",
    travelNote:
      "Drive times around the Gulf Coast can stretch on busy weekends, so location and event start time both play a role in accurate scheduling and travel quotes.",
  },
];

export function getMenuState(slug: string) {
  return menuStates.find((state) => state.slug === slug);
}
