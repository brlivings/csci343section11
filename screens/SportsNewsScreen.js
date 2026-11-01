import { View, StyleSheet } from 'react-native';

import List from '../components/List';
import Colors from '../constants/colors';

function SportsNewsScreen() {
  return (
    <View style={styles.screen}>
      <List category="sports" />
    </View>
  );
}

export default SportsNewsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
