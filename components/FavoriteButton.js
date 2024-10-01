import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { favoriteMealsActions } from "../store/slices/Favorite";

const FavoriteButton = ({ current_meal }) => {
  const favorites = useSelector((state) => state.Favorites);
  const dispatch = useDispatch();
  let isAlreadyFavorite = favorites.indexOf(current_meal) >= 0;
  const [isFavorite, setFavorite] = useState(isAlreadyFavorite);
  if (isFavorite && !isAlreadyFavorite) {
    dispatch(favoriteMealsActions.addToFavorites(current_meal));
  } else if (!isFavorite && isAlreadyFavorite) {
    dispatch(favoriteMealsActions.removeFromFavorites(current_meal));
  }

  return (
    <View className="overflow-hidden">
      <Pressable
        className="mr-2 overflow-hidden"
        android_ripple={{ color: "gray" }}
      >
        <Ionicons
          name={`${isFavorite ? "heart-sharp" : "heart-outline"}`}
          size={28}
          color={"white"}
          onPress={() => setFavorite(!isFavorite)}
        />
      </Pressable>
    </View>
  );
};

export default FavoriteButton;
