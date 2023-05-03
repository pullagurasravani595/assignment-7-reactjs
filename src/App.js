import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ThemeSelector from './context/ThemeSelector'
import ProtectedRouter from './components/ProtectedRouter'
import VideoCardItemDetails from './components/VideoCardItemDetails'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import './App.css'

// Replace your code here
class App extends Component {
  state = {selectTheme: true, saveVideosList: []}

  selectThemeChoice = () => {
    this.setState(prevState => ({selectTheme: !prevState.selectTheme}))
  }

  savedListDetails = videoItem => {
    this.setState(prevState => ({
      saveVideosList: [...prevState.saveVideosList, videoItem],
    }))
  }

  render() {
    const {selectTheme, saveVideosList} = this.state
    console.log(saveVideosList)
    return (
      <ThemeSelector.Provider
        value={{
          selectTheme,
          saveVideosList,
          selectThemeChoice: this.selectThemeChoice,
          savedListDetails: this.savedListDetails,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRouter exact path="/" component={Home} />
          <ProtectedRouter
            exact
            path="/videos/:id"
            component={VideoCardItemDetails}
          />
          <ProtectedRouter exact path="/trending" component={Trending} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeSelector.Provider>
    )
  }
}

export default App
