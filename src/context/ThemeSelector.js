import React from 'react'

const ThemeSelector = React.createContext({
  selectTheme: true,
  saveVideosList: [],
  selectThemeChoice: () => {},
  savedListDetails: () => {},
  removedItemToList: () => {},
})

export default ThemeSelector
