import { AddNoteTxt } from "./noteadd-txt.jsx"
import { NotesList } from "./note-list.jsx"
import { notesService } from "../../services/notes.service.js"
export class KeepTrash extends React.Component {

    state = {
        notes: []
    }



    componentDidMount() {
        this.loadNots();
    }


    loadNots = () => {
        notesService.queryTrash().then((notes) => {
            this.setState({ notes })
        });
    };


    render() {

        return (
            <section>
                <NotesList notes={this.state.notes} loadNots={this.loadNots} />
            </section>
        )
    }
}
