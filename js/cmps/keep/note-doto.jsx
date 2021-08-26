
import { ColorInput } from "../keep/note-color.jsx"
export class NoteToDo extends React.Component {

    state = {
        noteStyle: {}
    }

    onChangeStyle = (field, value) => {
        this.setState(prevState => ({ noteStyle: { ...prevState.noteStyle, [field]: value } }))
    }
    render() {
        const { noteStyle } = this.state
        const { note } = this.props
        return (
            <div className="note-todo" style={noteStyle}>
                <h3>{note.info.label}</h3>
                <ul>{note.info.todos.map((todo, idx) => <li key={idx}>{todo.txt}</li>)}</ul>
                <ColorInput onChangeStyle={this.onChangeStyle} />
            </div>
        )
    }
}