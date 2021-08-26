const { Route } = ReactRouterDOM;

import { MailList } from "../cmps/mail-list.jsx";
import { MailNavBar } from "../cmps/mail-cmp/mail-nav-bar.jsx";
import { mailService } from "../services/mail.service.js";
import { MailFilter } from "../cmps/mail-cmp/mail-filter.jsx";
import { MailCompose } from "../cmps/mail-compose.jsx";
import { EmailDetails } from "../cmps/mail-cmp/email-details.jsx";
import { SentMails } from "../cmps/mail-cmp/sent-mails.jsx";
export class AppMail extends React.Component {
  state = {
    mails: [],
  };

  componentDidMount() {
    this.loadMails();
  }
  

  loadMails = () => {
    mailService.query().then((mails) => {
      this.setState({ mails });
    });
  };

  render() {
      const {mails}=this.state;
    return (
      <div>
        <MailNavBar />
        <MailFilter />
        <Route path="/mail/compose" component={MailCompose} />
        <Route path="mail/inbox" render={(props) => ( <MailList {...props} mails={mails} />)}/> 
        <Route path="/mail/read/:mailID" component={EmailDetails} />
        <Route path="/mail/sentmails" component={SentMails} /> 
       {/* <Route path="/mail/starred" component={} /> */}
        {/* <Route path="/mail/drafts" component={EmailDetails} /> */}
        {/* <Route path="/mail/trash" component={EmailDetails} />  */}
      </div>
    );
  }
}
