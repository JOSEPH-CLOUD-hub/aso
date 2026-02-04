const outfits = [
  {
    id: 1,
    title: "Casual Summer Breeze",
    category: "Casual",
    season: "Dry",
    description: "Light checkered shirt with olive shorts – perfect for warm, sunny days.",
    image: "http://www.gazman.com.au/cdn/shop/articles/G24_Summer_Blog_5WaystoStyleShortsinSummer_FeatureTile.jpg?v=1736919931",
    price: 9500,
    keywords: ["summer", "casual", "shorts", "light", "breathable"]
  },
  {
    id: 2,
    title: "Effortless Summer Dress",
    category: "Casual",
    season: "Dry",
    description: "Flowy colorful sundress ideal for beach walks or city strolls in dry heat.",
    image: "https://media.glamour.com/photos/68792145d09516ae9145400e/16:9/w_2560%2Cc_limit/best-summer-dresses-july-2025.jpg",
    price: 14500,
    keywords: ["dress", "summer", "flowy", "colorful", "vacation"]
  },
  {
    id: 3,
    title: "Rainy Day Urban Look",
    category: "Casual",
    season: "Rainy",
    description: "Cozy sweater, jeans and umbrella-ready style for wet weather comfort.",
    image: "https://www.collegefashionista.com/wp-content/uploads/2018/01/21147348_167729073802940_3625994352595042304_n.jpg?resize=1064%2C600",
    price: 11000,
    keywords: ["rainy", "sweater", "jeans", "umbrella", "cozy"]
  },
  {
    id: 4,
    title: "Bold Streetwear Mix",
    category: "Streetwear",
    season: "Dry",
    description: "Color-block hoodie, joggers and statement sneakers for urban dry-season energy.",
    image: "https://www.yellowbrick.co/wp-content/uploads/2023/02/Streetwear-style.jpg",
    price: 18000,
    keywords: ["streetwear", "hoodie", "colorful", "urban", "sneakers"]
  },
  {
    id: 5,
    title: "Clean Minimalist Fit",
    category: "Smart Casual",
    season: "Dry",
    description: "Crisp white shirt paired with pleated chinos – timeless and airy.",
    image: "https://cdn.shopify.com/s/files/1/0601/6024/5917/files/Pleated_Chinos_for_Men_SANVT_dapper.png?v=1700471219",
    price: 13500,
    keywords: ["minimalist", "white shirt", "chinos", "clean", "versatile"]
  },
  {
    id: 6,
    title: "Elevated Athleisure",
    category: "Athleisure",
    season: "Dry",
    description: "Stylish leggings and cropped top combo for active dry days.",
    image: "https://cache.net-a-porter.com/content/images/story-head-content-28thOctober2025-1761565622605.jpeg/w1900_q65.jpeg",
    price: 12000,
    keywords: ["athleisure", "leggings", "active", "modern", "comfort"]
  },
  {
    id: 7,
    title: "Boho Summer Vibes",
    category: "Boho",
    season: "Dry",
    description: "Fringed kimono over tank and denim shorts – free-spirited dry weather look.",
    image: "https://cdn.shopify.com/s/files/1/0085/1214/3457/files/SHORTS_AND_COWBOY_BOOTS_KRUSH_KANDY_BOUTIQUE_BOHO_CHIC_KIMONOS_BLOG_POST_1.png?v=1718128090",
    price: 12800,
    keywords: ["boho", "kimono", "fringe", "summer", "free-spirited"]
  },
  {
    id: 8,
    title: "Bright Rainy Statement",
    category: "Casual",
    season: "Rainy",
    description: "Waterproof jacket and bold outfit perfect for rainy city adventures.",
    image: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/10/rainy-day-fashion-rules-UNI.jpg?fit=1174%2C630",
    price: 16500,
    keywords: ["rainy", "bright", "jacket", "umbrella", "statement"]
  },
  {
    id: 9,
    title: "Smart Casual Blazer",
    category: "Smart Casual",
    season: "Dry",
    description: "Tailored blazer over white tee and jeans – polished yet relaxed.",
    image: "https://westwoodhart.com/cdn/shop/articles/suit-jacket-jeans-introduction-style-guide.webp?v=1729724764&width=1007",
    price: 22000,
    keywords: ["blazer", "jeans", "smart casual", "polished", "versatile"]
  },
  {
    id: 10,
    title: "Linen Vacation Set",
    category: "Casual",
    season: "Dry",
    description: "Breathable linen shirt and shorts set – ultimate dry-season comfort.",
    image: "https://m.media-amazon.com/images/I/61cKOoQk5SS._AC_UY1000_.jpg",
    price: 9800,
    keywords: ["linen", "vacation", "set", "breathable", "relaxed"]
  },
  {
    id: 11,
    title: "Rainproof Layered Look",
    category: "Casual",
    season: "Rainy",
    description: "Trench-inspired coat, boots and scarf for wet, windy days.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 19500,
    keywords: ["rainy", "trench", "boots", "layered", "waterproof"]
  },
  {
    id: 12,
    title: "Tropical Dry Casual",
    category: "Casual",
    season: "Dry",
    description: "Floral print shirt with lightweight shorts for hot, dry weather.",
    image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 10200,
    keywords: ["tropical", "floral", "shorts", "summer", "vibrant"]
  },
  {
    id: 13,
    title: "Cozy Rain Hoodie Fit",
    category: "Casual",
    season: "Rainy",
    description: "Oversized hoodie, waterproof pants and sneakers for rainy errands.",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 14000,
    keywords: ["hoodie", "rainy", "cozy", "waterproof", "casual"]
  },
  {
    id: 14,
    title: "Chic Dry Monochrome",
    category: "Minimalist",
    season: "Dry",
    description: "All-white ensemble – clean, cool and perfect for dry heat.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ba0f01a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 15800,
    keywords: ["monochrome", "white", "minimalist", "clean", "dry"]
  },
  {
    id: 15,
    title: "Rainy Day Boots & Denim",
    category: "Casual",
    season: "Rainy",
    description: "Denim jacket, boots and umbrella – classic wet-weather style.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 13200,
    keywords: ["boots", "denim", "rainy", "classic", "umbrella"]
  },
  {
    id: 16,
    title: "Relaxed Linen Summer",
    category: "Casual",
    season: "Dry",
    description: "Linen pants and loose button-up for effortless dry-season days.",
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 11500,
    keywords: ["linen", "relaxed", "summer", "button-up", "breathable"]
  },
  {
    id: 17,
    title: "Water-Resistant Parka",
    category: "Outdoor",
    season: "Rainy",
    description: "Parka jacket, cargo pants and sturdy shoes for heavy rain.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 20500,
    keywords: ["parka", "rainy", "outdoor", "water-resistant", "functional"]
  },
  {
    id: 18,
    title: "Pastel Dry Outfit",
    category: "Casual",
    season: "Dry",
    description: "Pastel polo and tailored shorts – fresh look for sunny days.",
    image: "https://images.unsplash.com/photo-1598550874175-2aae763a16b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 10800,
    keywords: ["pastel", "polo", "shorts", "fresh", "dry"]
  },
  {
    id: 19,
    title: "Rainy Layered Neutrals",
    category: "Casual",
    season: "Rainy",
    description: "Neutral tones with raincoat and scarf – sophisticated wet-day style.",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 17200,
    keywords: ["neutrals", "raincoat", "layered", "sophisticated", "rainy"]
  },
  {
    id: 20,
    title: "Lightweight Dry Ensemble",
    category: "Casual",
    season: "Dry",
    description: "Breathable tee, cargo shorts and sandals for ultimate dry comfort.",
    image: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 9200,
    keywords: ["lightweight", "tee", "cargo", "sandals", "summer"]
  }
];