import { MailPreview } from "./mail-preview.jsx";


export class MailList extends React.Component {
    
  render() {
    const {mails}=this.props;
    return (
      <section className="mail-list">
        <table>
          <tbody>
            {mails.map((mail) => (
              <MailPreview key={mail.id} mail={mail} />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}
