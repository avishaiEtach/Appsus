const { NavLink } = ReactRouterDOM;

export class MailNavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-emails">
        <NavLink className="fas fa-plus compose" to="/mail/compose">
          Compose
        </NavLink>
        <NavLink className="fas fa-inbox" to="/mail/type/inbox">
          inbox
        </NavLink>
        <NavLink className="fas fa-star" to="/mail/type/starred">
          Starred
        </NavLink>

        <NavLink className="fas fa-share-square" to="/mail/type/sentmails">
          Sent mail
        </NavLink>

        <NavLink className="fab fa-firstdraft" to="/mail/type/draft">
          Drafts
        </NavLink>
        <NavLink className="fas fa-trash-alt" to="/mail/type/trash">
          Trash
        </NavLink>
      </div>
    );
  }
}
