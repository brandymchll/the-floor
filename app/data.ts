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
  | "Christmas Decorations"
  | "Christmas Characters"
  | "Christmas Day Movie Releases"
  | "Top Toys"
  | "Holiday Word Scramble"
  | "Christmas Songs"
  | "Snow Day"
  | "Christmas Food"
  | "Christmas Movies"
  | "Red and Green Things"
  | "Christmas Desserts"
  | "Christmas Crafts";

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
};

const ChristmasCharactersCategory: CategoryMetadata = {
  name: "Christmas Characters",
  folder: "christmas-characters",
  examples: [
    {
      name: "Buddy",
      image: "buddy.png",
      alternatives: [],
    },
    {
      name: "Rudolf",
      image: "rudolf.png",
      alternatives: [],
    },
    {
      name: "Clark",
      image: "clark.png",
      alternatives: [],
    },
    {
      name: "Frosty",
      image: "frosty.png",
      alternatives: [],
    },
    {
      name: "The Grinch",
      image: "the-grinch.png",
      alternatives: [],
    },
    {
      name: "Scott Calvin",
      image: "scott-calvin.png",
      alternatives: [],
    },
    {
      name: "Kevin",
      image: "kevin.png",
      alternatives: [],
    },
    {
      name: "Harry Potter",
      image: "harry-potter.png",
      alternatives: [],
    },
    {
      name: "Santa",
      image: "santa.png",
      alternatives: [],
    },
    {
      name: "Cindy Lou Who",
      image: "cindy-lou-who.png",
      alternatives: [],
    },
    {
      name: "The Kranks",
      image: "the-kranks.png",
      alternatives: [],
    },
    {
      name: "Ralphie",
      image: "ralphie.png",
      alternatives: [],
    },
    {
      name: "Bernard",
      image: "bernard.png",
      alternatives: [],
    },
    {
      name: "Jesus",
      image: "jesus.png",
      alternatives: [],
    },
    {
      name: "Mrs Claus",
      image: "mrs-claus.png",
      alternatives: [],
    },
    {
      name: "Jack Skellington",
      image: "jack-skellington.png",
      alternatives: [],
    },
    {
      name: "Ebenezer Scrooge",
      image: "ebenezer-scrooge.png",
      alternatives: [],
    },
    {
      name: "George Bailey",
      image: "george-bailey.png",
      alternatives: [],
    },
    {
      name: "Max",
      image: "max.png",
      alternatives: [],
    },
    {
      name: "John McClane",
      image: "john-mcclane.png",
      alternatives: [],
    },
    {
      name: "Gizmo",
      image: "gizmo.png",
      alternatives: [],
    },
    {
      name: "Mouse King",
      image: "mouse-king.png",
      alternatives: [],
    },
    {
      name: "Scrooge McDuck",
      image: "scrooge-mcduck.png",
      alternatives: [],
    },
    {
      name: "Susan",
      image: "susan.png",
      alternatives: [],
    },
    {
      name: "Kris Kringle",
      image: "kris-kringle.png",
      alternatives: [],
    },
    {
      name: "Howard",
      image: "howard.png",
      alternatives: [],
    },
    {
      name: "Jack Frost",
      image: "jack-frost.png",
      alternatives: [],
    },
    {
      name: "Comet",
      image: "comet.png",
      alternatives: [],
    },
    {
      name: "Kermit",
      image: "kermit.png",
      alternatives: [],
    },
    {
      name: "Eddie",
      image: "eddie.png",
      alternatives: [],
    },
    {
      name: "Papa Elf",
      image: "papa-elf.png",
      alternatives: [],
    },
    {
      name: "Tiny Tim",
      image: "tiny-tim.png",
      alternatives: [],
    },
  ],
};

const ChristmasDayMovieReleasesCategory: CategoryMetadata = {
  name: "Christmas Day Movie Releases",
  folder: "christmas-day-movie-releases",
  examples: [
    {
      name: "Star Wars",
      image: "star-wars.png",
      alternatives: [],
    },
    {
      name: "Lord of the Rings",
      image: "lord-of-the-rings.png",
      alternatives: [],
    },
    {
      name: "Catch Me If You Can",
      image: "catch-me-if-you-can.png",
      alternatives: [],
    },
    {
      name: "Marley and Me",
      image: "marley-and-me.png",
      alternatives: [],
    },
    {
      name: "Sherlock Holmes",
      image: "sherlock-holmes.png",
      alternatives: [],
    },
    {
      name: "Les Miserables",
      image: "les-amiserables.png",
      alternatives: [],
    },
    {
      name: "Wolf of Wall Street",
      image: "wolf-of-wall-street.png",
      alternatives: [],
    },
    {
      name: "Avatar",
      image: "avatar.png",
      alternatives: [],
    },
    {
      name: "Castaway",
      image: "castaway.png",
      alternatives: [],
    },
    {
      name: "Spiderman",
      image: "spiderman.png",
      alternatives: [],
    },
    {
      name: "Meet the Fockers",
      image: "meet-the-fockers.png",
      alternatives: [],
    },
    {
      name: "Titanic",
      image: "titanic.png",
      alternatives: [],
    },
    {
      name: "Back to the Future",
      image: "back-to-the-future.png",
      alternatives: [],
    },
    {
      name: "Ghostbusters",
      image: "ghostbusters.png",
      alternatives: [],
    },
    {
      name: "E.T.",
      image: "et.png",
      alternatives: [],
    },
    {
      name: "Hook",
      image: "hook.png",
      alternatives: [],
    },
    {
      name: "Batman",
      image: "batman.png",
      alternatives: [],
    },
    {
      name: "Night at the Museum",
      image: "night-at-the-museum.png",
      alternatives: [],
    },
    {
      name: "King Kong",
      image: "king-kong.png",
      alternatives: [],
    },
    {
      name: "National Treasure",
      image: "national-treasure.png",
      alternatives: [],
    },
    {
      name: "Toy Story",
      image: "toy-story.png",
      alternatives: [],
    },
    {
      name: "Aquaman",
      image: "aquaman.png",
      alternatives: [],
    },
    {
      name: "Wonder Woman",
      image: "wonder-woman.png",
      alternatives: [],
    },
    {
      name: "The Color Purple",
      image: "the-color-purple.png",
      alternatives: [],
    },
    {
      name: "Mufasa",
      image: "mufasa.png",
      alternatives: [],
    },
    {
      name: "Street Fighter",
      image: "street-fighter.png",
      alternatives: [],
    },
    {
      name: "Mission Impossible",
      image: "mission-impossible.png",
      alternatives: [],
    },
    {
      name: "Curious Case of Benjamin Button",
      image: "cruious-case-of-benjamin-button.png",
      alternatives: [],
    },
    {
      name: "Django Unchained",
      image: "django-unchained.png",
      alternatives: [],
    },
    {
      name: "Alvin and the Chipmunks",
      image: "alvin-and-the-chipmunks.png",
      alternatives: [],
    },
    {
      name: "Sing",
      image: "sing.png",
      alternatives: [],
    },
    {
      name: "Jumunji",
      image: "jumunji.png",
      alternatives: [],
    },
  ],
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
      name: "Hot Wheels",
      image: "hot-wheels.png",
      alternatives: [],
    },
    {
      name: "Rubix Cube",
      image: "rubix-cube.png",
      alternatives: [],
    },
    {
      name: "Carebear",
      image: "carebear.png",
      alternatives: [],
    },
    {
      name: "Tranformers",
      image: "transformers.png",
      alternatives: [],
    },
    {
      name: "Atari",
      image: "atari.png",
      alternatives: [],
    },
    {
      name: "Legos",
      image: "legos.png",
      alternatives: [],
    },
    {
      name: "Beanie Babies",
      image: "beanie-babies.png",
      alternatives: [],
    },
    {
      name: "Playstation",
      image: "playstation.png",
      alternatives: [],
    },
    {
      name: "Cabbage Patch Kids",
      image: "cabbage-patch-kids.png",
      alternatives: [],
    },
    {
      name: "My Little Pony",
      image: "my-little-pony.png",
      alternatives: [],
    },
    {
      name: "Nintendo Switch",
      image: "nintendo-switch.png",
      alternatives: [],
    },
    {
      name: "Teenage Mutant Ninja Turtles",
      image: "teenage-mutant-ninja-turtles.png",
      alternatives: [],
    },
    {
      name: "Mr Potato Head",
      image: "mr-potato-head.png",
      alternatives: [],
    },
    {
      name: "My Pet Rock",
      image: "my-pet-rock.png",
      alternatives: [],
    },
    {
      name: "Tamagotchi",
      image: "tamagotchi.png",
      alternatives: [],
    },
    {
      name: "Barbie",
      image: "barbie.png",
      alternatives: [],
    },
    {
      name: "Magna Tiles",
      image: "magna-tiles.png",
      alternatives: [],
    },
    {
      name: "Gameboy",
      image: "gameboy.png",
      alternatives: [],
    },
    {
      name: "Teddy Ruxpid",
      image: "teddy-ruxpid.png",
      alternatives: [],
    },
    {
      name: "Elmo",
      image: "elmo.png",
      alternatives: [],
    },
    {
      name: "Squishmallow",
      image: "squishmallow.png",
      alternatives: [],
    },
    {
      name: "Bratz",
      image: "bratz.png",
      alternatives: [],
    },
    {
      name: "Scooter",
      image: "scotter.png",
      alternatives: [],
    },
    {
      name: "Slinky",
      image: "slinky.png",
      alternatives: [],
    },
    {
      name: "Nerf Gun",
      image: "nerf-gun.png",
      alternatives: [],
    },
    {
      name: "Nintendo Wii",
      image: "nintendo-wii.png",
      alternatives: [],
    },
    {
      name: "Buzz Lightyear",
      image: "buzz-lightyear.png",
      alternatives: [],
    },
    {
      name: "Hungry Hungry Hippos",
      image: "hungry-hungry-hippos.png",
      alternatives: [],
    },
    {
      name: "Star Wars",
      image: "star-wars.png",
      alternatives: [],
    },
    {
      name: "Lite Brite",
      image: "lite-brite.png",
      alternatives: [],
    },
    {
      name: "Life",
      image: "life.png",
      alternatives: [],
    },
  ],
};

const HolidayWordScrambleCategory: CategoryMetadata = {
  name: "Holiday Word Scramble",
  folder: "holiday-word-scramble",
  examples: [
    {
      name: "Christmas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Wreath",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Holly",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Ornament",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Nutmeg",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Snow",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Santa",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Reindeer",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Present",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Garland",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Eggnog",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Nutcracker",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Merry",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Elf",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Stocking",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Jolly",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Gingerbread",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Peppermint",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Cheer",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Fruitcake",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Carol",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Tinsel",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Decorations",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Jingle",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Yule",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Snowflake",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Manger",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Sleigh",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Bells",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "North Pole",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Chimney",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Angel",
      image: "wreath.png",
      alternatives: [],
    },
  ],
};

const ChristmasSongsCategory: CategoryMetadata = {
  name: "Christmas Songs",
  folder: "christmas-crafts",
  examples: [
    {
      name: "All I Want For Christmas is You",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Rockin' Around The Christmas Tree",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Jingle Bell Rock",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "A Holly Jolly Christmas",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Feliz Navidad",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "It's The Most Wonderful Time Of The Year",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Last Christmas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Let It Snow! Let It Snow! Let It Snow!",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "White Christmas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Rudolph The Red-Nosed Reindeer",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Christmas Tree",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Sleigh Ride",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "It's Beginning To Look A Lot Like Christmas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Mary, Did You Know?",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Santa Tell Me",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "You're A Mean One, Mr. Grinch",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Please Come Home For Christmas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Here Comes Santa Claus",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Christmas Tree",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Santa Baby",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Do They Know It's Christmas?",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Where Are You Christmas?",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Run Rudolph Run",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Santa Claus Is Comin' To Town",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Little Drummer Boy",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Christmas in Hollis",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Frosty The Snowman",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Have Yourself A Merry Little Christmas",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Do You Want To Build A Snowman?",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Baby It's Cold Outside",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "I Want A Hippopotamus For Christmas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Mele Kalikimaka",
      image: "wreath.png",
      alternatives: [],
    },
  ],
};

const SnowDayCategory: CategoryMetadata = {
  name: "Snow Day",
  folder: "christmas-songs",
  examples: [
    {
      name: "Snow",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Scarf",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Sled",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Hill",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Hot Chocolate",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Snow Cream",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Tobagan",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "No School",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Gloves",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Snow Angel",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Power Outage",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Earmuffs",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Fireplace",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Icecicle",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Pajamas",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Movies",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Snowball",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Weatherman",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Coat",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Boots",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Shovel",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Snowman",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Heater",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Black Ice",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Snowsuit",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Freezing",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Blanket",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Candle",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Fuzzy Socks",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Reading",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Salt",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Soup",
      image: "wreath.png",
      alternatives: [],
    },
  ],
};

const ChristmasFoodandDrinkCategory: CategoryMetadata = {
  name: "Christams Food & Drink",
  folder: "christmas-food-and-drink",
  examples: [
    {
      name: "Eggnog",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Turkey",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Ham",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Mashed Potatoes",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Dressing",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Cookies",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Mac & Cheese",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Green Beans",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Deviled Eggs",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Apple Cider",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Rolls",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Cranberry Sauce",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Pumpkin Pie",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Candy Cane",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Gravy",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Hot Chocolate",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Fruitcake",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Peppermint Bark",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Sweet Potato Casserole",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Snickerdoodle",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Carrots",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Gingerbread Cookies",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Fudge",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Pavlova",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Pizzelles",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Yorkshire Pudding",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Yule Log",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Roast Beef",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Prime Rib",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Brussels Sprouts",
      image: "wreath.png",
      alternatives: [],
    },
    {
      name: "Cheese Board",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Chocolate Covered Pretzels",
      image: "wreath.png",
      alternatives: [],
    },
  ],
};

const ChristmasMoviesCategory: CategoryMetadata = {
  name: "Christmas Food",
  folder: "christmas-food",
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
      name: "Christmas Tree",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Wreath",
      image: "wreath.png",
      alternatives: [],
    },
  ],
};

const ChristmasMoviesCategory: CategoryMetadata = {
  name: "Christmas Movies",
  folder: "christmas-movies",
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
      name: "Christmas Tree",
      image: "christmas-tree.png",
      alternatives: [],
    },
    {
      name: "Wreath",
      image: "wreath.png",
      alternatives: [],
    },
  ],
};

const ChristmasMoviesCategory: CategoryMetadata = {
  name: "Red and Green Things",
  folder: "red-and-green-things",
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

const ChristmasMoviesCategory: CategoryMetadata = {
  name: "Christmas Desserts",
  folder: "christmas-desserts",
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
