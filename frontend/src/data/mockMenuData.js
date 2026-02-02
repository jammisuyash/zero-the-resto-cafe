export const menuCategories = [
  {
    id: 'burgers',
    name: 'Burgers',
    icon: 'Beef',
    items: [
      { name: 'Crispy Veg Burger', price: 169, description: 'Crispy patty with fresh veggies', category: 'veg' },
      { name: 'Peri Peri Paneer Burger', price: 179, description: 'Spicy paneer with peri peri sauce', category: 'veg' },
      { name: 'Cheese Veg Burger', price: 179, description: 'Loaded with melted cheese', category: 'veg' },
      { name: 'Double Cheese Veg Burger', price: 189, description: 'Double the cheese, double the taste', category: 'veg' },
      { name: 'Gazed Mushroom Burger', price: 169, description: 'Grilled mushroom with special glaze', category: 'veg' },
      { name: 'Crispy Chicken Burger', price: 189, description: 'Crunchy chicken fillet', category: 'non-veg', badge: 'Popular' },
      { name: 'Dallas Chicken Burger', price: 199, description: 'Texas-style chicken burger', category: 'non-veg' },
      { name: 'Peri Peri Chicken Burger', price: 199, description: 'Fiery peri peri chicken', category: 'non-veg', badge: 'Spicy' },
      { name: 'Fish Fillet Burger', price: 209, description: 'Crispy fish fillet with tartar sauce', category: 'non-veg' },
      { name: 'Lemon Prawn Burger', price: 209, description: 'Juicy prawns with lemon zest', category: 'non-veg' },
      { name: 'Zero Special Burger', price: 249, description: 'Our signature creation', category: 'non-veg', badge: 'Signature' }
    ]
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    icon: 'Pizza',
    items: [
      { name: 'Margherita Pizza', price: 189, description: 'Classic tomato and cheese', category: 'veg' },
      { name: 'Peri Peri Paneer Pizza', price: 199, description: 'Spicy paneer with peri peri', category: 'veg' },
      { name: 'BBQ Paneer Pizza', price: 199, description: 'Smoky BBQ paneer', category: 'veg' },
      { name: 'Schezwan Mushroom Pizza', price: 189, description: 'Indo-Chinese fusion', category: 'veg' },
      { name: 'Onion and Corn Cheese Pizza', price: 179, description: 'Sweet corn and onion delight', category: 'veg' },
      { name: 'Grill Mushroom Pizza', price: 199, description: 'Grilled mushrooms with herbs', category: 'veg' },
      { name: 'Crispy Veg Pizza', price: 189, description: 'Loaded with crispy vegetables', category: 'veg' },
      { name: 'Onion and Capsicum Pizza', price: 199, description: 'Classic veggie combo', category: 'veg' },
      { name: 'Veg Blast Pizza', price: 209, description: 'Explosion of vegetable flavors', category: 'veg' },
      { name: 'Grill Chicken Pizza', price: 209, description: 'Grilled chicken chunks', category: 'non-veg', badge: 'Popular' },
      { name: 'BBQ Chicken Pizza', price: 219, description: 'BBQ chicken with tangy sauce', category: 'non-veg' },
      { name: 'Peri Peri Chicken Pizza', price: 219, description: 'Spicy peri peri chicken', category: 'non-veg' },
      { name: 'Onion and Chicken Pizza', price: 239, description: 'Chicken with caramelized onions', category: 'non-veg' },
      { name: 'Crispy Chicken Pizza', price: 239, description: 'Crispy fried chicken topping', category: 'non-veg' },
      { name: 'Peri Peri Sausages Pizza', price: 219, description: 'Juicy sausages with peri peri', category: 'non-veg' },
      { name: 'Fillet Fish Pizza', price: 249, description: 'Premium fish fillet', category: 'non-veg' },
      { name: 'Butter Prawn Pizza', price: 269, description: 'Butter garlic prawns', category: 'non-veg' },
      { name: 'Chef Special Pizza', price: 299, description: 'Secret recipe pizza', category: 'non-veg', badge: 'Chef Special' }
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    icon: 'Sandwich',
    items: [
      { name: 'Classic Veg Sandwich', price: 159, description: 'Grilled veggies with mayo', category: 'veg' },
      { name: 'Peri Peri Paneer Sandwich', price: 179, description: 'Spicy paneer sandwich', category: 'veg' },
      { name: 'Paneer and Khosla Sandwich', price: 199, description: 'Paneer with special sauce', category: 'veg' },
      { name: 'Creamy Mushroom Sandwich', price: 189, description: 'Creamy mushroom filling', category: 'veg' },
      { name: 'Mexican Veg Sandwich', price: 179, description: 'Mexican spiced veggies', category: 'veg' },
      { name: 'Veg Club Sandwich', price: 219, description: 'Triple-layered veg delight', category: 'veg' },
      { name: 'Chicken & Mayo Sandwich', price: 199, description: 'Shredded chicken with mayo', category: 'non-veg' },
      { name: 'Grill Chicken Sandwich', price: 209, description: 'Grilled chicken breast', category: 'non-veg' },
      { name: 'Peri Peri Chicken Sandwich', price: 219, description: 'Fiery peri peri chicken', category: 'non-veg', badge: 'Spicy' },
      { name: 'Grill Sausage Sandwich', price: 219, description: 'Grilled sausages', category: 'non-veg' },
      { name: 'Hot and Spicy Sandwich', price: 229, description: 'Extra spicy chicken', category: 'non-veg' },
      { name: 'Chicken Sandwich', price: 239, description: 'Classic chicken sandwich', category: 'non-veg' },
      { name: 'Chicken Club Sandwich', price: 249, description: 'Premium triple-layer chicken', category: 'non-veg', badge: 'Popular' }
    ]
  },
  {
    id: 'wraps',
    name: 'Wraps',
    icon: 'Wrap',
    items: [
      { name: 'Veg Wrap', price: 159, description: 'Vegetables, iceberg and mayonnaise', category: 'veg' },
      { name: 'Paneer Wrap', price: 169, description: 'Crispy paneer, iceberg and mayonnaise', category: 'veg' },
      { name: 'Mexican Veg Wrap', price: 169, description: 'Sweet corn, bell peppers, mexican sauce', category: 'veg' },
      { name: 'Grill Chicken Wrap', price: 189, description: 'Grill chicken, mayonnaise and iceberg', category: 'non-veg' },
      { name: 'Crispy Chicken Wrap', price: 199, description: 'Crispy chicken, iceberg and mayonnaise', category: 'non-veg' },
      { name: 'Lemon Prawn Wrap', price: 209, description: 'Prawn, iceberg and mayonnaise', category: 'non-veg' },
      { name: 'Zero Special Wrap', price: 249, description: 'Our signature wrap', category: 'non-veg', badge: 'Signature' }
    ]
  },
  {
    id: 'nachos-tacos',
    name: 'Nachos & Tacos',
    icon: 'Cookie',
    items: [
      { name: 'Chips and Salsa Nachos', price: 249, description: 'Crispy nachos with salsa', category: 'veg' },
      { name: 'Creamy Veg Nachos', price: 249, description: 'Creamy cheese sauce', category: 'veg' },
      { name: 'Creamy Chicken Nachos', price: 249, description: 'Chicken with cheese sauce', category: 'non-veg' },
      { name: 'Creamy Prawn Nachos', price: 249, description: 'Prawns with cheese sauce', category: 'non-veg' },
      { name: 'Chicken and Salsa Nachos', price: 249, description: 'Chicken with spicy salsa', category: 'non-veg' },
      { name: 'Veg Tacos', price: 249, description: 'Crispy veggie tacos', category: 'veg' },
      { name: 'Crispy Veg Tacos', price: 249, description: 'Extra crispy taco shells', category: 'veg' },
      { name: 'Crispy Chicken Tacos', price: 249, description: 'Crispy chicken filling', category: 'non-veg' },
      { name: 'Peri Peri Chicken Tacos', price: 249, description: 'Spicy peri peri tacos', category: 'non-veg' },
      { name: 'Garlic Prawn Tacos', price: 249, description: 'Garlic butter prawns', category: 'non-veg' },
      { name: 'Mustard Fish Tacos', price: 249, description: 'Mustard glazed fish', category: 'non-veg' }
    ]
  },
  {
    id: 'wings',
    name: 'Wings & Quesadilla',
    icon: 'Drumstick',
    items: [
      { name: 'Crispy Wings', price: 259, description: 'Classic crispy wings', category: 'non-veg' },
      { name: 'Peri Peri Wings', price: 259, description: 'Spicy peri peri sauce', category: 'non-veg', badge: 'Popular' },
      { name: 'BBQ Wings', price: 259, description: 'Smoky BBQ flavor', category: 'non-veg' },
      { name: 'Buffalo Wings', price: 259, description: 'Buffalo sauce wings', category: 'non-veg' },
      { name: 'Hot and Spicy Wings', price: 259, description: 'Extra spicy wings', category: 'non-veg', badge: 'Spicy' },
      { name: 'Lemons Honey Wings', price: 259, description: 'Sweet and tangy', category: 'non-veg' },
      { name: 'Mexican Veg Quesadilla', price: 149, description: 'Cheese and veggies', category: 'veg' },
      { name: 'Cheese and Corn Quesadilla', price: 149, description: 'Melted cheese with corn', category: 'veg' },
      { name: 'Chicken Quesadilla', price: 149, description: 'Shredded chicken', category: 'non-veg' },
      { name: 'Grilled Fish Quesadilla', price: 149, description: 'Grilled fish filling', category: 'non-veg' },
      { name: 'Prawn Quesadilla', price: 149, description: 'Juicy prawns', category: 'non-veg' }
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: 'UtensilsCrossed',
    items: [
      { name: 'Veg Manchuria (Wet/Dry)', price: 200, description: 'Indo-Chinese classic', category: 'veg' },
      { name: 'Paneer Manchuria', price: 210, description: 'Paneer in spicy sauce', category: 'veg' },
      { name: 'Mushroom Chilli', price: 210, description: 'Spicy mushroom', category: 'veg' },
      { name: 'Baby Corn Manchuria', price: 210, description: 'Crispy baby corn', category: 'veg' },
      { name: 'Crispy Corn', price: 250, description: 'Fried crispy corn', category: 'veg' },
      { name: 'Chilli Chicken', price: 250, description: 'Classic chilli chicken', category: 'non-veg', badge: 'Popular' },
      { name: 'Schezwan Chicken', price: 280, description: 'Spicy schezwan sauce', category: 'non-veg' },
      { name: 'Dragon Chicken', price: 250, description: 'Fiery dragon sauce', category: 'non-veg' },
      { name: 'Spicy Black Bean Chicken', price: 280, description: 'Black bean sauce', category: 'non-veg' },
      { name: 'Oyster Chicken', price: 280, description: 'Oyster sauce chicken', category: 'non-veg' },
      { name: 'Crispy Chicken', price: 280, description: 'Ultra crispy chicken', category: 'non-veg' }
    ]
  },
  {
    id: 'rice-bowls',
    name: 'Rice & Noodles',
    icon: 'Bowl',
    items: [
      { name: 'Veg Fried Rice', price: 180, description: 'Classic fried rice', category: 'veg' },
      { name: 'Schezwan Fried Rice', price: 210, description: 'Spicy schezwan rice', category: 'veg' },
      { name: 'Singapore Fried Rice (Veg)', price: 220, description: 'Singapore style', category: 'veg' },
      { name: 'Malaysian Fried Rice (Veg)', price: 220, description: 'Malaysian spices', category: 'veg' },
      { name: 'Thai Chilli Fried Rice', price: 220, description: 'Thai style spicy rice', category: 'veg' },
      { name: 'Chicken Fried Rice', price: 200, description: 'Chicken fried rice', category: 'non-veg' },
      { name: 'Schezwan Chicken Rice', price: 220, description: 'Spicy chicken rice', category: 'non-veg' },
      { name: 'Soft Noodles (Veg)', price: 160, description: 'Classic soft noodles', category: 'veg' },
      { name: 'Schezwan Noodles (Veg)', price: 170, description: 'Spicy noodles', category: 'veg' },
      { name: 'Hakka Noodles (Veg)', price: 170, description: 'Hakka style noodles', category: 'veg' },
      { name: 'Thai Noodles (Veg)', price: 170, description: 'Thai flavored noodles', category: 'veg' },
      { name: 'Singapore Noodles (Veg)', price: 190, description: 'Singapore curry noodles', category: 'veg' },
      { name: 'Pad Thai (Veg)', price: 200, description: 'Classic Thai noodles', category: 'veg' },
      { name: 'Chicken Noodles', price: 180, description: 'Chicken noodles', category: 'non-veg', badge: 'Popular' }
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    icon: 'CookingPot',
    items: [
      { name: 'French Fries', price: 150, description: 'Classic french fries', category: 'veg' },
      { name: 'Peri Peri Fries', price: 150, description: 'Spicy peri peri fries', category: 'veg' },
      { name: 'Cheesy Fries', price: 100, description: 'Loaded with cheese', category: 'veg' },
      { name: 'Chicken Cheesy Fries', price: 100, description: 'Chicken and cheese', category: 'non-veg' },
      { name: 'Chicken Nuggets', price: 150, description: 'Crispy chicken nuggets', category: 'non-veg' },
      { name: 'Cheese Shots', price: 150, description: 'Fried cheese balls', category: 'veg' },
      { name: 'Prawn 65', price: 269, description: 'Spicy fried prawns', category: 'non-veg' },
      { name: 'Chilly Prawn', price: 269, description: 'Chilli garlic prawns', category: 'non-veg' },
      { name: 'Butter Garlic Prawn', price: 269, description: 'Butter garlic sauce', category: 'non-veg' },
      { name: 'Fish 65', price: 259, description: 'Spicy fried fish', category: 'non-veg' },
      { name: 'Chilly Fish', price: 259, description: 'Chilli garlic fish', category: 'non-veg' },
      { name: 'Apollo Fish', price: 259, description: 'Tangy apollo sauce', category: 'non-veg' }
    ]
  },
  {
    id: 'breakfast',
    name: 'Breakfast & Omelettes',
    icon: 'Egg',
    items: [
      { name: 'Veggies Omelette', price: 129, description: 'Mixed vegetable omelette', category: 'veg' },
      { name: 'Cheese Omelette', price: 129, description: 'Loaded cheese omelette', category: 'veg' },
      { name: 'Mushroom Garlic Omelette', price: 129, description: 'Mushroom and garlic', category: 'veg' },
      { name: 'Chicken & Cheese Omelette', price: 129, description: 'Chicken with cheese', category: 'non-veg' },
      { name: 'Sausage & Cheese Omelette', price: 129, description: 'Sausage and cheese', category: 'non-veg' },
      { name: 'Scrambled Eggs', price: 100, description: 'Classic scrambled eggs', category: 'veg' },
      { name: 'Bread Omelet', price: 100, description: 'Bread with egg', category: 'veg' },
      { name: 'Masala Omelet', price: 120, description: 'Indian spiced omelette', category: 'veg' },
      { name: 'Cheese Garlic Bread', price: 150, description: 'Cheesy garlic bread', category: 'veg' },
      { name: 'Veg Garlic Bread', price: 160, description: 'Veggie garlic bread', category: 'veg' },
      { name: 'Chicken Garlic Bread', price: 220, description: 'Chicken stuffed bread', category: 'non-veg' }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: 'IceCream',
    items: [
      { name: 'Chocolate Brownie', price: 130, description: 'Rich chocolate brownie', category: 'veg', badge: 'Popular' },
      { name: 'Hazelnut Brownie', price: 150, description: 'Hazelnut chocolate brownie', category: 'veg' },
      { name: 'Sizzling Brownie', price: 190, description: 'Hot brownie with ice cream', category: 'veg', badge: 'Signature' },
      { name: 'Brownie with Ice Cream', price: 180, description: 'Brownie topped with ice cream', category: 'veg' },
      { name: 'Blue Berry Puff Pastry', price: 180, description: 'Blueberry filled pastry', category: 'veg' },
      { name: 'Strawberry Berry Puff Pastry', price: 180, description: 'Strawberry filled pastry', category: 'veg' }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages & Shakes',
    icon: 'Coffee',
    items: [
      { name: 'Kit Kat Shake', price: 250, description: 'Kit Kat thick shake', category: 'veg', badge: 'Popular' },
      { name: 'Peanut Butter Shake', price: 250, description: 'Creamy peanut butter', category: 'veg' },
      { name: 'Chocolate Shake', price: 250, description: 'Rich chocolate shake', category: 'veg' },
      { name: 'Brownie Shake', price: 250, description: 'Brownie blended shake', category: 'veg' },
      { name: 'Banana Shake', price: 250, description: 'Fresh banana shake', category: 'veg' },
      { name: 'Oreo Shake', price: 250, description: 'Oreo cookies shake', category: 'veg' },
      { name: 'Strawberry Shake', price: 250, description: 'Fresh strawberry shake', category: 'veg' },
      { name: 'Butterscotch Shake', price: 250, description: 'Butterscotch flavor', category: 'veg' },
      { name: 'Mango Shake', price: 250, description: 'Alphonso mango shake', category: 'veg' },
      { name: 'Fresh Lime Soda', price: 160, description: 'Fresh lime with soda', category: 'veg' },
      { name: 'Mojito', price: 160, description: 'Classic virgin mojito', category: 'veg' },
      { name: 'Blue Curacao', price: 160, description: 'Blue curacao mocktail', category: 'veg' },
      { name: 'Cold Coffee', price: 160, description: 'Iced cold coffee', category: 'veg' }
    ]
  }
];

export const bestSellers = [
  {
    name: 'Zero Special Burger',
    price: 249,
    description: 'Our signature creation with premium ingredients',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    category: 'non-veg',
    badge: 'Signature'
  },
  {
    name: 'Chef Special Pizza',
    price: 299,
    description: 'Secret recipe pizza loaded with flavors',
    image: 'https://images.unsplash.com/photo-1712652080841-9e480a2c43ec',
    category: 'non-veg',
    badge: 'Chef Special'
  },
  {
    name: 'Peri Peri Wings',
    price: 259,
    description: 'Crispy wings with fiery peri peri sauce',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f',
    category: 'non-veg',
    badge: 'Popular'
  },
  {
    name: 'Sizzling Brownie',
    price: 190,
    description: 'Hot brownie with vanilla ice cream',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3',
    category: 'veg',
    badge: 'Signature'
  },
  {
    name: 'Kit Kat Shake',
    price: 250,
    description: 'Thick shake loaded with Kit Kat chunks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699',
    category: 'veg',
    badge: 'Popular'
  },
  {
    name: 'Chilli Chicken',
    price: 250,
    description: 'Classic Indo-Chinese favorite',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d',
    category: 'non-veg',
    badge: 'Popular'
  }
];

export const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1550547660-d9450f859349', alt: 'Gourmet Burger', category: 'food' },
  { url: 'https://images.unsplash.com/photo-1712652080841-9e480a2c43ec', alt: 'Pizza', category: 'food' },
  { url: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f', alt: 'Wings', category: 'food' },
  { url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3', alt: 'Dessert', category: 'food' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', alt: 'Restaurant Interior', category: 'ambience' },
  { url: 'https://images.unsplash.com/photo-1538333581680-29dd4752ddf2', alt: 'Cozy Atmosphere', category: 'ambience' },
  { url: 'https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg', alt: 'Dining Area', category: 'ambience' },
  { url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699', alt: 'Shakes', category: 'food' }
];

export const restaurantInfo = {
  name: 'Zero The Resto Cafe',
  tagline: 'Built for Late-Night Hunger',
  phone: '07893897894',
  email: 'info@zerorestocafe.com',
  address: 'Plot no:150, opp. NCC canteen, Lawsons Bay Colony, Pedda Waltair, Visakhapatnam, Andhra Pradesh 530017',
  hours: '7:00 AM - 11:00 PM',
  mapUrl: 'https://www.google.com/maps?q=Plot+no:150,+opp.+NCC+canteen,+Lawsons+Bay+Colony,+Pedda+Waltair,+Visakhapatnam',
  zomatoUrl: 'https://www.zomato.com',
  social: {
    instagram: null,
    facebook: null,
    twitter: null
  }
};
