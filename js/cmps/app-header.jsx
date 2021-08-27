const { NavLink, withRouter } = ReactRouterDOM


class _AppHeader extends React.Component {

  render() {
    return <section className="app-header-static">
      <h1><img src="../../../assets/img/icon.png" alt="" /> Appsus</h1>
      <nav className="app-nav">
        <NavLink exact to="/" >Home</NavLink>
        < NavLink to="/mail" >Mail</NavLink>
        <NavLink to="/about" >about</NavLink>
        <NavLink to="/keep/aditor" >Keep</NavLink>
        <NavLink to="/bookshop" >Books shop</NavLink>
      </nav>
    </section>;
  }
}

export const AppHeader = withRouter(_AppHeader);