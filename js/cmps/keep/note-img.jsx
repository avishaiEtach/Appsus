

import { ColorInput } from "../keep/note-color.jsx"
export class NoteImg extends React.Component {

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
            <div className="note-img" style={noteStyle}>
                <section>
                    <img src={note.info.url} />
                </section>
                <h3>{note.info.title}</h3>
                <ColorInput onChangeStyle={this.onChangeStyle} />
            </div>
        )
    }
}