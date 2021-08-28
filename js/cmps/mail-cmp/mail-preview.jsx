const { withRouter } = ReactRouterDOM;
import { utilService } from "../../services/util.service.js";
import { mailService } from "../../services/mail.service.js";
class _MailPreview extends React.Component {
  state = {
    mail: this.props.mail,
  };

  OnCliCKMail = () => {
    mailService.toggleReadByID(this.state.mail.id);
    this.props.history.push(`/mail/read/${this.state.mail.id}`);
  };

  toggleSelect = () => {
    if (this.state.mail.select) {
      this.state.mail.select = false;
      this.setState({ mail: this.props.mail });
      this.props.mailSelcted(-1);
    } else {
      this.state.mail.select = true;
      this.setState({ mail: this.props.mail });
      this.props.mailSelcted(1);
    }
    mailService.toggleSelectByID(this.state.mail.id);
  };

  toggleRead = () => {
    debugger;
    if (this.state.mail.isRead) this.state.mail.isRead = false;
    else this.state.mail.isRead = true;
    mailService.toggleReadByID(this.state.mail.id);
    this.setState({ mail: this.state.mail });
  };

  toggleStar = () => {
    if (this.state.mail.star) this.state.mail.star = false;
    else this.state.mail.star = true;
    mailService.toggleStarByID(this.state.mail.id);
    this.setState({ mail: this.props.mail });
  };

  moveToTrashPreview = () => {
    this.props.moveToTrash(this.state.mail.id);
  };

  render() {
    {
      const { mail, typeShow } = this.props;
      return (
        <tr className={`email-read-${mail.isRead}`}>
          <td className="button-left">
            {typeShow === "trash" && (
              <td>
                <button className="far fa-trash-alt  opt-button"></button>
              </td>
            )}
            {mail.star && typeShow != "trash" && (
              <td>
                <button
                  onClick={this.toggleStar}
                  className="fas fa-star opt-button"
                ></button>
              </td>
            )}
            {!mail.star && typeShow != "trash" && (
              <td>
                <button
                  onClick={this.toggleStar}
                  className="far fa-star opt-button"
                ></button>
              </td>
            )}
            <td>
              <input
                type="checkbox"
                className="checkBox"
                id="myCheck"
                value={mail.select}
                onChange={this.toggleSelect}
              ></input>
            </td>
          </td>
          <td>
            <div className="mail-preview-text">
            <span className={`from ${mail.isRead} `}  onClick={this.OnCliCKMail}>{mail.to}</span>
            <section>
            <span className={`subject ${mail.isRead}`} onClick={this.OnCliCKMail}> {mail.subject} </span>
            <span className="body" onClick={this.OnCliCKMail}>{utilService.showOnLyPartOfString(mail.body)} </span>
            </section>
            </div>
          </td>

          <span className="button-right">
            <td>{utilService.getStrTime(mail.sentAt)}</td>
            <span>
              {mail.isRead && (
                <td>
                  <button
                    onClick={this.toggleRead}
                    className="far fa-envelope-open  opt-button "
                  ></button>
                </td>
              )}
              {!mail.isRead && (
                <td>
                  <button
                    onClick={this.toggleRead}
                    className="far fa-envelope  opt-button "
                  ></button>
                </td>
              )}
              <td>
                <button
                  onClick={this.moveToTrashPreview}
                  className="far fa-trash-alt  opt-button"
                ></button>
              </td>
            </span>
          </span>
        </tr>
      );
    }
  }
}

export const MailPreview = withRouter(_MailPreview);
