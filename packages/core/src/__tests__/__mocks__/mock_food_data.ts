export type Food = {
  id: number;
  name: string;
  category: string;
  priceRange: string;
};
export const mockFoodData: Food[] = [
  {
    id: 554,
    name: "Onion Rings",
    category: "Side",
    priceRange: "low",
  },
  {
    id: 145,
    name: "Pizza",
    category: "Main Dish",
    priceRange: "high",
  },
  {
    id: 423,
    name: "Risotto",
    category: "Main Dish",
    priceRange: "high",
  },
  {
    id: 642,
    name: "Ice Cream",
    category: "Dessert",
    priceRange: "medium",
  },
  {
    id: 463,
    name: "Fries",
    category: "Side",
    priceRange: "low",
  },
  {
    id: 724,
    name: "Churros",
    category: "Dessert",
    priceRange: "medium",
  },
];
