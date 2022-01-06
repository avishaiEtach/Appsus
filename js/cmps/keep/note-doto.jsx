
import { ColorInput } from "../keep/note-color.jsx"
import { notesService } from "././../../services/notes.service.js"
export class NoteToDo extends React.Component {

    state = {
        noteStyle: {},
        todos: this.props.note.info.todos,
        isActive: false,
        note: this.props.note
    }

    onCopy = () => {
        notesService.addNote('', '', 'dotoCopy', this.props.note.info.todos, this.props.note.info.label)
            .then(() => this.props.loadNots())
    }

    toggleBox = () => {
        this.setState(prevState => ({ isActive: !prevState.isActive }));
    };


    onChangeStyle = (field, value) => {
        this.setState(prevState => ({ noteStyle: { ...prevState.noteStyle, [field]: value } }))
    }


    onDelete = () => {
        if (this.props.note.id) {
            notesService.DeleteNote(this.props.note.id)
                .then(() => this.props.loadNots())
        }
    }
    changePin = () => {
        let note = this.state.note
        note.isPinned = !note.isPinned
        this.setState({ note });
        notesService._saveNoteToStorage()
        if (note.isPinned) {
            notesService.addPinned(note)
                .then(() => this.props.loadNots())
        } else {
            notesService.revrstPin(note)
                .then(() => this.props.loadNots())
        }
    }

    ontoglee = (idx) => {
        let todos = [...this.state.todos];
        let doto = { ...todos[idx] };
        doto.isDone = !doto.isDone;
        todos[idx] = doto;
        this.setState({ todos });
    }

    render() {
        const { noteStyle, todos, isActive } = this.state
        const { note } = this.props
        return (
            <div className="note-todo" style={noteStyle}>
                <img onClick={this.changePin} src={note.isPinned ? './assets/img/thumbtack.svg' : './assets/img/thumbtack-clear.svg'} alt="" />
                <h3>{note.info.label}</h3>
                <ul>{todos.map((todo, idx) => <li className={todo.isDone ? 'line-through' : ''} key={idx} onClick={() => this.ontoglee(idx)}>{todo.txt}</li>)}</ul>
                <section className="note-nav">
                    <button className="far fa-trash-alt" onClick={this.onDelete}></button>
                    <ColorInput isActive={isActive} onChangeStyle={this.onChangeStyle} />
                    <i onClick={this.toggleBox} className="fas fa-palette" ></i>
                    <button className="far fa-copy" onClick={this.onCopy}></button>
                </section>
            </div>

        )
    }
}
