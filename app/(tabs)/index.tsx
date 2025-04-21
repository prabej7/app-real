import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { Categories, Head, Popular, Recommended } from '@/components/user/Page Component/Home';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Head />
      <Categories />
      <Popular />
      <Recommended />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 48
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
