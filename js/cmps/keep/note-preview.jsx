
import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteToDo } from "./note-doto.jsx"
export class NotesPreview extends React.Component {

    // state = {

    // }

    loadTypes = () => {
        switch (this.props.note.type) {
            case 'note-txt':
                return <NoteTxt note={this.props.note} loadTypes={this.loadTypes} />
            case 'note-img':
                return <NoteImg note={this.props.note} />
            case 'note-todos':
                return <NoteToDo note={this.props.note} />

        }
    }




    render() {
        const { note } = this.props;
        return (
            <div>
                {this.loadTypes()}
            </div>
        )
            ;
    }
}
