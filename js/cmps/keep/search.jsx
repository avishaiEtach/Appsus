const { NavLink, Route } = ReactRouterDOM
import { notesService } from "../../services/notes.service.js"

export class Search extends React.Component {
    state = {
        filterBy: {
            title: '',
        }
    }

    // handelChange = (ev) => {
    //     const fileld = ev.target.name
    //     const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
    //     this.setState({ filterBy: { ...this.state.filterBy, [fileld]: value } })
    // }

    // onfilter = (ev) => {
    //     ev.preventDefault();
    //     this.props.onSetFilter(this.state.filterBy)
    // }

    render() {
        const { title } = this.state.filterBy
        return (
            <form className='fillter-app' onSubmit={this.onfilter}>
                <label htmlFor="by-name">filter by name  </label>
                <input name="title" type="text" id="by-name" placeholder="enter a name" value={title} onChange={this.handelChange} />
                <button>filter</button>
            </form>
        )
    }

}