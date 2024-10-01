import { View, Text } from "react-native";
import React from "react";

const MealInfo = ({ itemData }) => {
  return (
    <View className="flex flex-row  p-4 ">
      <Text className="p-2 bg-slate-300 m-2 rounded-md font-bold">
        {itemData.duration} min
      </Text>
      <Text className="p-2 bg-slate-300 m-2 rounded-md font-bold">
        {itemData.complexity?.toUpperCase()}
      </Text>
      <Text className="p-2 bg-slate-300 m-2 rounded-md font-bold">
        {itemData.affordability?.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealInfo;
