import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
const renderMealItem = (itemData) => {
  return <MealItem itemData={itemData} />;
};
const MealsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryID } = route.params;
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryID
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryID]);

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryID) >= 0;
  });

  return (
    <View>
      <FlatList
        data={displayMeals}
        renderItem={(itemData) => renderMealItem(itemData.item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsScreen;
