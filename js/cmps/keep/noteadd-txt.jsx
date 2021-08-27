const { NavLink, Route } = ReactRouterDOM
import { notesService } from "../../services/notes.service.js"

export class AddNoteTxt extends React.Component {
    state = {
        info: {
            txt: '',
            url: '',
            label: '',
            todo: '',
            todos: [],
        },

        type: 'txt',

    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ info: { ...prevState.info, [field]: value } }))
    }

    onSaveNote = (ev) => {
        ev.preventDefault()
        notesService.addNote(this.state.info.txt, this.state.info.url, this.state.type, this.state.info.label, this.state.info.todos)
            .then(() => this.setState({ info: { txt: '', url: '', label: '', todos: [] } }, () => this.props.loadNots()))
    }

    onSaveType = ({ target }) => {
        console.log(target)
        if (target.name === 'txt') {
            this.setState(() => ({ type: 'txt' }))
        } else if (target.name === 'img') {
            this.setState(() => ({ type: 'img' }))
        } else {
            this.setState(() => ({ type: 'todos' }))
        }


    }

    addTodo = () => {
        this.state.info.todos.push({ txt: this.state.info.todo, isDone: false })
    }








    render() {
        const { txt, url, label, todo } = this.state.info;

        return (
            <section className="note-Add">
                <h1>Add Note</h1>
                <form className='add-txt-note' onSubmit={this.onSaveNote}  >
                    <label htmlFor="by-name">txt</label>
                    <input name="txt" type="text" id="by-name" placeholder="enter a txt" value={txt} onChange={this.handleChange} />
                    <button type="button" className="fas fa-font" name='txt' onClick={this.onSaveType}></button>
                    <input name="url" type="text" id="by-url" placeholder="enter a url" value={url} onChange={this.handleChange} />
                    <button name='img' type="button" className="far fa-images" onClick={this.onSaveType}></button>
                    <input name="label" type="text" id="by-todo" placeholder="enter a label" value={label} onChange={this.handleChange} />
                    <input name="todo" type="text" id="by-todo" placeholder="enter a todo" value={todo} onChange={this.handleChange} />
                    <button name='todos' type="button" className="fas fa-list" onClick={this.onSaveType}></button>
                    <button type="button" onClick={this.addTodo}>add todo</button>
                    <button type="submit">+</button>
                </form>
            </section>
        )
    }

}
