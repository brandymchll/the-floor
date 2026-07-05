const FLOOR_DATA_CONST = [
  {
    person: "Gary",
    category: "Top Toys",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Adi",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "Sandra",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "Carl",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "Kayla",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "Kasey",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "Jacob",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "Ronnie",
    category: "Christmas Movies",
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
    person: "Debbie",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "David",
    category: "Christmas Movies",
    hasPlayed: false,
    isStillInTheGame: true,
  },
    {
    person: "Daniel",
    category: "Christmas Movies",
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
  | "Christmas Decorations";

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

const ChristmasDecorationsCategory: CategoryMetadata = {
  name: "Christmas Decorations",
  folder: "christmas-decorations",
  examples: [
    {
      name: "Christmas Tree",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Wreath",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Tinsel",
      image: "tinsel.png",
      alternatives: [],
    },
    {
      name: "Ornament",
      image: "ornament.png",
      alternatives: [],
    },
    {
      name: "Tree Topper",
      image: "tree-topper.png",
      alternatives: [],
    },
    {
      name: "Nativity Scene",
      image: "nativity-scene.png",
      alternatives: [],
    },
    {
      name: "Nutcracker",
      image: "nutcracker.png",
      alternatives: [],
    },
    {
      name: "Advent Calendar",
      image: "advent-calendar.png",
      alternatives: [],
    },
    {
      name: "Stockings",
      image: "stockings.png",
      alternatives: [],
    },
    {
      name: "Fake Snow",
      image: "fake-snow.png",
      alternatives: [],
    },
    {
      name: "Christmas Cards",
      image: "christmas-cards.png",
      alternatives: [],
    },
    {
      name: "Tree Skirt",
      image: "tree-skirt.png",
      alternatives: [],
    },
    {
      name: "Snow Globe",
      image: "snow-globe.png",
      alternatives: [],
    },
    {
      name: "Mistletoe",
      image: "mistletoe.png",
      alternatives: [],
    },
    {
      name: "Tabble Runner",
      image: "table-runner.png",
      alternatives: [],
    },
    {
      name: "Reindeer",
      image: "reindeer.png",
      alternatives: [],
    },
    {
      name: "Christmas Pillow",
      image: "christmas-pillow.png",
      alternatives: [],
    },
    {
      name: "Garland",
      image: "garland.png",
      alternatives: [],
    },
    {
      name: "Christmas Village",
      image: "christmas-village.png",
      alternatives: [],
    },
    {
      name: "Train",
      image: "train.png",
      alternatives: [],
    },
    {
      name: "Christmas Candle",
      image: "christmas-candle.png",
      alternatives: [],
    },
    {
      name: "Inflatables",
      image: "inflatables.png",
      alternatives: [],
    },
    {
      name: "Christmas Bows",
      image: "christmas-bows.png",
      alternatives: [],
    },
    {
      name: "Christmas Doormat",
      image: "christmas-doormat.png",
      alternatives: [],
    },
    {
      name: "Santas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Christmas Banner",
      image: "christmas-banner.png",
      alternatives: [],
    },
    {
      name: "Christmas Tree",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Poinsetta",
      image: "poinsetta.png",
      alternatives: [],
    },
    {
      name: "Christmas Towel",
      image: "christmas-towel.png",
      alternatives: [],
    },
    {
      name: "DIY Crafts",
      image: "diy-crafts.png",
      alternatives: [],
    },
    {
      name: "Porch Sign",
      image: "porch-sign.png",
      alternatives: [],
    },
    {
      name: "Wall Art",
      image: "wall-art.png",
      alternatives: [],
    },
  ],
}
