import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGirdTile";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen() {

  const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
