import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ThemeSelector from './context/ThemeSelector'
import ProtectedRouter from './components/ProtectedRouter'
import VideoCardItemDetails from './components/VideoCardItemDetails'
import './App.css'

// Replace your code here
class App extends Component {
  state = {selectTheme: true}

  selectThemeChoice = () => {
    this.setState(prevState => ({selectTheme: !prevState.selectTheme}))
  }

  render() {
    const {selectTheme} = this.state
    return (
      <ThemeSelector.Provider
        value={{selectTheme, selectThemeChoice: this.selectThemeChoice}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRouter exact path="/" component={Home} />
          <ProtectedRouter
            exact
            path="/videos/:id"
            component={VideoCardItemDetails}
          />
        </Switch>
      </ThemeSelector.Provider>
    )
  }
}

export default App
