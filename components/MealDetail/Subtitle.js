import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: '#af5f59',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
