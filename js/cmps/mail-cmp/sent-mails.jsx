import { MailPreview } from "../mail-preview.jsx"


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
    const {sentMails}=this.state;
  return (  
    <section className="sent-mail-list">
        ddddd
    {/* <table>
      <tbody>
        {sentMails.map((mail) => (
          <MailPreview key={mail.id} mail={mail} />
        ))}
      </tbody>
    </table> */}
  </section>
  );
  }
}
