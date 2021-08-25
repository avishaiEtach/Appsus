const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './cmps/app-header.jsx'
import { AppHome } from './pages/app-home.jsx'
import { AppAbout } from './pages/app-about.jsx'
import { AppKeep } from './pages/app-keep.jsx'
import { AppMail } from './pages/app-mail.jsx'
export function App() {
  return (
    <Router>
      <header>
        <AppHeader/>
      </header>
      <main>
        <Switch>
           <Route path="/about" component={AppAbout} /> 
          <Route path="/mail" component={AppMail} />
          <Route path="/keep" component={AppKeep} />
          <Route path="/" component={AppHome} />
        </Switch>
      </main>
    </Router>
  );
}
