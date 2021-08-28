const { NavLink } = ReactRouterDOM;

export class MailNavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-emails">
        <NavLink className="fas fa-plus nav-button compose" to="/mail/compose">
          <span>Compose</span>
        </NavLink>
        <NavLink className="fas fa-inbox nav-button " to="/mail/type/inbox">
          inbox
        </NavLink>
        <NavLink className="fas fa-star nav-button" to="/mail/type/starred">
          Starred
        </NavLink>

        <NavLink className="fas fa-share-square nav-button" to="/mail/type/sentmails">
          Sent mail
        </NavLink>

        <NavLink className="fab fa-firstdraft nav-button" to="/mail/type/draft">
          Drafts
        </NavLink>
        <NavLink className="fas fa-trash-alt" to="/mail/type/trash">
          Trash
        </NavLink>
      </div>
    );
  }
}
