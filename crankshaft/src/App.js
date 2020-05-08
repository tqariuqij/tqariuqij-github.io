import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Navbar} from './components/Navbar';
import {Home} from './Home';
import {Footer} from './components/footer/Footer';
import {About} from './Pages/About';
// import RenderVideoPage from './Pages/'
// import RenderSearchPage from './Pages/'
// import PageNotFound from './Pages/'
// import history from './history'

class App extends Component {
  render() {
  return ( 
    <React.Fragment>
      <Router >
       <Navbar />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/Pages/About" component={About} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  )
}
}
export default App;