export class MailFilter extends React.Component {
  state = {
    filterBy: {
     txt:"",
      isRead: "",
      lables: [],
      sort:""
    },
  };

  componentDidMount() {}

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    console.log(field);
    console.log(value);
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
    
    else if ((field === "sort-select") &&  ((value === 'Title' ||value === 'Date'))){
      debugger;
      this.setState(
        { filterBy: { ...this.state.filterBy, ["sort"]: value } },
        () => {
          this.props.onSetFilter(this.state.filterBy);
        }
      );
    
    }
  };

  render() 
  
  {
    console.log(this.state.filterBy);
    const {txt} = this.state.filterBy;
    return (
      <div className="filter-mail">
        <input
        className="input-field"
          name="txt"
          id="by-txt"
          type="text"
          placeholder="Search mail"
          value={txt}
          onChange={this.handleChange}
        />
          <span className="fas fa-search icon-search-span"></span>
        <select
          name="filter-select"
          id="filter-select"
          onChange={this.handleChange}
          placeholder="Filter"
        >
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>

        <select
          name="sort-select"
          id="sort-select"
          onChange={this.handleChange} >
             <option value="Sort">Sort</option>
             <option value="Title">Title</option>
          <option value="Date">Date</option>
        </select>
      </div>
    );
  }
}
