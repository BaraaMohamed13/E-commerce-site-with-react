//Initial State Of Products
const products = [
  {
    id: 1,
    name: "Samsung Galaxy A30S",
    category: "Phone",
    description:
      "riple Camera, Dual SIM GSM Unlocked A307G/DS - US + Global 4G LTE International Model (64GB + 64GB SD + Case Bundle) (White)",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61TqiNJvIFL._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/316LkkE-BmL._AC_SR38.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/31gAy0oBEeL._AC_SR38.jpg",
    ],
    price: "249.99",
    colors: ["gray", "black", "red"],
  },
  {
    id: 2,

    name: "Apple AirPods Pro",
    category: "HeadPhone",
    description:
      "Active noise cancellation for immersive soun and Transparency mode for hearing and connecting with the world around you",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71eGsUPZm2L._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71lj9Fdeq0L._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71zLI-DaR7L._AC_SX679_.jpg",
    ],
    price: "229.99",
    colors: ["gray", "black"],
  },
  {
    id: 3,

    name: "Apple Watch Series 5",
    category: "Watch",
    description: "(GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71mbZF8PT1L._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/711JTvQBFFL._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71vZCD5ROlL._AC_SX679_.jpg",
    ],
    price: "429.99",
    colors: ["gray", "black", "pink"],
  },
  {
    id: 4,

    name: "JBL Xtreme 2",
    category: "HeadPhone",
    description: "Waterproof Portable Bluetooth Speaker - Blue",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81kAa5OtH9L._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81da94d3V8L._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81kpWC2D0%2BL._AC_SX522_.jpg",
    ],
    price: "349.99",
    colors: ["blue", "Squad Camo", "red"],
  },
  {
    id: 5,
    name: "Redragon M801 PC Gaming Mouse",
    category: "Mouse",
    description:
      "LED RGB Backlit MMO 9 Programmable Buttons Mouse with Macro Recording Side Buttons Rapid Fire Button for Windows Computer Gamer (Wireless, Black)",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/611jbF%2BFbbL._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71i18Q9QooL._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71eB5oMsu-L._AC_SX522_.jpg",
    ],
    price: "49.99",
    colors: ["black"],
  },
  {
    id: 6,
    name: "Samsung Galaxy S22 Ultra",
    category: "Phone",
    description:
      "SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Burgundy",
    images: [
      "https://m.media-amazon.com/images/I/71z3-rMcHrL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71Wkk4n9olL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71A17GVsu+L._AC_SL1500_.jpg",
    ],
    price: "999.99",
    colors: ["black"],
  },
  {
    id: 7,
    name: "SAMSUNG Galaxy Watch 4 44mm",
    category: "Watch",
    description:
      "SAMSUNG Galaxy Watch 4 44mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycles, GPS Fall Detection, Bluetooth, US Version, Black",
    images: [
      "https://m.media-amazon.com/images/I/61Jm8NXNc5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/518qJYhUowL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81gckCpePZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61L5NbozMEL._AC_SX679_.jpg",
    ],
    price: "199.99",
    colors: ["black" , "Grey", "pink"],
  },
  {
    id: 8,
    category: "Laptop",
    name: "Laptop Lenovo Legion 5 Gaming, 15.6",
    description:
      "Lenovo Legion 5 Gaming Laptop, 15.6 FHD Display, AMD Ryzen 7 5800H, 16GB RAM, 512GB Storage, NVIDIA GeForce RTX 3050Ti, Windows 10H, Phantom Blue",
    images: [
      "https://m.media-amazon.com/images/I/71fzx0pGY5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81V0JNUurbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71VyHTUdrxL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/814GxhunmDL._AC_SX679_.jpg",
    ],
    price: "1,059",
    colors: ["black" , "Grey"],
  },
  {
    id: 9,
    name: "Lenovo Legion 7 Gaming Laptop, 17.3",
    category: "laptop",
    description:
      "Lenovo Legion 7 Gaming Laptop, 17.3 Full HD Display, AMD Ryzen 5 5600H Processor, NVIDIA GeForce GTX 1650, 32GB RAM, 2TB SSD, Backlit Keyboard, Webcam, Wi-Fi 6, Windows 11 Home, Black",
    images: [
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71A2ZrFjX9L._AC_UY327_FMwebp_QL65_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61oLXtrx2wL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41DhinMCVZL._AC_SX679_.jpg",
    ],
    price: "1,119.00",
    colors: ["black"],
  },
  {
    id: 10,
    name: "Samsung Galaxy Buds Pro",
    category: "HeadPhone",
    description:
      "Samsung Galaxy Buds Pro, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Phantom Black (International Version)",
    images: [
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51TkK-s68qS._AC_UY327_FMwebp_QL65_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41yQ1vOzW+S._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51WsktStCNS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51tjYpB29DS._AC_SX466_.jpg",
    ],
    price: "127.00",
    colors: ["black", "Violet", "grey"],
  },
  {
    id: 11,
    category: "Mouse",
    name: "Logitech G502 Lightspeed Wireless Gaming Mouse",
    description:
      "Logitech G502 Lightspeed Wireless Gaming Mouse with Hero 25K Sensor, PowerPlay Compatible, Tunable Weights and Lightsync RGB",
    images: [
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/718b9wK3eaL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71yTJ6Ut+OL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71A+8GTqEKL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71xq8b-S9tL._AC_SX466_.jpg",
    ],
    price: "125.00",
    colors: ["black"],
  },
  {
    id: 12,
    name: "Logitech G432 Wired Gaming Headset",
    category: "HeadPhone",
    description:
      "Logitech G432 Wired Gaming Headset, 7.1 Surround Sound, DTS Headphone:X 2.0, Flip-to-Mute Mic, PC (Leatherette) Black/Blue",
    images: [
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61j6ey6mBpL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61YJqaIapKS._AC_SX466_.jpg ",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61UDXgldJ-S._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51EvB+UQu7L._AC_SX466_.jpg",
    ],
    price: "40.00",
    colors: ["Blue", "Red"],
  },


];

function productsReducer(state = { products, product: undefined }, action) {
  switch (action.type) {
    case "PRODUCT_BY_ID":
      return {
        ...state,
        product: state.products.find((p) => p.id === action.payload),
      };

    default:
      return state;
  }
}

export default productsReducer;
