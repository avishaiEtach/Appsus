import { MailList } from "./mail-list.jsx";
import { mailService } from "../../services/mail.service.js";
import { MailFilter } from "./mail-filter.jsx";
export class EmailFolderList extends React.Component {
  state = {
    mails: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadMails();
  }
  componentDidUpdate(prevState) {
    if (prevState.match.params.type != this.props.match.params.type)
      this.loadMails();
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadMails);
  };

  loadMails = () => {
    console.log(this.state);
    const { filterBy } = this.state;
    const typeOfMAilToReview = this.props.match.params.type;
    mailService
      .queryAllTypeOfMails(typeOfMAilToReview, filterBy)
      .then((mails) => {
        this.setState({ mails });
      });
  };

  render() {
    const { mails } = this.state;
    if (!this.state.mails)
      return <div>There is no mails in this category right now...</div>;
    else
      return (
        <div className="fillterAndList">
          <MailFilter onSetFilter={this.onSetFilter} />
          <MailList mails={mails} />
        </div>
      );
  }
}
