import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const CategoryGridTile = ({ id, title, color, onPress }) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    tile: {
      backgroundColor: color,
      elevation: 4,
    },
  });

  return (
    <View className="rounded-md overflow-hidden">
      <Pressable
        className="flex-1 m-4 h-[150px] w-[150px] items-center align-middle rounded-md"
        style={styles.tile}
        android_ripple={{ color: "gray" }}
        onPress={() => navigation.navigate("Meals", { categoryID: id })}
      >
        <View className={`flex-1 mt-[60px]`}>
          <Text className="text-xl font-bold text-slate-100">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
