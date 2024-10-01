import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";
const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.Favorites);
  console.log(favorites);
  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={(itemData) => <MealItem itemData={itemData.item} />}
        keyExtractor={(itemData) => itemData.id}
      />
    </View>
  );
};

export default FavoritesScreen;
