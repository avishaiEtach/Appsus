
import { notesService } from "././../../services/notes.service.js"
import { ColorInput } from "../keep/note-color.jsx"
export class NoteImg extends React.Component {

    state = {
        noteStyle: {},
        isActive: false,
        note: this.props.note
    }

    onCopy = () => {
        notesService.addNote(this.props.note.info.txt, this.props.note.info.url, 'img')
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

    render() {
        const { noteStyle, isActive } = this.state
        const { note } = this.props
        return (
            <div className="note-img" style={noteStyle}>
                <img className="pinnedImg" onClick={this.changePin} src={note.isPinned ? './assets/img/thumbtack.svg' : './assets/img/thumbtack-clear.svg'} alt="" />
                <section>
                    <img src={note.info.url} />
                </section>
                <h3>{note.info.title}</h3>
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
