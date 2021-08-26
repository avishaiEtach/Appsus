import { MailPreview } from "./mail-preview.jsx"
import { mailService } from "../../services/mail.service.js";
import { MailList } from "./mail-list.jsx"
export class SentMails extends React.Component {
  state = {
    sentMails: [],
  };

  componentDidMount() {
    this.loadSentMails();
  }

  loadSentMails = () => {
    mailService.querySentMails().then((sentMails) => {
      this.setState({ sentMails });
    });
  };

  render() {
    return (<MailList mails={this.state.sentMails}/>)
}
}
