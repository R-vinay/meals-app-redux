import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

//rnfe

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (item) => {
    function handleNavigate() {
      navigation.navigate("Meals");
    }
    return (
      <CategoryGridTile
        id={item.id}
        title={item.title}
        color={item.color}
        onPress={handleNavigate}
      />
    );
  };
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1">
        <FlatList
          data={CATEGORIES}
          renderItem={(items) => renderCategoryItem(items.item)}
          keyExtractor={(item) => {
            item.id;
          }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
