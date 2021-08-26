const { NavLink } = ReactRouterDOM;

export class KeppNavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar-keep">
                <NavLink className="fas fa-pen" to="/keep">
                    keep
                </NavLink>
                <NavLink className="far fa-trash-alt" to="/keep/trash">
                    trash
                </NavLink>
            </div>
        );
    }
}
