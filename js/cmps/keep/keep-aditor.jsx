

import { AddNoteTxt } from "./noteadd-txt.jsx"
import { NotesList } from "./note-list.jsx"
import { notesService } from "../../services/notes.service.js"

export class KeepAditor extends React.Component {


    state = {
        notes: []
    }



    componentDidMount() {
        this.loadNots();
    }


    loadNots = () => {
        notesService.query().then((notes) => {
            this.setState({ notes })
        });
    };


    render() {

        return (
            <section>
                < AddNoteTxt loadNots={this.loadNots} />
                <NotesList notes={this.state.notes} loadNots={this.loadNots} />
            </section>
        )
    }
}