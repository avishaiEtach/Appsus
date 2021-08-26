const { withRouter } = ReactRouterDOM
import { utilService } from "../services/util.service.js";

class _MailPreview extends React.Component {

  OnCliCKMail=(id)=>{
    console.log('in clicl mail from app-mail, id: ', id)
    this.props.history.push(`mail/${id}`)
    }

  render() {
    {
      const { mail} = this.props;

      return (
        <tr className={`email-read-${mail.isRead}`}>
          <td
            onClick={this.OnCliCKMail(mail.id)}
          >
           <span className={`from-${mail.isRead}`} >{mail.to}</span>
            <span  className={`subject-${mail.isRead}`}> {mail.subject} </span>
            <span>{mail.body}</span>
          </td>
          <td>{utilService.getStrTime(mail.sentAt)}</td>
        </tr>
      );
    }
  }
}

export const MailPreview = withRouter(_MailPreview);
