const FLOOR_DATA_CONST = [
  {
    person: "Sandra",
    category: "Christmas Box Office",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Rachel",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Gary",
    category: "Christmas Decorations",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Kasey",
    category: "Christmas Songs",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Carl",
    category: "Top Toys",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Zoey",
    category: "Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Andrea",
    category: "Disney characters",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Tanner",
    category: "Superheros",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Emma",
    category: "Taylor Swift Lyrics",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Nolan",
    category: "States",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Nic",
    category: "Kitchen gadgets",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Syd",
    category: "Famous people who died before turning 30",
    hasPlayed: false,
    isStillInTheGame: true,
  },
] as const;

export type GameDetails = {
  data: FloorData[];
};
type UsedCategories = (typeof FLOOR_DATA_CONST)[number]["category"];

type UnusedCategoriesFromConst = Exclude<Category, UsedCategories>;

export type Category =
  | "Christmas Box Office"
  | "Broadway shows"
  | "Disney characters"
  | "Kitchen gadgets"
  | "Junk drawer"
  | "Laundry"
  | "Pop divas"
  | "Chicago tourist stuff"
  | "Board games"
  | "States"
  | "Harry Potter characters"
  | "Spirit Halloween Catalogue";

export interface FloorData {
  person: string;
  category: Category;
  hasPlayed: boolean;
  isStillInTheGame: boolean;
}

export const FLOOR_DATA: FloorData[] =
  FLOOR_DATA_CONST as unknown as FloorData[];

export type FloorPieces = Record<number, FloorData>;

export type ImageExample = {
  name: string;
  image: string;
  alternatives: string[];
};

export type TextExample = {
  name: string;
  text: string;
  alternatives: string[];
};

type CategoryMetadata = {
  name: string;
  folder: string;
  examples: ImageExample[] | TextExample[];
};

const ChristmasBoxOfficeCategory: CategoryMetadata = {
  name: "Christmas Box Office",
  folder: "Christmas Box Office",
  examples: [
    {
      name: "Pikachu",
      image: "pikachu.png",
      alternatives: [],
    },
    {
      name: "Charizard",
      image: "charizard.png",
      alternatives: [],
    },
    {
      name: "Mewtwo",
      image: "mewtwo.png",
      alternatives: [],
    },
    {
      name: "Mew",
      image: "mew.png",
      alternatives: [],
    },
    {
      name: "Blastoise",
      image: "blastoise.png",
      alternatives: [],
    },
    {
      name: "Venusaur",
      image: "venusaur.png",
      alternatives: [],
    },
    {
      name: "Squirtle",
      image: "squirtle.png",
      alternatives: [],
    },
    {
      name: "Bulbasaur",
      image: "bulbasaur.png",
      alternatives: [],
    },
    {
      name: "Charmander",
      image: "charmander.png",
      alternatives: [],
    },
    {
      name: "Eevee",
      image: "eevee.png",
      alternatives: [],
    },
    {
      name: "Jigglypuff",
      image: "jigglypuff.png",
      alternatives: [],
    },
    {
      name: "Raichu",
      image: "raichu.png",
      alternatives: [],
    },
    {
      name: "Pidgey",
      image: "pidgey.png",
      alternatives: [],
    },
    {
      name: "Rattata",
      image: "rattata.png",
      alternatives: [],
    },
    {
      name: "Zubat",
      image: "zubat.png",
      alternatives: [],
    },
    {
      name: "Magikarp",
      image: "magikarp.png",
      alternatives: [],
    },
    {
      name: "Onix",
      image: "onix.png",
      alternatives: [],
    },
    {
      name: "Geodude",
      image: "geodude.png",
      alternatives: [],
    },
    {
      name: "Gastly",
      image: "gastly.png",
      alternatives: [],
    },
    {
      name: "Clefairy",
      image: "clefairy.png",
      alternatives: [],
    },
    {
      name: "Charmeleon",
      image: "charmeleon.png",
      alternatives: [],
    },
    {
      name: "Ivysaur",
      image: "ivysaur.png",
      alternatives: [],
    },
    {
      name: "Wartortle",
      image: "wartortle.png",
      alternatives: [],
    },
    {
      name: "Vaporeon",
      image: "vaporeon.png",
      alternatives: [],
    },
    {
      name: "Jolteon",
      image: "jolteon.png",
      alternatives: [],
    },
    {
      name: "Flareon",
      image: "flareon.png",
      alternatives: [],
    },
    {
      name: "Dragonite",
      image: "dragonite.png",
      alternatives: [],
    },
    {
      name: "Dragonair",
      image: "dragonair.png",
      alternatives: [],
    },
    {
      name: "Dratini",
      image: "dratini.png",
      alternatives: [],
    },
    {
      name: "Vulpix",
      image: "vulpix.png",
      alternatives: [],
    },
  ],
};

// const ChilisCategory: CategoryMetadata = {
//   name: "Chilis",
//   folder: "chilis",
//   examples: [],
// };

export const CATEGORY_METADATA: Record<Category, CategoryMetadata> = {
  "Airport Codes": AirportCodesCategory,
  "Amusement Parks": AmusementParksCategory,
  Apps: AppsCategory,
  "Board games": BoardGamesCategory,
  Books: BooksCategory,
  "Brand slogans": BrandSlogansCategory,
  "Broadway shows": BroadwayShowsCategory,
  "Chicago tourist stuff": ChicagoTouristStuffCategory,
  "City Skylines": CitySkylinesCategory,
  Comedians: ComediansCategory,
  "Disney Channel Original Movies": DisneyChannelOriginalMoviesCategory,
  "Disney characters": DisneyCharactersCategory,
  Dogs: DogsCategory,
  "Fair foods": FairFoodsCategory,
  "Famous people who died before turning 30":
    FamousPeopleWhoDiedBeforeTurning30Category,
  "Fast food chains": FastFoodChainsCategory,
  Fridge: FridgeCategory,
  Garage: GarageCategory,
  "Harry Potter characters": HarryPotterCharactersCategory,
  Holidays: HolidaysCategory,
  Horses: HorsesCategory,
  "Christmas Box Office": ChristmasBoxOfficeCategory,
  "Kitchen gadgets": KitchenGadgetsCategory,
  Laundry: LaundryCategory,
  Math: MathCategory,
  "MLB Teams": MlbTeamsCategory,
  Movies: MoviesCategory,
  "Pop divas": PopDivasCategory,
  Pokemon: PokemonCategory,
  "Reality tv shows": RealityTvShowsCategory,
  "Rom Coms": RomComsCategory,
  "Spirit Halloween Catalogue": SpiritHalloweenCatalogueCategory,
  Sports: SportsCategory,
  States: StatesCategory,
  Superheros: SuperherosCategory,
  "Taylor Swift Lyrics": TaylorSwiftLyricsCategory,
  "The Office": TheOfficeCategory,
  Thanksgiving: ThanksgivingCategory,
  "Video Game Characters": VideoGameCharactersCategory,
};
