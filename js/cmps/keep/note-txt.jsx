
import { ColorInput } from "../keep/note-color.jsx"
import { notesService } from "././../../services/notes.service.js"
export class NoteTxt extends React.Component {

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
            <div className="note-txt" style={noteStyle}>
                <p>{note.info.txt}</p>
                <ColorInput onChangeStyle={this.onChangeStyle} />
                <button className="far fa-trash-alt" onClick={this.onDelete}></button>
            </div>
        )
    }
}

//   onChangeStyle={this.onChangeStyle}