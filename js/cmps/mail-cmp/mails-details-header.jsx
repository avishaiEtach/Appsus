import { utilService } from "../../services/util.service.js";
import { mailService } from "../../services/mail.service.js";

export class MailsDetailsHeader extends React.Component {
  state = {
    mail: this.props.mail,
  };
  toggleStar = () => {
    debugger;
    const { mail } = this.state;
    if (this.state.mail.star) this.state.mail.star = false;
    else this.state.mail.star = true;
    mailService.toggleStarByID(this.state.mail.id);
    this.setState({ mail: this.props.mail });
  };

  render() {
    const { mail } = this.props;
    console.log(mail);
    return (
      <div className="subject-mail">
        <h1>{mail.subject}</h1>
        <h5>{mail.to}</h5>
        <span>
          {utilService.getFullTimeStr(mail.sentAt)}
          {mail.star && 
                <button
                  onClick={this.toggleStar}
                  className="fas fa-star opt-button"
                ></button>
            }
            {!mail.star && (
                <button
                  onClick={this.toggleStar}
                  className="far fa-star opt-button "
                ></button>
            )}
        </span>
      </div>
    );
  }
}
