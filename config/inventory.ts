import { Image } from "sanity"

export interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "extender1",
    name: "WiBoost Wi-Fi Extender",
    image: "https://m.media-amazon.com/images/I/51v3yPrNc6L.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51v3yPrNc6L.jpg",
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 12000000,
    currency: "NGN",
    description: "WiBoost powers up your Wi-Fi, extending coverage to every corner of your space for a stronger, faster, and more reliable connection. Perfect for homes and businesses alike, it boosts signal strength to ensure smooth browsing, streaming, and gaming. The WiBoost 2000 provides powerful Wi-Fi coverage across office floors and open spaces. Engineered for high-performance in business environments, it extends your network with stability and speed, ensuring your team stays connected and productive",
    sku: "WiBoost-wifi-extender"
  },
  {
    id: "extender2",
    name: "RangeMax AC750",
    image: "https://m.media-amazon.com/images/I/51MBBrPuVtL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51MBBrPuVtL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White", "Gray"],
    price: 15500000,
    currency: "NGN",
    description: "RangeMax delivers maximum Wi-Fi range, eliminating dead zones and extending seamless coverage to every part of your home or office. Enjoy the ultimate in Wi-Fi accessibility with a product built to reach further. This is designed for commercial spaces that demand high-speed, extended-range Wi-Fi. Ideal for conference rooms and collaborative spaces, this extender ensures every corner of your business has fast, reliable coverage.",
    sku: "rangemax-ac750-wifi-extender"
  },
  {
    id: "extender3",
    name: "SignalWave RE6500",
    image: "https://m.media-amazon.com/images/I/61D7vtclcsL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61D7vtclcsL._AC_SL1500_.jpg",
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 9500000,
    currency: "NGN",
    description: "SignalWave is designed to maintain a steady, powerful signal flow throughout your space. This extender optimizes connectivity, providing fast, consistent internet for multiple devices, no matter where you are, This is the perfect solution for small-to-medium-sized businesses that need dependable internet throughout their premises. With fast, stable connectivity, this extender keeps your operations running smoothly",
    sku: "signalWave-re6500-wifi-extender"
  },
  {
    id: "extender4",
    name: "WavLinkPlus DAP-1650",
    image: "https://m.media-amazon.com/images/I/61FquVbNcOL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61FquVbNcOL._AC_SL1500_.jpg",
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 25000000,
    currency: "NGN",
    description: "The WavLinkPlus DAP-1650 is a high-performance Wi-Fi extender designed to enhance your wireless network coverage and eliminate dead zones in your home or office. With advanced dual-band technology, it provides seamless connectivity for multiple devices, ensuring a stable and fast internet experience whether you’re streaming, gaming, or working from home. This combines performance and simplicity, delivering enhanced connectivity throughout your home or office. It’s your go-to for quick, uninterrupted access to Wi-Fi, making dead zones a thing of the past",
    sku: "wav-linkplus-dap1650-wifi-extender"
  },
  {
    id: "extender5",
    name: "BoostConnect EX3700",
    image: "https://m.media-amazon.com/images/I/51EBl5QNgmL._AC_SL1200_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51EBl5QNgmL._AC_SL1200_.jpg",
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 32000000,
    currency: "NGN",
    description: "The BoostConnect EX3700 is an essential tool for businesses looking to enhance their wireless connectivity and optimize operational efficiency. In today’s fast-paced commercial landscape, reliable internet access is crucial for productivity, collaboration, and customer engagement. The EX3700 addresses these needs by providing robust Wi-Fi coverage that eliminates dead zones and ensures seamless connectivity throughout your workspace. With a coverage area of up to 1,000 square feet, the EX3700 effectively extends your existing Wi-Fi signal, ensuring that every corner of your business remains connected. The device is particularly beneficial for multi-story buildings, large open spaces, or locations with challenging layouts where maintaining a strong signal can be a challenge.",
    sku: "booost-ex3700-wifi-extender"
  },
  {
    id: "extender6",
    name: "UltraReach TRE450-1750 Wi-Fi Extender",
    image: "https://m.media-amazon.com/images/I/71vxzFprP5L._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71vxzFprP5L._AC_SL1500_.jpg",
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White", "Gray"],
    price: 55000000,
    currency: "NGN",
    description: "The UltraReach TRE450-1750 Wi-Fi Extender is designed for businesses that demand robust and reliable wireless connectivity across expansive areas. In a world where seamless internet access is a cornerstone of productivity, the TRE450-1750 ensures that your team can stay connected without interruptions, regardless of the layout of your office or the number of connected devices. With advanced dual-band technology, the TRE450-1750 operates efficiently on both 2.4GHz and 5GHz frequencies, providing speeds of up to 1750 Mbps. This makes it an ideal solution for high-demand applications such as video conferencing, cloud computing, and data-heavy operations. The extender’s ability to support multiple devices simultaneously ensures that your staff can work collaboratively and efficiently, enhancing overall business productivity. The TRE450-1750 offers extensive coverage, extending Wi-Fi signals up to 1,500 square feet. Whether your business is in a multi-story office building, a large retail space, or a warehouse, this extender effectively eliminates dead zones, allowing for reliable connectivity in every corner of your work environment",
    sku: "tplink-re450-wifi-extender"
  },
  // {
  //   id: "extender7",
  //   name: "Belkin Dual-Band AC1200 Wi-Fi Extender",
  //   image: "https://example.com/images/belkin-ac1200-main.jpg",
  //   images: [
  //     "https://example.com/images/belkin-ac1200-1.jpg",
  //     "https://example.com/images/belkin-ac1200-2.jpg",
  //     "https://example.com/images/belkin-ac1200-3.jpg"
  //   ],
  //   categories: ["Wi-Fi Extenders", "Networking"],
  //   sizes: ["One Size"],
  //   colors: ["Black"],
  //   price: 79.99,
  //   currency: "NGN",
  //   description: "Boosts your existing Wi-Fi network with dual-band speeds.",
  //   sku: "belkin-ac1200-wifi-extender"
  // },
]
