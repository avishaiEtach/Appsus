
import { ColorInput } from "../keep/note-color.jsx"
import { notesService } from "././../../services/notes.service.js"
export class NoteToDo extends React.Component {

    state = {
        noteStyle: {},
        // isDone: this.props.note

    }

    onChangeStyle = (field, value) => {
        this.setState(prevState => ({ noteStyle: { ...prevState.noteStyle, [field]: value } }))
    }


    onDelete = () => {
        if (this.props.note.id) {
            notesService.DeleteNote(this.props.note.id)
                .then(() => this.props.loadNots())
        }
    }

    ontoglee = () => {

        this.props.note.info.todos.map((todo) => {
            todo.isDone = false
            console.log(todo.isDone)
        })
    }

    render() {
        const { noteStyle } = this.state
        const { note } = this.props
        return (
            <div className="note-todo" style={noteStyle}>
                <h3>{note.info.label}</h3>
                <ul>{note.info.todos.map((todo, idx) => <li className={todo.isDone ? 'line-through' : ''} key={idx} onClick={this.ontoglee}>{todo.txt}</li>)}</ul>
                <ColorInput onChangeStyle={this.onChangeStyle} />
                <button className="far fa-trash-alt" onClick={this.onDelete}></button>
            </div>

        )
    }
}