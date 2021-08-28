const { NavLink, Route } = ReactRouterDOM
import { ColorInput } from "../keep/note-color.jsx"
import { notesService } from "././../../services/notes.service.js"
export class NoteTxt extends React.Component {

    state = {
        noteStyle: {},
        isActive: false,
        // isPinned: this.props.note.isPinned,
        note: this.props.note
    }

    onChangeStyle = (field, value) => {
        this.setState(prevState => ({ noteStyle: { ...prevState.noteStyle, [field]: value } }))
    }

    toggleBox = () => {
        this.setState(prevState => ({ noteStyle: { ...prevState.noteStyle, [field]: value } }))
    };

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

    onCopy = () => {
        notesService.addNote(this.props.note.info.txt, '', 'txt')
            .then(() => this.props.loadNots())
    }



    onDelete = () => {
        if (this.props.note.id) {
            notesService.DeleteNote(this.props.note.id)
                .then(() => this.props.loadNots())
        }
    }

    render() {
        const { noteStyle, isActive, note } = this.state
        return (
            <div className="note-txt" style={noteStyle}>
                <img onClick={this.changePin} src={note.isPinned ? '../../../assets/img/thumbtack.svg' : '../../../assets/img/thumbtack-clear.svg'} alt="" />
                <p>{note.info.txt}</p>
                <button className="far fa-trash-alt" onClick={this.onDelete}></button>
                <section>
                    <ColorInput isActive={isActive} onChangeStyle={this.onChangeStyle} />
                    <i onClick={this.toggleBox} className="fas fa-palette" ></i>
                    <button className="far fa-copy" onClick={this.onCopy}></button>
                </section>
            </div>
        )
    }
}

//   onChangeStyle={this.onChangeStyle}