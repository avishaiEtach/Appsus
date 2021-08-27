import { mailService } from "../../services/mail.service.js";
import {MailsDetailsHeader} from "./mails-details-header.jsx"
import { MailFilter } from "../cmps/mail-cmp/mail-filter.jsx";

export class EmailDetails extends React.Component {
  state = {
    mail: null,
  };

  loadMail = () => {
    const id = this.props.match.params.mailID;
    mailService.getMailById(id).then((mail) => {
      if (!mail) this.props.history.push("/");
      this.setState({ mail });
    });
  };

  componentDidMount() {
    this.loadMail();
  }

  render() {
    const {mail} = this.state;
    if (!mail) return <div>Loading...</div>
    return (
  <section>
         <MailFilter />
    <MailsDetailsHeader mail={mail}/> 
    <h1>{mail.subject}</h1>
    <h5>{mail.body}</h5>
  </section>
    );
  }
}
