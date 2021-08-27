const { NavLink } = ReactRouterDOM;

export class KeepNavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar-keep">
                <NavLink className="fas fa-pen" to="/keep/aditor">
                </NavLink>
                <NavLink className="far fa-trash-alt" to="/keep/trash">
                </NavLink>
            </div>
        );
    }
}
