import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Company } from './Components/pages/Company'
import { Contact } from './Components/pages/Contact'
import { Home } from './Components/pages/Home'
import { NewProject } from './Components/pages/NewProject'

function App() {


  return (
    <Router>
      <ul>
        <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo</Link>
        </div>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/company">
          <Company />
        </Route>
        <Route  path="/contact">
          <Contact />
        </Route>
        <Route  path="/newproject">
          <NewProject />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  )
}

export default App
