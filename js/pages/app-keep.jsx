import { AddNoteTxt } from "../cmps/keep/noteadd-txt.jsx"
import { NotesList } from "../cmps/keep/note-list.jsx"
import { notesService } from "../services/notes.service.js"
export class AppKeep extends React.Component {

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
      <section className="kepp">
        <AddNoteTxt loadNots={this.loadNots} />
        <NotesList notes={this.state.notes} />
      </section>
    )
  }
}
