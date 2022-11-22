//food type categories
export type FoodType = "Drink" | "Main" | "Side";

export type FoodItem = {
  id: string;
  name: string;
  type: FoodType;
  ingredients: string[];
};

//an array of foodItem objects
const ALL_FOOD_DATA: FoodItem[] = [
  {
    id: "fd_01",
    name: "Yuzu Tea",
    type: "Drink",
    ingredients: ["yuzu", "syrup", "green tea"],
  },
  {
    id: "fd_02",
    name: "BBQ Pork",
    type: "Main",
    ingredients: ["BBQ sauce", "pork"],
  },
  {
    id: "fd_03",
    name: "Fried Egg",
    type: "Side",
    ingredients: ["egg", "oil"],
  },
];

//returns the food item array
export const getMenu = (): FoodItem[] => {
  return ALL_FOOD_DATA;
};

//get the food item cooresponding to the foodItem.id
export const getFoodItemByID = (ID: string): FoodItem | null => {
  const matchFoodItems = ALL_FOOD_DATA.filter(
    (foodItem: FoodItem) => foodItem.id === ID
  );
  return matchFoodItems.length > 0 ? matchFoodItems[0] : null;
};

// TODO: Implement getFoodItemByType
//filter all foodItems with the matching FoodType
export const getFoodItemByType = (type: FoodType): FoodItem[] | void => {

  const filteredFoodData = ALL_FOOD_DATA.filter((food)=> 
      //no search input field so didn't use .include() 
    food.type === type
  );
  return filteredFoodData;
};