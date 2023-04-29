import {React} from 'react'

const ThemeSelector = React.createContext({
  selectTheme: true,
  selectThemeChoice: () => {},
})

export default ThemeSelector
