const { withRouter } = ReactRouterDOM
import { utilService } from "../../services/util.service.js";

class _MailPreview extends React.Component {

  state = {
    mail: this.props.mail
  }

  OnCliCKMail = (id) => {
    // console.log('in clicl mail from app-mail, id: ', id)
    // this.props.history.push(`mail/read/${id}`)
  }

  toggleStar = () => {
    console.log('hi');
    if (this.state.mail.star)
      this.state.mail.star = false;
    else
      this.state.mail.star = true;

    this.setState({ mail: this.props.mail })
  }

  moveToTrash = () => {
    console.log('hi');
  }

  render() {
    {
      const { mail } = this.props;

      return (
        <tr className={`email-read-${mail.isRead}`}>
          <td>
            <span className={`from-${mail.isRead}`} >{mail.to}</span>
            <span className={`subject-${mail.isRead}`}> {mail.subject} </span>
            <span>{mail.body}</span>
          </td>
          <span>
            <td>{utilService.getStrTime(mail.sentAt)}</td>

            {mail.star && <td><button onClick={this.toggleStar} className="fas fa-star"></button></td>}
            {!mail.star && <td><button onClick={this.toggleStar} className="far fa-star"></button></td>}
            <td><button onClick={this.moveToTrash} className="far fa-trash-alt "></button></td>
          </span>
        </tr>
      );
    }
  }
}

export const MailPreview = withRouter(_MailPreview);
