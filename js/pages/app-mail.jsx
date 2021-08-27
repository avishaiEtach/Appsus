const { Route } = ReactRouterDOM;
import { MailNavBar } from "../cmps/mail-cmp/mail-nav-bar.jsx";
import { MailFilter } from "../cmps/mail-cmp/mail-filter.jsx";
import { MailCompose } from "../cmps/mail-cmp/mail-compose.jsx";
import { EmailDetails } from "../cmps/mail-cmp/email-details.jsx";
import { EmailFolderList } from "../cmps/mail-cmp/email-folder-list.jsx";
export class AppMail extends React.Component {

  render() {
    return (
      <div>
        <MailNavBar />
        <Route path="/mail/compose" component={MailCompose} />
        <Route path="/mail/type/:type" component={EmailFolderList} /> 
        <Route path="/mail/read/:mailID" component={EmailDetails} />
     
      </div>
    );
  }
}
