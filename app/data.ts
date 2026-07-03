const FLOOR_DATA_CONST = [
  {
    person: "Sandra",
    category: "Top Toys",
    hasPlayed: false,
    isStillInTheGame: true,
  },
  {
    person: "Rachel",
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
  | "Christmas Movies"
  | "Top Toys";

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

const TopToysCategory: CategoryMetadata = {
  name: "Top Toys",
  folder: "top-toys",
  examples: [
    {
      name: "Furby",
      image: "furby.png",
      alternatives: [],
    },
    {
      name: "My Little Pony",
      image: "my-little-pony.jpg",
      alternatives: [],
    },
  ],
};

const ChristmasMoviesCategory: CategoryMetadata = {
  name: "Christmas Movies",
  folder: "christmas-movies",
  examples: [
    {
      name: "Christmas Vacation",
      image: "christmas-vacation.jpg",
      alternatives: [],
    },
    {
      name: "Elf",
      image: "elf.jpg",
      alternatives: [],
    },
  ],
};

export const CATEGORY_METADATA: Record<Category, CategoryMetadata> = {
  "Christmas Movies": ChristmasMoviesCategory,
  "Top Toys": TopToysCategory,
};
