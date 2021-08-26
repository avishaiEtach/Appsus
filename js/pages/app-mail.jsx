const { Route } = ReactRouterDOM;
import { MailInbox } from "../cmps/mail-cmp/mail-inbox.jsx";
import { MailNavBar } from "../cmps/mail-cmp/mail-nav-bar.jsx";
import { mailService } from "../services/mail.service.js";
import { MailFilter } from "../cmps/mail-cmp/mail-filter.jsx";
import { MailCompose } from "../cmps/mail-cmp/mail-compose.jsx";
import { EmailDetails } from "../cmps/mail-cmp/email-details.jsx";
import { SentMails } from "../cmps/mail-cmp/sent-mails.jsx";
import { MailDrafts } from "../cmps/mail-cmp/mail-drafts.jsx";
export class AppMail extends React.Component {


  render() {
    return (
      <div>
        <MailNavBar />
        <MailFilter />
        <Route path="/mail/inbox" component={MailInbox} /> 
        <Route path="/mail/compose" component={MailCompose} />
        <Route path="/mail/read/:mailID" component={EmailDetails} />
        <Route path="/mail/sentmails" component={SentMails} /> 
       {/* <Route path="/mail/starred" component={} /> */}
        { <Route path="/mail/drafts" component={MailDrafts} /> }
        {/* <Route path="/mail/trash" component={EmailDetails} />  */}
      </div>
    );
  }
}
