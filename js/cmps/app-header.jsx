const { NavLink, withRouter } = ReactRouterDOM


class _AppHeader extends React.Component {

  render() {
    return <section className="app-header-static">
      <h1> <img src="../../../assets/img/icon.png" alt="" /> apsus</h1>
      <nav>
        <NavLink exact to="/" >Home</NavLink>
        < NavLink to="/mail/type/inbox" >Mail</NavLink>
        <NavLink to="/about" >about</NavLink>
        <NavLink to="/keep/aditor" >Keep</NavLink>
        <NavLink to="/bookshop" >Books shop</NavLink>
      </nav>
    </section>;
  }
}

export const AppHeader = withRouter(_AppHeader);