export class MailFilter extends React.Component {
  state = {
    filterBy: {
     txt:"",
      isRead: "",
      lables: [],
    },
  };

  componentDidMount() {}

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    if (field === "filter-select") {
      if (value === "Unread") 
      this.setState(
        { filterBy: { ...this.state.filterBy, ["isRead"]: false } },
        () => {
          this.props.onSetFilter(this.state.filterBy);
        }
      );
      else if (value === "Read") 
      this.setState(
        { filterBy: { ...this.state.filterBy, ["isRead"]: true } },
        () => {
          this.props.onSetFilter(this.state.filterBy);
        }
      );
      else if (value === "All")
      this.setState(
        { filterBy: { ...this.state.filterBy, ["isRead"]: "" } },
        () => {
          this.props.onSetFilter(this.state.filterBy);
        }
      );

    } 
    else
      this.setState(
        { filterBy: { ...this.state.filterBy, [field]: value } },
        () => {
          this.props.onSetFilter(this.state.filterBy);
        }
      );
 
  };

  render() 
  {
    console.log(this.state.filterBy);
    const {txt} = this.state.filterBy;
    return (
      <div className="filter-mail">
        <label className="fas fa-search" htmlFor="by-txt"></label>
        <input
          name="txt"
          id="by-txt"
          type="search"
          placeholder="Search mail"
          value={txt}
          onChange={this.handleChange}
        />

        <select
          name="filter-select"
          id="filter-select"
          onChange={this.handleChange}
        >
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>
      </div>
    );
  }
}
