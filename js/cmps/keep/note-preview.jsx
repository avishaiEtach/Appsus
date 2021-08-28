
import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteToDo } from "./note-doto.jsx"
export class NotesPreview extends React.Component {

    // state = {

    // }

    loadTypes = () => {
        switch (this.props.note.type) {
            case 'note-txt':
                return <NoteTxt note={this.props.note} loadNots={this.props.loadNots} />
            case 'note-img':
                return <NoteImg note={this.props.note} loadNots={this.props.loadNots} />
            case 'note-todos':
                return <NoteToDo note={this.props.note} loadNots={this.props.loadNots} />

        }
    }




    render() {
        const { note } = this.props;
        return (
            <React.Fragment>
                {this.loadTypes()}
            </React.Fragment>
        )
            ;
    }
}
