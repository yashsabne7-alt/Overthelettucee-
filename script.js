
// =====================================================
// OVER THE LETTUCE
// COMPLETE MAIN JAVASCRIPT
// =====================================================

"use strict";

// =====================================================
// 1. WHATSAPP NUMBER
// =====================================================

const WHATSAPP_NUMBER = "918369405815";

// =====================================================
// 2. MENU DATA — 64 ITEMS
// Change image filenames whenever required.
// =====================================================

const menuItems = [

  // TOAST (2)
  {
    id: "guacamole-toast",
    name: "Guacamole Toast",
    category: "toast",
    type: "veg",
    price: 345,
    image: "1.jpg",
    description: "Sourdough bread toast, pesto, guacamole and mixed seeds."
  },
  {
    id: "caprese-toast",
    name: "Caprese Toast",
    category: "toast",
    type: "veg",
    price: 295,
    image: "2.jpg",
    description: "Sourdough bread toast, pesto, sliced tomatoes and bocconcini."
  },

  // SMOOTHIES (4)
  {
    id: "berries-magic",
    name: "Berries Magic",
    category: "smoothies",
    type: "veg",
    price: 330,
    image: "3.jpg",
    description: "Frozen strawberry, frozen blueberry, frozen raspberry, curd, honey, milk and ice."
  },
  {
    id: "banana-cinnamon",
    name: "Banana Cinnamon",
    category: "smoothies",
    type: "veg",
    price: 330,
    image: "4.jpg",
    description: "Banana, cinnamon, curd and ice."
  },
  {
    id: "banana-cocoa",
    name: "Banana Cocoa",
    category: "smoothies",
    type: "veg",
    price: 340,
    image: "5.jpg",
    description: "Banana, cocoa powder, vanilla, milk, jaggery powder and ice."
  },
  {
    id: "banana-peanut-butter",
    name: "Banana Peanut Butter",
    category: "smoothies",
    type: "veg",
    price: 340,
    image: "6.jpg",
    description: "Banana, crunchy peanut butter, milk and ice."
  },

  // SMOOTHIE BOWLS (2)
  {
    id: "banana-acai-berries-bowl",
    name: "Banana Acai Berries Bowl",
    category: "smoothie-bowl",
    type: "veg",
    price: 555,
    image: "7.jpg",
    description: "Banana, berries, dates, acai and almond milk. Vegan bowl topped with fresh fruits, nuts and seeds."
  },
  {
    id: "avocado-honey-date",
    name: "Avocado Honey Date",
    category: "smoothie-bowl",
    type: "veg",
    price: 525,
    image: "8.jpg",
    description: "Creamy avocado, dates and almond milk. Vegan bowl topped with fresh seasonal fruits and nuts."
  },

  // HEALTHY JUICES (4)
  {
    id: "detoxifier-juice",
    name: "Detoxifier Juice",
    category: "healthy-juices",
    type: "veg",
    price: 320,
    image: "9.jpg",
    description: "Apple, spinach, carrot, cucumber and beetroot."
  },
  {
    id: "sweet-green-juice",
    name: "Sweet Green Juice",
    category: "healthy-juices",
    type: "veg",
    price: 320,
    image: "10.jpg",
    description: "Apple, spinach, pineapple, mint and lime."
  },
  {
    id: "refresher-juice",
    name: "Refresher Juice",
    category: "healthy-juices",
    type: "veg",
    price: 330,
    image: "11.jpg",
    description: "Watermelon, mint, chia seeds and lime."
  },
  {
    id: "beet-carrot-juice",
    name: "Beet Carrot Juice",
    category: "healthy-juices",
    type: "veg",
    price: 320,
    image: "12.jpg",
    description: "Carrot, beetroot, amla and ginger."
  },

  // FRESH JUICES (5)
  {
    id: "orange-juice",
    name: "Orange",
    category: "fresh-juices",
    type: "veg",
    price: 400,
    image: "13.jpg",
    description: "Orange juice, rich in antioxidants and micronutrients like vitamin C and potassium."
  },
  {
    id: "watermelon-juice",
    name: "Watermelon",
    category: "fresh-juices",
    type: "veg",
    price: 300,
    image: "14.jpg",
    description: "Refreshing watermelon juice with antioxidants and amino acids."
  },
  {
    id: "pineapple-juice",
    name: "Pineapple",
    category: "fresh-juices",
    type: "veg",
    price: 350,
    image: "15.jpg",
    description: "Fresh pineapple juice with naturally refreshing flavour."
  },
  {
    id: "sweet-lime-juice",
    name: "Sweet Lime",
    category: "fresh-juices",
    type: "veg",
    price: 300,
    image: "16.jpg",
    description: "Cool, honey-sweet and gently tangy sweet lime juice, packed with vitamin C."
  },
  {
    id: "pomegranate-juice",
    name: "Pomegranate",
    category: "fresh-juices",
    type: "veg",
    price: 450,
    image: "17.jpg",
    description: "Ruby-red, sweet-tart and packed with antioxidants."
  },

  // PARFAIT (4)
  {
    id: "chocolate-orange-parfait",
    name: "Chocolate Orange Parfait",
    category: "parfait",
    type: "veg",
    price: 300,
    image: "18.jpg",
    description: "Honey, Greek yoghurt, orange, sugar-free dark chocolate and granola."
  },
  {
    id: "blueberry-honey-parfait",
    name: "Blueberry Honey Parfait",
    category: "parfait",
    type: "veg",
    price: 280,
    image: "19.jpg",
    description: "Honey, Greek yoghurt, blueberry and granola."
  },
  {
    id: "orange-banana-parfait",
    name: "Orange & Banana Parfait",
    category: "parfait",
    type: "veg",
    price: 260,
    image: "20.jpg",
    description: "Honey, Greek yoghurt, orange, banana and granola."
  },
  {
    id: "dragonfruit-parfait",
    name: "Dragonfruit Parfait",
    category: "parfait",
    type: "veg",
    price: 280,
    image: "21.jpg",
    description: "Honey, Greek yoghurt, dragon fruit and granola."
  },

  // SOURDOUGH SANDWICHES (10)
  {
    id: "paneer-tikka-sandwich",
    name: "Paneer Tikka Sandwich",
    category: "sandwiches",
    type: "veg",
    price: 375,
    image: "22.jpg",
    description: "Sourdough bread, paneer tikka, baby spinach, beetroot hummus, pickled onion, bocconcini, roasted tomato, gherkins and in-house garlic basil dressing."
  },
  {
    id: "peri-peri-paneer-sandwich",
    name: "Peri Peri Paneer Sandwich",
    category: "sandwiches",
    type: "veg",
    price: 385,
    image: "23.jpg",
    description: "Sourdough bread, peri peri labaneh, grilled paneer, onion, tomato, jalapeno, mix leafy and in-house garlic basil dressing."
  },
  {
    id: "basil-pesto-paneer-sandwich",
    name: "Basil Pesto Paneer Sandwich",
    category: "sandwiches",
    type: "veg",
    price: 395,
    image: "24.jpg",
    description: "Sourdough bread, mix herbs labaneh, pesto, grilled paneer, roasted tomatoes, bocconcini, mix leafy and in-house balsamic dressing."
  },
  {
    id: "hummus-paneer-sandwich",
    name: "Hummus & Paneer Sandwich",
    category: "sandwiches",
    type: "veg",
    price: 395,
    image: "25.jpg",
    description: "Sourdough bread, grilled paneer, roasted garlic hummus, onions, tomatoes, jalapeno, mix leafy and in-house lemon olive oil dressing."
  },
  {
    id: "zatar-paneer-sandwich",
    name: "Zatar Paneer Sandwich",
    category: "sandwiches",
    type: "veg",
    price: 375,
    image: "26.jpg",
    description: "Sourdough bread, mix herbs labaneh, grilled paneer, zatar powder, grilled bell pepper, grilled zucchini, mix leafy and in-house Dijon mustard dressing."
  },
  {
    id: "hummus-chicken-sandwich",
    name: "Hummus & Chicken Sandwich",
    category: "sandwiches",
    type: "nonveg",
    price: 445,
    image: "27.jpg",
    description: "Sourdough bread, grilled paneer, roasted garlic hummus, onions, tomatoes, jalapeno, mix leafy and in-house lemon olive oil dressing."
  },
  {
    id: "zatar-chicken-sandwich",
    name: "Zatar Chicken Sandwich",
    category: "sandwiches",
    type: "nonveg",
    price: 425,
    image: "28.jpg",
    description: "Sourdough bread, mix herbs labaneh, zatar chicken, grilled bell pepper, grilled zucchini, mix leafy and in-house Dijon mustard dressing."
  },
  {
    id: "chicken-tikka-sandwich",
    name: "Chicken Tikka Sandwich",
    category: "sandwiches",
    type: "nonveg",
    price: 425,
    image: "29.jpg",
    description: "Sourdough bread, beetroot hummus, baby spinach, chicken tikka, pickled onion, bocconcini, roasted tomato, jalapeno and in-house garlic basil dressing."
  },
  {
    id: "peri-peri-chicken-sandwich",
    name: "Peri Peri Chicken Sandwich",
    category: "sandwiches",
    type: "nonveg",
    price: 435,
    image: "30.jpg",
    description: "Sourdough bread, peri peri labaneh, grilled chicken, onion, tomato, jalapeno, mix leafy and in-house garlic basil dressing."
  },
  {
    id: "basil-pesto-chicken-sandwich",
    name: "Basil Pesto Chicken Sandwich",
    category: "sandwiches",
    type: "nonveg",
    price: 445,
    image: "31.jpg",
    description: "Sourdough bread, mix herbs labaneh, pesto, grilled chicken, roasted tomatoes, bocconcini, mix leafy and in-house balsamic dressing."
  },

  // WRAPS (11)
  {
    id: "paneer-tikka-wrap",
    name: "Paneer Tikka Wrap",
    category: "wraps",
    type: "veg",
    price: 365,
    image: "32.jpg",
    description: "Tortilla, mix leafy, roasted garlic hummus, paneer tikka, pickled onion, crumbled feta, jalapeno and in-house lemon olive oil dressing."
  },
  {
    id: "hummus-paneer-wrap",
    name: "Hummus & Paneer Wrap",
    category: "wraps",
    type: "veg",
    price: 375,
    image: "33.jpg",
    description: "Tortilla, grilled paneer, sundried tomato, roasted garlic hummus, onions, jalapeno, mix leafy and in-house lemon olive oil dressing."
  },
  {
    id: "zatar-paneer-wrap",
    name: "Zatar Paneer Wrap",
    category: "wraps",
    type: "veg",
    price: 385,
    image: "34.jpg",
    description: "Tortilla, zatar paneer, grilled bell pepper, zucchini, roasted garlic hummus, mix leafy and in-house carrot orange dressing."
  },
  {
    id: "falafel-wrap",
    name: "Falafel Wrap",
    category: "wraps",
    type: "veg",
    price: 365,
    image: "35.jpg",
    description: "Tortilla, falafel, beetroot hummus, onion, tomato, jalapeno, crumbled feta, mix leafy and in-house lemon olive oil dressing."
  },
  {
    id: "peri-peri-paneer-wrap",
    name: "Peri Peri Paneer Wrap",
    category: "wraps",
    type: "veg",
    price: 365,
    image: "36.jpg",
    description: "Tortilla, peri peri paneer, roasted garlic hummus, onions, tomatoes, jalapeno, mix leafy and in-house Dijon mustard thyme dressing."
  },
  {
    id: "shawarma-paneer-wrap",
    name: "Shawarma Paneer Wrap",
    category: "wraps",
    type: "veg",
    price: 365,
    image: "37.jpg",
    description: "Tortilla, shawarma paneer, roasted garlic hummus, pickled onion, mix leafy, potato wedges and in-house lemon olive oil dressing."
  },
  {
    id: "chicken-tikka-wrap",
    name: "Chicken Tikka Wrap",
    category: "wraps",
    type: "nonveg",
    price: 415,
    image: "38.jpg",
    description: "Tortilla, roasted garlic hummus, chicken tikka, pickled onion, crumbled feta, jalapeno slices, mix leafy and in-house lemon olive oil dressing."
  },
  {
    id: "hummus-chicken-wrap",
    name: "Hummus & Chicken Wrap",
    category: "wraps",
    type: "nonveg",
    price: 425,
    image: "399.jpg",
    description: "Tortilla, grilled chicken, sundried tomato, roasted garlic hummus, onions, jalapeno, mix leafy and in-house lemon olive oil dressing."
  },
  {
    id: "peri-peri-chicken-wrap",
    name: "Peri Peri Chicken Wrap",
    category: "wraps",
    type: "nonveg",
    price: 425,
    image: "400.jpg",
    description: "Tortilla, peri peri chicken, roasted garlic hummus, onions, tomatoes, jalapeno, mix leafy and in-house Dijon mustard thyme dressing."
  },
  {
    id: "zatar-chicken-wrap",
    name: "Zatar Chicken Wrap",
    category: "wraps",
    type: "nonveg",
    price: 435,
    image: "41.jpg",
    description: "Tortilla, zatar chicken, grilled bell pepper, zucchini, roasted garlic hummus, mix leafy and in-house carrot orange dressing."
  },
  {
    id: "shawarma-chicken-wrap",
    name: "Shawarma Chicken Wrap",
    category: "wraps",
    type: "nonveg",
    price: 425,
    image: "42.jpg",
    description: "Tortilla, shawarma chicken, roasted garlic hummus, pickled onion, mix leafy, potato wedges and in-house lemon olive oil dressing."
  },

  // SUPER BOWLS (7)
  {
    id: "paneer-burrito-bowl",
    name: "Paneer Burrito Bowl",
    category: "super-bowl",
    type: "veg",
    price: 385,
    image: "43.jpg",
    description: "Grilled paneer, steamed brown rice, guacamole, salsa crudo, sweet corn, mix leafy, in-house signature carrot orange dressing and mix seeds."
  },
  {
    id: "falafel-bowl",
    name: "Falafel Bowl",
    category: "super-bowl",
    type: "veg",
    price: 395,
    image: "44.jpg",
    description: "Baked falafel, quinoa, beetroot hummus, pumpkin hummus, radish, onions, tomatoes, mix leafy, in-house lemon olive oil dressing and mix seeds."
  },
  {
    id: "paneer-shawarma-bowl",
    name: "Paneer Shawarma Bowl",
    category: "super-bowl",
    type: "veg",
    price: 395,
    image: "45.jpg",
    description: "Shawarma paneer, roasted garlic hummus, roasted potato wedges, pickled onion, olives, roasted bell pepper, mix leafy, chickpea salad, in-house buffalo dressing and mix seeds."
  },
  {
    id: "pesto-paneer-bowl",
    name: "Pesto Paneer Bowl",
    category: "super-bowl",
    type: "veg",
    price: 395,
    image: "46.jpg",
    description: "Grilled paneer, pesto, boiled quinoa, boiled corn, grilled bell pepper, grilled zucchini, pico de gallo, mix leafy and in-house lemon olive oil dressing."
  },
  {
    id: "chicken-burrito-bowl",
    name: "Chicken Burrito Bowl",
    category: "super-bowl",
    type: "nonveg",
    price: 435,
    image: "47.jpg",
    description: "Grilled chicken, steamed brown rice, guacamole, salsa crudo, sweet corn, mix leafy, in-house signature carrot orange dressing and mix seeds."
  },
  {
    id: "chicken-shawarma-bowl",
    name: "Chicken Shawarma Bowl",
    category: "super-bowl",
    type: "nonveg",
    price: 455,
    image: "48.jpg",
    description: "Shawarma chicken, roasted garlic hummus, roasted potato wedges, pickled onion, olives, roasted bell pepper, mix leafy, chickpea salad, in-house buffalo dressing and mix seeds."
  },
  {
    id: "pesto-chicken-bowl",
    name: "Pesto Chicken Bowl",
    category: "super-bowl",
    type: "nonveg",
    price: 455,
    image: "49.jpg",
    description: "Grilled chicken, pesto, boiled quinoa, boiled corn, grilled bell pepper, grilled zucchini, pico de gallo, mix leafy and in-house lemon olive oil dressing."
  },

  // CHICKEN SALADS (6)
  {
    id: "chicken-tikka-salad",
    name: "Chicken Tikka Salad",
    category: "salads",
    type: "nonveg",
    image: "50.jpg",
    sizes: { Small: 395, Big: 485 },
    description: "Mix leafy, cherry tomato, cauli rice, French beans, grilled bell pepper, chicken tikka, pickled onion, black olive, croutons, parmesan cheese and in-house garlic basil dressing."
  },
  {
    id: "chicken-italian-pasta-salad",
    name: "Chicken Italian Pasta Salad",
    category: "salads",
    type: "nonveg",
    image: "51.jpg",
    sizes: { Small: 395, Big: 485 },
    description: "Mix leafy, fusilli pasta, grilled bell pepper, grilled zucchini, grilled chicken, boiled corn, pickled onion, tomato cherry, black olive, croutons, bocconcini and in-house Italian balsamic dressing."
  },
  {
    id: "chicken-crunch-cracker-salad",
    name: "Chicken Crunch Cracker Salad",
    category: "salads",
    type: "nonveg",
    image: "52.jpg",
    sizes: { Small: 425, Big: 525 },
    description: "Mix leafy, quinoa, grilled mushroom, boiled corn, French bean, grilled chicken, black olive, crumbled feta, cranberry, almonds, spicy cashew and in-house carrot orange dressing."
  },
  {
    id: "low-carb-chicken-keto-salad",
    name: "Low Carb Chicken Keto Salad",
    category: "salads",
    type: "nonveg",
    image: "53.jpg",
    sizes: { Small: 425, Big: 525 },
    description: "Mix leafy, cauli rice, grilled mushrooms, grilled bell pepper, olives, jalapeno, chicken tikka, pesto, crumbled feta, almonds and Italian garlic basil dressing."
  },
  {
    id: "avocado-chicken-salad",
    name: "Avocado Chicken Salad",
    category: "salads",
    type: "nonveg",
    image: "54.jpg",
    sizes: { Small: 425, Big: 525 },
    description: "Mix leafy, grilled chicken, crumbled feta, Hass avocado, grilled zucchini, boiled chickpeas, grilled bell pepper, sweet corn, cherry tomato and in-house Dijon mustard thyme dressing."
  },
  {
    id: "smoky-bbq-chicken-salad",
    name: "Smoky BBQ Chicken Salad",
    category: "salads",
    type: "nonveg",
    image: "555.jpg",
    sizes: { Small: 425, Big: 525 },
    description: "Mix leafy, soba noodles, grilled bell pepper, cucumber, BBQ chicken, jalapeno, pickled onion, peanuts, mix seeds and in-house Italian balsamic dressing."
  },

  // VEG SALADS (9)
  {
    id: "paneer-tikka-salad",
    name: "Paneer Tikka Salad",
    category: "salads",
    type: "veg",
    image: "56.jpg",
    sizes: { Small: 335, Big: 445 },
    description: "Mix leafy, cherry tomato, cauli rice, French beans, grilled bell pepper, paneer tikka, pickled onion, black olive, croutons, parmesan cheese and in-house garlic basil dressing."
  },
  {
    id: "italian-pasta-salad",
    name: "Italian Pasta Salad",
    category: "salads",
    type: "veg",
    image: "57.jpg",
    sizes: { Small: 335, Big: 445 },
    description: "Mix leafy, fusilli pasta, grilled bell pepper, grilled zucchini, boiled corn, pickled onion, tomato cherry, black olive, croutons, bocconcini and in-house Italian balsamic dressing."
  },
  {
    id: "veg-crunch-cracker-salad",
    name: "Veg Crunch Cracker Salad",
    category: "salads",
    type: "veg",
    image: "58.jpg",
    sizes: { Small: 395, Big: 545 },
    description: "Mix leafy, quinoa, grilled mushroom, boiled corn, French bean, grilled paneer, black olive, crumbled feta, cranberry, almond, spicy cashew and in-house carrot orange dressing."
  },
  {
    id: "low-carb-veg-keto-salad",
    name: "Low Carb Veg Keto Salad",
    category: "salads",
    type: "veg",
    image: "59.jpg",
    sizes: { Small: 335, Big: 445 },
    description: "Mix leafy, cauli rice, grilled mushrooms, grilled bell pepper, olives, jalapeno, paneer tikka, pesto, crumbled feta, almonds and garlic basil dressing."
  },
  {
    id: "avocado-paneer-salad",
    name: "Avocado Paneer Salad",
    category: "salads",
    type: "veg",
    image: "60.jpg",
    sizes: { Small: 375, Big: 485 },
    description: "Mix leafy, grilled paneer, crumbled feta, Hass avocado, grilled zucchini, boiled chickpeas, grilled bell pepper, sweet corn, cherry tomato and in-house Dijon mustard thyme dressing."
  },
  {
    id: "watermelon-feta-cheese-salad",
    name: "Watermelon Feta Cheese Salad",
    category: "salads",
    type: "veg",
    image: "61.jpg",
    sizes: { Small: 375, Big: 485 },
    description: "Mix leafy, watermelon, crumbled feta, black olives, mint leaves and in-house Dijon mustard thyme dressing."
  },
  {
    id: "glow-bowl",
    name: "Glow Bowl",
    category: "salads",
    type: "veg",
    image: "62.jpg",
    sizes: { Small: 395, Big: 495 },
    description: "Mix leafy, avocado, roasted beetroot, quinoa, chickpeas, radish, carrot, cranberries, crumbled feta, chia-flax seeds and in-house Dijon mustard thyme dressing."
  },
  {
    id: "creamy-pesto-paneer-keto-salad",
    name: "Creamy Pesto Paneer Keto Salad",
    category: "salads",
    type: "veg",
    image: "63.jpg",
    sizes: { Small: 335, Big: 485 },
    description: "Mix leafy, cauli rice, mushroom, grilled bell pepper, jalapeno, paneer tikka, black olive, pesto, crumbled feta, almonds and iin-house balsamic dressing."
  },
  {
    id: "smoky-bbq-paneer-salad",
    name: "Smoky BBQ Paneer Salad",
    category: "salads",
    type: "veg",
    image: "64.jpg",
    sizes: { Small: 335, Big: 485 },
    description: "Mix leafy, soba noodles, grilled bell pepper, cucumber, BBQ paneer, jalapeno, pickled onion, peanuts, mix seeds and in-house Italian balsamic dressing."
  }
];

// ================================================
// 2. ADD-ONS — 19 ITEMS
// ================================================

const addOns = [

  // ADD GOOD FATS (6)
  { id: "avocado", name: "Avocado", price: 95, category: "good-fats" },
  { id: "mozzarella-cheese", name: "Mozzarella Cheese", price: 60, category: "good-fats" },
  { id: "cheddar-cheese", name: "Cheddar Cheese", price: 60, category: "good-fats" },
  { id: "feta-cheese", name: "Feta Cheese", price: 60, category: "good-fats" },
  { id: "parmesan-cheese", name: "Parmesan Cheese", price: 60, category: "good-fats" },
  { id: "bocconcini-cheese", name: "Bocconcini Cheese", price: 60, category: "good-fats" },

  // ADD A SIDE KICK (5)
  { id: "garlic-hummus", name: "Garlic Hummus", price: 175, category: "side-kick" },
  { id: "beetroot-hummus", name: "Beetroot Hummus", price: 175, category: "side-kick" },
  { id: "wasabi-hummus", name: "Wasabi Hummus", price: 175, category: "side-kick" },
  { id: "pumpkin-hummus", name: "Pumpkin Hummus", price: 175, category: "side-kick" },
  { id: "guacamole", name: "Guacamole", price: 150, category: "side-kick" },

  // ADD ON PROTEIN (8)
  { id: "grilled-chicken", name: "Grilled Chicken (60 Gms)", price: 75, category: "protein" },
  { id: "smoked-chicken", name: "Smoked Chicken (60 Gms)", price: 100, category: "protein" },
  { id: "egg-yolk", name: "Egg With Yolk (2 Pcs)", price: 60, category: "protein" },
  { id: "grilled-paneer", name: "Grilled Paneer (60 Gms)", price: 75, category: "protein" },
  { id: "grilled-tofu", name: "Grilled Tofu (60 Gms)", price: 75, category: "protein" },
  { id: "grilled-fish", name: "Grilled Fish (60 Gms)", price: 120, category: "protein" },
  { id: "fish-finger", name: "Fish Finger (4 Pcs)", price: 120, category: "protein" },
  { id: "falafel", name: "Falafel (4 Pcs)", price: 100, category: "protein" }
];

// ================================================
// 3. CART STATE
// ================================================

let cart = [];
let activeCategory = "all";
let activeDiet = "all";

// ================================================
// 4. HELPER FUNCTIONS
// ================================================

function money(amount) {
  return "₹" + Number(amount || 0).toFixed(0);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getPrice(item, size = "") {
  if (item.sizes && size) {
    return Number(item.sizes[size] || 0);
  }
  return Number(item.price || 0);
}

function getImageHTML(item) {
  if (!item.image) {
    return `<div class="menu-image-placeholder">Freshly Prepared</div>`;
  }

  return `
    <img
      src="${escapeHTML(item.image)}"
      alt="${escapeHTML(item.name)}"
      loading="lazy"
      onerror="this.style.display='none'"
    >
  `;
}

// ================================================
// 5. MENU FILTERING
// ================================================

function getFilteredItems() {
  return menuItems.filter(item => {
    const categoryMatch =
      activeCategory === "all" ||
      item.category === activeCategory;

    const dietMatch =
      activeDiet === "all" ||
      item.type === activeDiet;

    return categoryMatch && dietMatch;
  });
}

// ================================================
// 6. DISPLAY MENU
// ================================================

function displayMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const items = getFilteredItems();

  if (!items.length) {
    grid.innerHTML = `<p class="menu-empty">No items found.</p>`;
    return;
  }

  grid.innerHTML = items.map(item => {
    const hasSizes = Boolean(item.sizes);
    const sizes = hasSizes ? Object.keys(item.sizes) : [];
    const firstSize = sizes[0] || "";
    const startingPrice = hasSizes
      ? item.sizes[firstSize]
      : item.price;

    return `
      <article class="menu-card">
        <div class="menu-card-image">
          ${getImageHTML(item)}
        </div>

        <div class="menu-card-content">
          <div class="menu-card-heading">
            <h3>${escapeHTML(item.name)}</h3>
            <span class="diet-indicator ${item.type}">
              ${item.type === "nonveg" ? "Non-Veg" : "Veg"}
            </span>
          </div>

          <p class="menu-description">
            ${escapeHTML(item.description)}
          </p>

          ${
            hasSizes
              ? `
                <select class="size-select"
                  data-size-select="${escapeHTML(item.id)}">
                  ${sizes.map(size => `
                    <option value="${escapeHTML(size)}">
                      ${escapeHTML(size)} - ${money(item.sizes[size])}
                    </option>
                  `).join("")}
                </select>
              `
              : ""
          }

          <div class="menu-card-bottom">
            <strong>
              ${hasSizes ? "From " : ""}
              ${money(startingPrice)}
            </strong>

            <button type="button" class="add-to-cart"
              data-add="${escapeHTML(item.id)}">
              Add +
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ================================================
// 7. CATEGORY FILTERS
// ================================================

function setupCategoryFilters() {
  const container =
    document.getElementById("categoryFilters") ||
    document.getElementById("menuCategories");

  if (!container) return;

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    container.querySelectorAll("[data-category]").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    displayMenu();
  });
}

// ================================================
// 8. DIET FILTERS
// ================================================

function setupDietFilters() {
  const container =
    document.getElementById("dietFilters") ||
    document.getElementById("foodFilters");

  if (!container) return;

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-diet], [data-type]");
    if (!button) return;

    activeDiet = button.dataset.diet || button.dataset.type;

    if (activeDiet === "non-veg") {
      activeDiet = "nonveg";
    }

    container.querySelectorAll("[data-diet], [data-type]").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    displayMenu();
  });
}

// ================================================
// 9. ADD ITEM TO CART
// ================================================

function addToCart(itemId, size = "") {
  alert("Product ID: " + itemId);

  const item = menuItems.find(product => product.id === itemId);

  if (!item) {
    alert("ERROR: Product not found in menuItems!");
    return;
  }

  const selectedSize = size || (
    item.sizes ? Object.keys(item.sizes)[0] : ""
  );

  const price = getPrice(item, selectedSize);

  alert("Product found! Price: ₹" + price);

  const cartId = itemId + (selectedSize ? "-" + selectedSize : "");

  const existing = cart.find(product => product.cartId === cartId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      cartId,
      id: item.id,
      name: item.name,
      price,
      size: selectedSize,
      quantity: 1
    });
  }

  alert("Cart items: " + cart.length);

  updateCart();
}
// ================================================
// 10. MENU BUTTON EVENTS
// ================================================

function setupMenuEvents() {
  const grid = document.getElementById("menuGrid");

  if (!grid) {
    alert("ERROR: menuGrid not found!");
    return;
  }

  alert("Menu event listener connected!");

  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");

    if (!button) return;

    alert("ADD BUTTON CLICK DETECTED!");

    const itemId = button.dataset.add;
    const sizeSelect = grid.querySelector(
      `[data-size-select="${itemId}"]`
    );

    addToCart(itemId, sizeSelect ? sizeSelect.value : "");
  });
}
// ================================================
// 11. DISPLAY ADD-ONS
// ================================================

function displayAddOns() {
  const container = document.getElementById("addonsGrid");
  if (!container) return;

  container.innerHTML = addOns.map(item => `
    <div class="addon-card">
      <div>
        <h4>${escapeHTML(item.name)}</h4>
        <p>${money(item.price)}</p>
      </div>

      <button type="button" data-addon="${item.id}">
        Add +
      </button>
    </div>
  `).join("");

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-addon]");
    if (!button) return;

    const addon = addOns.find(item => item.id === button.dataset.addon);
    if (!addon) return;

    const cartId = "addon-" + addon.id;
    const existing = cart.find(item => item.cartId === cartId);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        cartId,
        id: addon.id,
        name: addon.name,
        price: addon.price,
        size: "",
        quantity: 1
      });
    }

    updateCart();
    showToast(addon.name + " added to cart");
  });
}

// ================================================
// 12. CART TOTAL
// ================================================

function calculateTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function calculateQuantity() {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// ================================================
// 13. UPDATE CART
// ================================================

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  if (cartCount) {
    cartCount.textContent = calculateQuantity();
  }

  if (cartTotal) {
    cartTotal.textContent = money(calculateTotal());
  }

  if (!cartItems) return;

  if (!cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${escapeHTML(item.name)}</h4>
        ${item.size ? `<small>${escapeHTML(item.size)}</small>` : ""}
        <p>${money(item.price * item.quantity)}</p>
      </div>

      <div class="cart-item-actions">
        <button type="button" data-change="-1"
          data-id="${escapeHTML(item.cartId)}">−</button>

        <span>${item.quantity}</span>

        <button type="button" data-change="1"
          data-id="${escapeHTML(item.cartId)}">+</button>

        <button type="button" data-remove="${escapeHTML(item.cartId)}">×</button>
      </div>
    </div>
  `).join("");
}

// ================================================
// 14. CART QUANTITY / REMOVE EVENTS
// ================================================

function changeQuantity(cartId, change) {
  const item = cart.find(product => product.cartId === cartId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.cartId !== cartId);
  }

  updateCart();
}

function removeFromCart(cartId) {
  cart = cart.filter(item => item.cartId !== cartId);
  updateCart();
}

function setupCartEvents() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  container.addEventListener("click", event => {
    const changeButton = event.target.closest("[data-change]");

    if (changeButton) {
      changeQuantity(
        changeButton.dataset.id,
        Number(changeButton.dataset.change)
      );
      return;
    }

    const removeButton = event.target.closest("[data-remove]");

    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
    }
  });
}

// ================================================
// 15. OPEN / CLOSE CART
// ================================================

function openCart() {
  document.getElementById("cartPanel")?.classList.add("active");
  document.getElementById("cartOverlay")?.classList.add("active");
  document.body.classList.add("cart-open");
}

function closeCart() {
  document.getElementById("cartPanel")?.classList.remove("active");
  document.getElementById("cartOverlay")?.classList.remove("active");
  document.body.classList.remove("cart-open");
}

function setupCartOpening() {
  document.getElementById("cartButton")
    ?.addEventListener("click", openCart);

  document.getElementById("closeCart")
    ?.addEventListener("click", closeCart);

  document.getElementById("cartOverlay")
    ?.addEventListener("click", closeCart);
}

// ================================================
// 16. TOAST MESSAGE
// ================================================

function showToast(message) {
  let toast = document.getElementById("siteToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toast.hideTimer);

  toast.hideTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ================================================
// 17. WHATSAPP CHECKOUT
// ================================================

function checkoutWhatsApp() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }

  const name = document.getElementById("customerName")?.value.trim() || "";
  const phone = document.getElementById("customerPhone")?.value.trim() || "";
  const address = document.getElementById("customerAddress")?.value.trim() || "";
  const instructions = document.getElementById("orderInstructions")?.value.trim() || "";

  if (!name || !phone || !address) {
    showToast("Please complete your contact details");
    return;
  }

  let message = "Hello Over The Lettuce! I would like to place an order.\n\n";

  message += "CUSTOMER DETAILS\n";
  message += "Name: " + name + "\n";
  message += "Phone: " + phone + "\n";
  message += "Address: " + address + "\n\n";

  message += "ORDER DETAILS\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}`;

    if (item.size) message += ` (${item.size})`;

    message += ` x ${item.quantity}`;
    message += ` = ${money(item.price * item.quantity)}\n`;
  });

  message += "\nTotal: " + money(calculateTotal());

  if (instructions) {
    message += "\n\nSpecial Instructions: " + instructions;
  }

  message += "\n\nPlease confirm my order.";

  const url = "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

function setupCheckout() {
  document.getElementById("checkoutButton")
    ?.addEventListener("click", checkoutWhatsApp);
}

// ================================================
// 18. MOBILE NAVIGATION
// ================================================

function setupMobileNavigation() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
}

// ================================================
// 19. ORDER BUTTONS
// ================================================

function setupOrderButtons() {
  ["heroOrder", "bannerOrder"].forEach(id => {
    document.getElementById(id)?.addEventListener("click", () => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

// ================================================
// 20. FOOTER YEAR
// ================================================

function setFooterYear() {
  const year = document.getElementById("currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

// ================================================
// 21. INITIALIZE WEBSITE
// ================================================

function initializeWebsite() {
  displayMenu();
  displayAddOns();

  setupCategoryFilters();
  setupDietFilters();
  setupMenuEvents();

  setupCartEvents();
  setupCartOpening();
  setupCheckout();

  setupMobileNavigation();
  setupOrderButtons();

  setFooterYear();
  updateCart();

  console.log("Over The Lettuce website initialized.");
}

// ================================================
// 22. START WEBSITE
// ================================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeWebsite);
} else {
  initializeWebsite();
}
