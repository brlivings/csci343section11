import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/colors';

function ListItem({ id, headline, date, imageUrl }) {
  const navigation = useNavigation();

  function selectNewsHandler() {
    navigation.navigate('NewsDetail', { newsId: id });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={selectNewsHandler}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        android_ripple={{ color: '#ccc' }}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.headline} numberOfLines={3}>
            {headline}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: Colors.card,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: 'hidden',
  },
  pressable: {
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: 110,
    height: 110,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  headline: {
    fontFamily: 'merriweather-bold',
    fontSize: 15,
    color: Colors.text,
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 12,
    color: Colors.muted,
    marginTop: 6,
  },
});
