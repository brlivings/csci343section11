# News App - Section 11

Brennan Livingston
CSCI 343

News app built with React Native and Expo. It has US News, World News and Sports News tabs, a Bookmarked News screen in the drawer, and a News Detail screen.

This week I added app wide state with the Context API so bookmarks work. The context and provider are in `store/context/bookmarks-context.js`. App.js wraps everything in the provider, the detail screen uses it to fill in or clear the bookmark icon, and the Bookmarked News screen lists everything saved (or shows a message if nothing is saved yet).

## Navigation
- Stack (top level): Drawer, NewsDetail
- Drawer: NewsTabs (bottom tabs), Bookmarks
- Tabs: US News, World News, Sports News

## Folders
- `components` - List, ListItem, BookmarkButton
- `constants` - colors
- `data` - dummy data (images load from web links)
- `models` - News model
- `screens` - all screens
- `store/context` - bookmarks context
- `docs` - app mockup

## Running it
```
npm install
npx expo start
```
