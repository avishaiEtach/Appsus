
import { notesService } from "././../../services/notes.service.js"
import { ColorInput } from "../keep/note-color.jsx"
export class NoteImg extends React.Component {

    state = {
        noteStyle: {}
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

    render() {
        const { noteStyle } = this.state
        const { note } = this.props
        return (
            <div className="note-img" style={noteStyle}>
                <section>
                    <img src={note.info.url} />
                </section>
                <h3>{note.info.title}</h3>
                <ColorInput onChangeStyle={this.onChangeStyle} />
                <button className="far fa-trash-alt" onClick={this.onDelete}></button>
            </div>
        )
    }
}