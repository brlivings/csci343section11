import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import BookmarkButton from '../components/BookmarkButton';
import Colors from '../constants/colors';
import { NEWS } from '../data/dummy-data';
import { BookmarksContext } from '../store/context/bookmarks-context';

function NewsDetailScreen({ route, navigation }) {
  const bookmarksCtx = useContext(BookmarksContext);

  const newsId = route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const isBookmarked = bookmarksCtx.ids.includes(newsId);

  function changeBookmarkHandler() {
    if (isBookmarked) {
      bookmarksCtx.removeBookmark(newsId);
    } else {
      bookmarksCtx.addBookmark(newsId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <BookmarkButton
          bookmarked={isBookmarked}
          onPress={changeBookmarkHandler}
          color="white"
        />
      ),
    });
  }, [navigation, isBookmarked]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedNews.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.agency}>{selectedNews.agency.toUpperCase()}</Text>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>By {selectedNews.author}</Text>
          <Text style={styles.meta}>{selectedNews.date}</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: 240,
  },
  content: {
    padding: 18,
  },
  agency: {
    fontFamily: 'open-sans-bold',
    fontSize: 13,
    color: Colors.accent,
    letterSpacing: 1,
  },
  headline: {
    fontFamily: 'merriweather-bold',
    fontSize: 22,
    color: Colors.text,
    marginTop: 6,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  meta: {
    fontFamily: 'open-sans',
    fontSize: 13,
    color: Colors.muted,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 14,
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 16,
    lineHeight: 25,
    color: Colors.text,
  },
});
