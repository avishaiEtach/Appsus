import { MailList } from "./mail-list.jsx";
import { mailService } from "../../services/mail.service.js";

export class MailDrafts extends React.Component {
    state = {
        mails: [],
      };
    
      componentDidMount() {
        this.loadMails();
      }
      
      loadMails = () => {
        mailService.queryDraftMails().then((mails) => {
          this.setState({ mails });
        });
      };

    render() {
        return (
          <MailList mails={this.state.mails} />
        )
    }
  }
  