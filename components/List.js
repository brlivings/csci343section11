import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';
import { NEWS } from '../data/dummy-data';

// pass a category to show that category, or pass items directly (used by bookmarks)
function List({ category, items }) {
  const newsItems = items ? items : NEWS.filter((news) => news.category === category);

  function renderNewsItem(itemData) {
    const item = itemData.item;
    return (
      <ListItem
        id={item.id}
        headline={item.headline}
        date={item.date}
        imageUrl={item.imageUrl}
      />
    );
  }

  return (
    <FlatList
      data={newsItems}
      keyExtractor={(item) => item.id}
      renderItem={renderNewsItem}
      contentContainerStyle={styles.list}
    />
  );
}

export default List;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
  },
});
