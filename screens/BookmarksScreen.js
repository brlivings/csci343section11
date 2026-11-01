import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import List from '../components/List';
import Colors from '../constants/colors';
import { NEWS } from '../data/dummy-data';
import { BookmarksContext } from '../store/context/bookmarks-context';

function BookmarksScreen() {
  const bookmarksCtx = useContext(BookmarksContext);

  const bookmarkedNews = NEWS.filter((news) => bookmarksCtx.ids.includes(news.id));

  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="bookmark-outline" size={48} color={Colors.muted} />
        <Text style={styles.emptyTitle}>No bookmarks yet</Text>
        <Text style={styles.emptyText}>
          Tap the bookmark icon on any story and it will show up here.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <List items={bookmarkedNews} />
    </View>
  );
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: Colors.background,
  },
  emptyTitle: {
    fontFamily: 'merriweather-bold',
    fontSize: 20,
    color: Colors.primary,
    marginTop: 12,
  },
  emptyText: {
    fontFamily: 'open-sans',
    fontSize: 15,
    color: Colors.muted,
    textAlign: 'center',
    marginTop: 8,
  },
});
