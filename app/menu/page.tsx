"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SimpleDivider } from "@/components/shared/SimpleDivider";
import type { MenuItem, MenuCategory } from "@/types";
import { useUIStore } from "@/lib/store";

const ease = [0.16, 1, 0.3, 1] as const;

const menuData: MenuCategory[] = [
  {
    id: "malay",
    label: "Malay",
    items: [
      {
        name: "Ayam Kampung Panggang",
        description:
          "Heritage free-range chicken marinated in pandan leaf, turmeric and toasted coconut, slow-roasted over charcoal.",
        price: "RM 68",
        isRecommended: true,
      },
      {
        name: "Rendang Daging Wagyu",
        description:
          "Wagyu beef slow-cooked in kerisik coconut and aromatic spice paste until the sauce dries and clings — an act of patience.",
        price: "RM 98",
        isRecommended: true,
      },
      {
        name: "Nasi Ulam Dengan Ikan Bakar",
        description:
          "Herb-flecked rice with flame-charred mackerel, ulam greens and a house-made sambal belacan.",
        price: "RM 52",
      },
      {
        name: "Sayur Lodeh",
        description:
          "Seasonal vegetables in a fragrant lemongrass and fresh coconut broth — light, restorative, and whole.",
        price: "RM 38",
      },
      {
        name: "Kerabu Daging",
        description:
          "Poached beef salad with torch ginger flower, toasted coconut, calamansi and fresh herbs.",
        price: "RM 55",
      },
    ],
  },
  {
    id: "chinese",
    label: "Chinese",
    items: [
      {
        name: "Ikan Kukus Halia",
        description:
          "Steamed whole sea bass with fresh ginger, spring onion and a light superior soy dressing — clarity on a plate.",
        price: "RM 72",
        isRecommended: true,
      },
      {
        name: "Sotong Goreng Mentega",
        description:
          "Wok-tossed squid with salted egg butter, fresh curry leaf and bird's eye chilli.",
        price: "RM 65",
      },
      {
        name: "Tahu Claypot",
        description:
          "Silken tofu braised in a housemade fermented bean sauce with shiitake and oyster mushrooms.",
        price: "RM 42",
      },
      {
        name: "Kangkung Belacan",
        description:
          "Wok-fried water spinach with house-ground sambal belacan — simple, honest, and precisely executed.",
        price: "RM 35",
      },
      {
        name: "Itik Tim",
        description:
          "Slow-simmered duck with salted vegetable, preserved plum and fresh ginger — a dish of considered restraint.",
        price: "RM 78",
      },
    ],
  },
  {
    id: "indian",
    label: "Indian",
    items: [
      {
        name: "Kambing Korma Lambat",
        description:
          "Slow-braised lamb shoulder in cardamom, rose petal and caramelised onion sauce with hand-rolled roti.",
        price: "RM 88",
        isRecommended: true,
      },
      {
        name: "Udang Tandoor",
        description:
          "Tiger prawns marinated in turmeric yogurt, then finished in the tandoor — served with mint chutney.",
        price: "RM 78",
      },
      {
        name: "Dhal Makhani Herba",
        description:
          "Black lentil and kidney bean curry with wild curry leaf, ghee and a slow overnight cook.",
        price: "RM 45",
      },
      {
        name: "Roti Canai Whole-Grain",
        description:
          "Housemade whole-grain flatbread, served with dhal and a selection of house pickle.",
        price: "RM 22",
      },
      {
        name: "Thali Wellness",
        description:
          "A curated selection of three curries, rice, dhal, roti and pickle — a full expression of the Indian table.",
        price: "RM 92",
        isRecommended: true,
      },
    ],
  },
  {
    id: "herbal",
    label: "Light & Herbal",
    items: [
      {
        name: "Sup Ulam",
        description:
          "A clear herbal broth of seasonal ulam greens, silken tofu and lemongrass — light, restorative, quietly complex.",
        price: "RM 32",
        isRecommended: true,
      },
      {
        name: "Kerabu Buah",
        description:
          "Seasonal tropical fruit with bunga kantan dressing, toasted coconut and a tamarind-palm sugar glaze.",
        price: "RM 38",
      },
      {
        name: "Salad Tempe",
        description:
          "Fermented soybean with local garden leaves, edamame and a tamarind-chilli vinaigrette.",
        price: "RM 35",
      },
      {
        name: "Congee Pandan",
        description:
          "Pandan-infused rice congee with pickled ginger, century egg and a light sesame oil finish.",
        price: "RM 42",
      },
      {
        name: "Ikan Pepes",
        description:
          "Mackerel steamed in a banana leaf parcel with laksa leaf, turmeric and fresh chilli.",
        price: "RM 55",
        isRecommended: true,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Cendol Sutera",
        description:
          "Rose milk jelly with pandan cendol, fresh coconut cream and dark gula melaka — the most beloved of endings.",
        price: "RM 28",
        isRecommended: true,
      },
      {
        name: "Bubur Cha Cha Kelapa",
        description:
          "Sweet potato, yam and banana in fresh coconut cream with pandan leaf — gentle and warming.",
        price: "RM 26",
      },
      {
        name: "Pisang Foster Malaysia",
        description:
          "Local banana in palm sugar toffee with a scoop of vanilla bean gelato.",
        price: "RM 32",
      },
      {
        name: "Sagu Gula Melaka",
        description:
          "Sago pearls with gula melaka syrup and rich coconut cream — simple perfection.",
        price: "RM 24",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    items: [
      {
        name: "Teh Halia Serai",
        description:
          "Fresh ginger and lemongrass tea, sweetened with raw honey.",
        price: "RM 16",
      },
      {
        name: "Bandung Roselle",
        description:
          "House-brewed roselle hibiscus with fresh calamansi and a touch of soda.",
        price: "RM 18",
      },
      {
        name: "Jus Ulam Hijau",
        description:
          "Blended green herb juice with cucumber, pineapple and a squeeze of calamansi.",
        price: "RM 20",
        isRecommended: true,
      },
      {
        name: "Teh Tarik Susu Oat",
        description:
          "Housemade oat milk pulled tea — creamy, fragrant, and sustaining.",
        price: "RM 16",
      },
      {
        name: "Air Pegaga",
        description:
          "Centella asiatica (pegaga) juice, known for its calming properties — lightly sweetened with honey.",
        price: "RM 18",
        isRecommended: true,
      },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-5 border-b border-ketuhar-charcoal/8 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-display text-lg font-medium text-ketuhar-charcoal">
            {item.name}
          </h3>
          {item.isRecommended && (
            <Badge className="bg-ketuhar-gold text-white text-[0.58rem] tracking-[0.12em] uppercase border-0 rounded-none px-2 py-0 h-4">
              Chef's
            </Badge>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground font-body leading-relaxed">
          {item.description}
        </p>
      </div>
      <p className="font-display text-base text-ketuhar-clay font-medium whitespace-nowrap">
        {item.price}
      </p>
    </div>
  );
}

export default function MenuPage() {
  const {cartItems, addToCart, updateQuantity} = useUIStore();
  return (
    <div className="min-h-screen bg-ketuhar-cream pt-24 pb-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        <FadeReveal>
          <SectionHeading
            label="The Menu"
            heading="Chosen with care"
            subheading="Our menu draws from the breadth of Malaysia's culinary heritage — Malay, Chinese and Indian traditions, held to the same standard of ingredient quality and kitchen craft. Dish names are placeholder pending client confirmation."
          />
        </FadeReveal>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="malay">
          <div className="sticky top-16 lg:top-20 z-30 bg-ketuhar-cream/95 backdrop-blur-sm py-3 -mx-4 px-4 sm:-mx-6 sm:px-6">
            <TabsList
              variant="line"
              className="flex flex-wrap gap-1 h-auto w-full bg-transparent"
            >
              {menuData.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="font-body text-xs tracking-[0.15em] uppercase rounded-none border-0 data-active:text-ketuhar-clay data-active:after:bg-ketuhar-clay"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <SimpleDivider className="mb-8" />

          {menuData.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                {cat.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Dietary note */}
        <div className="mt-14 p-6 bg-white rounded-sm border border-ketuhar-charcoal/8">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-ketuhar-clay font-body mb-2">
            Dietary Notes
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            We are pleased to accommodate dietary requirements including
            vegetarian, vegan, gluten-free, and wellness-specific needs. Please
            inform your server or note your requirements when reserving. All
            dishes are subject to seasonal availability.
          </p>
        </div>
      </div>
    </div>
  );
}
