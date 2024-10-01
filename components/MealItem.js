import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MealInfo from "./MealInfo";

const MealItem = ({ itemData }) => {
  const navigation = useNavigation();
  return (
    <View
      className="m-4 bg-slate-200 rounded-md overflow-hidden"
      style={{ elevation: 4 }}
    >
      <Pressable
        android_ripple={{ color: "gray" }}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        onPress={() => navigation.navigate("Meal", { mealID: itemData.id })}
      >
        <View>
          <Image
            source={{ uri: itemData.imageUrl }}
            className={`w-[100%] h-[200px] rounded-md `}
          />
          <Text className="m-2 font-extrabold text-xl text-center">
            {itemData.title}
          </Text>
        </View>
        <MealInfo itemData={itemData} />
      </Pressable>
    </View>
  );
};

export default MealItem;
