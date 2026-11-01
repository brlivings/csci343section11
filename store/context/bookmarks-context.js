import { createContext, useState } from 'react';

export const BookmarksContext = createContext({
  ids: [],
  addBookmark: (id) => {},
  removeBookmark: (id) => {},
});

function BookmarksContextProvider({ children }) {
  const [bookmarkIds, setBookmarkIds] = useState([]);

  function addBookmark(id) {
    setBookmarkIds((currentIds) => [...currentIds, id]);
  }

  function removeBookmark(id) {
    setBookmarkIds((currentIds) => currentIds.filter((newsId) => newsId !== id));
  }

  const value = {
    ids: bookmarkIds,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
