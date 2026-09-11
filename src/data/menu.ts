// Auto-generated from the original Haveli menu page
export type MenuDish = { name: string; desc: string; price: string; badges: string[] };
export type MenuSection = { id: string; name: string; note: string; bogo: boolean; dishes: MenuDish[] };

export const MENU: MenuSection[] = [
  {
    "id": "lunch",
    "name": "Lunch Special",
    "note": "11:00 AM – 4:00 PM daily · 7 days a week",
    "bogo": false,
    "dishes": [
      {
        "name": "7 Days a Week Lunch Buffet",
        "desc": "Rotating selection of curries, tandoori items, rice, dal, salad, raita, naan & dessert. Chef's selection changes daily featuring the freshest seasonal ingredients.",
        "price": "CA$17",
        "badges": [
          "Per person"
        ]
      },
      {
        "name": "Butter Chicken + Naan",
        "desc": "Lunch portion — tender chicken in creamy tomato sauce with 1 butter naan",
        "price": "CA$17",
        "badges": [
          "Popular"
        ]
      },
      {
        "name": "Shahi Paneer Thali",
        "desc": "Shahi paneer, dal makhni, rice, salad, raita & naan",
        "price": "CA$17",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Chicken Tikka Masala Lunch",
        "desc": "Rich tikka masala gravy, basmati rice, salad, naan",
        "price": "CA$17",
        "badges": [
          "Popular"
        ]
      },
      {
        "name": "Dal Makhni + Tawa Paratha",
        "desc": "Slow-cooked black lentil dal with 2 pieces tawa paratha, salad & pickle",
        "price": "CA$17",
        "badges": [
          "Veg"
        ]
      }
    ]
  },
  {
    "id": "appetizers-veg",
    "name": "Appetizers — Veg",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Veg Samosa (2 pcs)",
        "desc": "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney",
        "price": "CA$8",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Veg Pakora",
        "desc": "Delicately spiced vegetables marinated in tangy chickpea batter and deep fried",
        "price": "CA$13",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Paneer Pakora",
        "desc": "Homemade cheese marinated in chickpea flour batter and fried to golden perfection",
        "price": "CA$15",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Aloo Tikki (2 pcs)",
        "desc": "Spiced potato patties pan-fried and served with green chutney and tamarind",
        "price": "CA$10",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Hara Bhara Kabab",
        "desc": "Spinach, green pea and potato patties infused with aromatic spices",
        "price": "CA$14",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Haveli Veg Combo Platter",
        "desc": "Veg samosa, veg pakora, paneer pakora & aloo tikki — perfect for sharing",
        "price": "CA$22",
        "badges": [
          "Best value"
        ]
      },
      {
        "name": "Soya Chaap Malai / Tandoori",
        "desc": "Soya chaap marinated in malai or tandoori spices — rich, smoky, and satisfying",
        "price": "CA$16",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Masala Fries",
        "desc": "Golden fries tossed in our signature spice blend",
        "price": "CA$9",
        "badges": [
          "Veg"
        ]
      }
    ]
  },
  {
    "id": "appetizers-non-veg",
    "name": "Appetizers — Non-Veg",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Fish Pakora",
        "desc": "Tender fish pieces battered in seasoned chickpea flour and fried — a crowd favourite",
        "price": "CA$16",
        "badges": [
          "Popular"
        ]
      },
      {
        "name": "Chicken Tikka (6 pcs)",
        "desc": "Boneless chicken breast marinated in yogurt and spices, charred in clay oven",
        "price": "CA$18",
        "badges": [
          "Popular"
        ]
      },
      {
        "name": "Seekh Kebab (4 pcs)",
        "desc": "Minced lamb mixed with onions, green peppers and herbs, skewered and grilled",
        "price": "CA$17",
        "badges": []
      },
      {
        "name": "Tandoori Prawns",
        "desc": "Jumbo prawns marinated in tandoori spices and grilled in clay oven",
        "price": "CA$22",
        "badges": []
      },
      {
        "name": "Boti Kebab",
        "desc": "Cubed lamb marinated overnight in yogurt and spices, grilled to perfection",
        "price": "CA$19",
        "badges": []
      },
      {
        "name": "Haveli Non-Veg Combo Platter",
        "desc": "Tandoori chicken, chicken tikka, fish pakora & seekh kebab with mint chutney",
        "price": "CA$34",
        "badges": [
          "Best value"
        ]
      }
    ]
  },
  {
    "id": "tandoori",
    "name": "Tandoori",
    "note": "From the clay oven",
    "bogo": false,
    "dishes": [
      {
        "name": "Tandoori Chicken (Half)",
        "desc": "Classic chicken marinated in yogurt and spices, roasted in clay oven",
        "price": "CA$19",
        "badges": [
          "Spicy"
        ]
      },
      {
        "name": "Tandoori Chicken (Full)",
        "desc": "Full portion — classic tandoor marinade, smoky char, served with mint raita",
        "price": "CA$34",
        "badges": []
      },
      {
        "name": "Paneer Tikka Sizzler",
        "desc": "Homemade cheese marinated in yogurt and cashew paste, grilled on sizzler",
        "price": "CA$19",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Tandoori Veg Sizzler",
        "desc": "Paneer and mixed vegetables marinated in yogurt, onions, peppers and tomatoes on sizzler",
        "price": "CA$18",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Tandoori Mixed Grill Platter",
        "desc": "Tandoori chicken, chicken tikka, fish pakora, boti kebab, chicken malai kebab & naan",
        "price": "CA$38",
        "badges": [
          "Best seller"
        ]
      },
      {
        "name": "Chicken Malai Kebab",
        "desc": "Boneless chicken marinated in cream cheese and delicate spices, clay oven roasted",
        "price": "CA$18",
        "badges": []
      }
    ]
  },
  {
    "id": "chaat",
    "name": "Chaat Corner",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Samosa ChaatFan fav",
        "desc": "Samosas topped with colorful chutneys, fresh cilantro, and crunchy thin sev",
        "price": "CA$12",
        "badges": [
          "Fan fav",
          "Veg"
        ]
      },
      {
        "name": "Papdi Chaat",
        "desc": "Special chips with chickpeas, potatoes topped with yogurt and tamarind sauce",
        "price": "CA$11",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Pani Puri (6 pcs)",
        "desc": "Thin fried semolina balls filled with spiced vegetables and flavorful chutneys",
        "price": "CA$10",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Chana Chaat",
        "desc": "Chopped red onions, tomatoes, cucumber and chickpeas tossed in lemon",
        "price": "CA$10",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Chaat Papri (BOGO)",
        "desc": "Buy one get one — crispy papdi topped with yogurt, chutneys and sev",
        "price": "CA$9",
        "badges": [
          "BOGO"
        ]
      }
    ]
  },
  {
    "id": "indo-chinese",
    "name": "Indo-Chinese",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Manchurian (Veg)BOGO",
        "desc": "Fried vegetable balls cooked with chilies and aromatic spices — a BOGO item",
        "price": "CA$16",
        "badges": [
          "BOGO",
          "Veg"
        ]
      },
      {
        "name": "Chicken Noodles",
        "desc": "Wok-tossed noodles with chicken and fresh vegetables in Indo-Chinese sauce",
        "price": "CA$17",
        "badges": [
          "Popular"
        ]
      },
      {
        "name": "Red Sauce PastaBOGO",
        "desc": "Classic pasta in our house tomato and herb red sauce",
        "price": "CA$17",
        "badges": [
          "BOGO",
          "Veg"
        ]
      },
      {
        "name": "White Sauce PastaBOGO",
        "desc": "Creamy béchamel sauce pasta with herbs and seasoning",
        "price": "CA$17",
        "badges": [
          "BOGO",
          "Veg"
        ]
      },
      {
        "name": "Rose PastaBOGO",
        "desc": "House pink sauce pasta — a blend of red and white, rich and luxurious",
        "price": "CA$17",
        "badges": [
          "BOGO",
          "Veg"
        ]
      },
      {
        "name": "Chilli Chicken (Dry)",
        "desc": "Crispy chicken tossed in our Indo-Chinese chilli sauce with peppers and onions",
        "price": "CA$18",
        "badges": [
          "Spicy"
        ]
      }
    ]
  },
  {
    "id": "mains-veg",
    "name": "Mains — Veg",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Haveli Da Shahi PaneerBOGO",
        "desc": "Homemade cheese cooked in onion cream and tomato sauce — a signature dish",
        "price": "CA$20",
        "badges": [
          "BOGO",
          "Veg"
        ]
      },
      {
        "name": "Dal MakhniPopular",
        "desc": "Slow-cooked black lentils and kidney beans in a rich, buttery tomato sauce",
        "price": "CA$18",
        "badges": [
          "Popular",
          "Veg"
        ]
      },
      {
        "name": "Achari Paneer",
        "desc": "Cottage cheese in tangy pickled spice gravy — full of bold, complex flavours",
        "price": "CA$19",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Chana Masala",
        "desc": "Hearty chickpeas simmered in a robust blend of tomatoes and warming spices",
        "price": "CA$17",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Baingan Bharta",
        "desc": "Flame-roasted eggplant mashed and cooked with tomatoes, onions and spices",
        "price": "CA$17",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Palak Paneer",
        "desc": "Fresh spinach purée with homemade cheese cubes in a mildly spiced sauce",
        "price": "CA$18",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Mix Veg Kadhai",
        "desc": "Seasonal vegetables cooked in a kadhai with tomatoes, peppers and aromatic spices",
        "price": "CA$17",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Malai Kofta",
        "desc": "Paneer and vegetable dumplings in a rich, cashew-cream sauce",
        "price": "CA$19",
        "badges": [
          "Veg"
        ]
      }
    ]
  },
  {
    "id": "mains-non-veg",
    "name": "Mains — Non-Veg",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Haveli Da Butter Chicken",
        "desc": "Tandoor-charred chicken in a velvety tomato-butter-cream sauce — our #1 dish",
        "price": "CA$21",
        "badges": [
          "Best seller"
        ]
      },
      {
        "name": "Chicken Tikka Masala",
        "desc": "Tender tikka pieces in a rich, spiced masala gravy — bold and satisfying",
        "price": "CA$21",
        "badges": [
          "Popular"
        ]
      },
      {
        "name": "Goat Masala",
        "desc": "Tender goat pieces slow-cooked in an intense, aromatic masala sauce",
        "price": "CA$24",
        "badges": [
          "Rich"
        ]
      },
      {
        "name": "Lamb Rogan Josh",
        "desc": "Slow-braised lamb in a bold Kashmiri spice sauce — deeply fragrant",
        "price": "CA$24",
        "badges": []
      },
      {
        "name": "Fish Tikka Masala",
        "desc": "Tender fish pieces in our signature tikka masala sauce — from the grill to the pot",
        "price": "CA$22",
        "badges": []
      },
      {
        "name": "Prawn Masala",
        "desc": "Jumbo prawns cooked in a vibrant masala with onion, tomato and spices",
        "price": "CA$26",
        "badges": []
      },
      {
        "name": "Chicken Korma",
        "desc": "Chicken in a mild, fragrant yogurt and almond sauce — perfect for those who prefer mild",
        "price": "CA$20",
        "badges": []
      },
      {
        "name": "Chicken Kadhai",
        "desc": "Chicken cooked in a traditional kadhai with tomatoes, peppers and fresh ginger",
        "price": "CA$21",
        "badges": [
          "Spicy"
        ]
      }
    ]
  },
  {
    "id": "biryani",
    "name": "Biryani",
    "note": "Buy one, get one free — our most loved dish",
    "bogo": true,
    "dishes": [
      {
        "name": "Chicken Dum Biryani",
        "desc": "Chicken with bone and basmati rice slow-cooked with whole aromatic spices",
        "price": "CA$21",
        "badges": [
          "Best seller"
        ]
      },
      {
        "name": "Lamb Biryani",
        "desc": "Tender lamb pieces layered with saffron-infused basmati rice and golden onions",
        "price": "CA$24",
        "badges": []
      },
      {
        "name": "Goat Dum Biryani",
        "desc": "Bone-in goat cooked in the dum style — intensely flavoured and aromatic",
        "price": "CA$24",
        "badges": []
      },
      {
        "name": "Veg Dum Biryani",
        "desc": "Seasonal vegetables and paneer dum-cooked with fragrant basmati and spices",
        "price": "CA$19",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Prawn Biryani",
        "desc": "Jumbo prawns layered with aromatic basmati, fried onions and fresh herbs",
        "price": "CA$26",
        "badges": []
      },
      {
        "name": "Biryani Thali (Serves 2)",
        "desc": "Large portion chicken biryani with raita, salad, and your choice of 1 side curry",
        "price": "CA$36",
        "badges": [
          "Great value"
        ]
      }
    ]
  },
  {
    "id": "breads-rice",
    "name": "Breads & Rice",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Butter Naan",
        "desc": "Soft leavened bread baked in clay oven, brushed with butter and herbs",
        "price": "CA$4",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Garlic Naan",
        "desc": "Clay oven naan loaded with fresh garlic and coriander",
        "price": "CA$5",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Tawa Paratha (2 pcs)BOGO",
        "desc": "Layered whole-wheat flatbread cooked on griddle — served with butter, salad, pickle & dahi",
        "price": "CA$16",
        "badges": [
          "BOGO",
          "Veg"
        ]
      },
      {
        "name": "Stuffed Kulcha (Aloo/Paneer)",
        "desc": "Clay oven bread stuffed with spiced potato or paneer filling",
        "price": "CA$7",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Steamed Basmati Rice",
        "desc": "Fragrant long-grain basmati rice, perfectly steamed",
        "price": "CA$6",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Jeera Rice",
        "desc": "Basmati rice tempered with cumin seeds and whole spices",
        "price": "CA$7",
        "badges": [
          "Veg"
        ]
      }
    ]
  },
  {
    "id": "drinks-desserts",
    "name": "Drinks & Desserts",
    "note": "",
    "bogo": false,
    "dishes": [
      {
        "name": "Haveli Lime Soda (Masala Soda)",
        "desc": "Our signature masala lime soda — refreshing, tangy and perfectly spiced",
        "price": "CA$11",
        "badges": [
          "Favourite"
        ]
      },
      {
        "name": "Mango Lassi",
        "desc": "Creamy yogurt blended with fresh mango — sweet, thick and refreshing",
        "price": "CA$7",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Masala Chai",
        "desc": "Traditional spiced Indian tea brewed with ginger, cardamom and fresh milk",
        "price": "CA$5",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Haveli Special Cocktails",
        "desc": "\"Haveli is a cocktail paradise\" — ask your server for our seasonal cocktail menu",
        "price": "CA$12+",
        "badges": [
          "Cocktail bar"
        ]
      },
      {
        "name": "Gulab Jamun (4 pcs)",
        "desc": "Soft milk-solid dumplings soaked in rose-cardamom syrup — a classic Indian dessert",
        "price": "CA$9",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Gajrela (Carrot Halwa)Chef's favourite",
        "desc": "Slow-cooked carrot pudding with milk, ghee, cardamom and garnished with pistachios",
        "price": "CA$9",
        "badges": [
          "Chef's favourite",
          "Veg"
        ]
      },
      {
        "name": "Mango Kulfi",
        "desc": "Traditional Indian ice cream — rich, dense and loaded with mango flavour",
        "price": "CA$8",
        "badges": [
          "Veg"
        ]
      },
      {
        "name": "Milkshakes",
        "desc": "Mango, Strawberry, Chocolate or Vanilla — thick and freshly blended",
        "price": "CA$9",
        "badges": [
          "Veg"
        ]
      }
    ]
  }
];
