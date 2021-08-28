const { Route } = ReactRouterDOM;
import { Search } from "../cmps/keep/search.jsx"
import { KeepTrash } from "../cmps/keep/keep-trash.jsx"
import { KeepAditor } from "../cmps/keep/keep-aditor.jsx"
import { KeepNavBar } from "../cmps/keep/keep-nav-bar.jsx"
export class AppKeep extends React.Component {

  render() {
    return (
      <section className="kepp">
        <KeepNavBar />
        <Search />
        <Route path="/keep/aditor" component={KeepAditor} />
        <Route path="/keep/trash" component={KeepTrash} />
        {/* <Route path="/mail/compose" component={MailCompose} /> */}
        {/* <AddNoteTxt loadNots={this.loadNots} />
        <NotesList notes={this.state.notes} loadNots={this.loadNots} /> */}
      </section >
    )
  }
}
