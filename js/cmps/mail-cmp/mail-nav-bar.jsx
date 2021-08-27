const { NavLink } = ReactRouterDOM;

export class MailNavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-emails">
        <NavLink className="fas fa-plus compose" to="/mail/compose">
          <span>Compose</span>
        </NavLink>
        <NavLink className="fas fa-inbox" to="/mail/inbox">
          <span>inbox</span>
        </NavLink>
        <NavLink className="fas fa-star" to="/mail/starred">
          <span>Starred</span>
        </NavLink>

        <NavLink className="fas fa-share-square" to="/mail/sentmails">
          <span>Sent mail</span>
        </NavLink>

        <NavLink className="fab fa-firstdraft" to="/mail/drafts">
          <span>Drafts</span>
        </NavLink>
        <NavLink className="fas fa-trash-alt" to="/mail/trash">
          <span> Trash</span>
        </NavLink>
      </div>
    );
  }
}
