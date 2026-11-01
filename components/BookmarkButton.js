import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function BookmarkButton({ bookmarked, onPress, color }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={bookmarked ? 'bookmark' : 'bookmark-outline'} size={24} color={color} />
    </Pressable>
  );
}

export default BookmarkButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
