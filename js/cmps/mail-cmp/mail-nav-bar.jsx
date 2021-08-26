const { NavLink } = ReactRouterDOM;

export class MailNavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-emails">
        <NavLink className="fas fa-plus compose" to="/mail/compose">
          Compose
        </NavLink>
        <NavLink className="fas fa-inbox" to="/mail/inbox">
          inbox
        </NavLink>
        <NavLink className="fas fa-star" to="/mail/starred">
          Starred
        </NavLink>

        <NavLink className="fas fa-share-square" to="/mail/sentmails">
          Sent mail
        </NavLink>

        <NavLink className="fab fa-firstdraft" to="/mail/drafts">
          Drafts
        </NavLink>
        <NavLink className="fas fa-trash-alt" to="/mail/trash">
          Trash
        </NavLink>
      </div>
    );
  }
}
