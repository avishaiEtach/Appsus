///add send modal....
import { mailService } from "../../services/mail.service.js";
import { MailFilter } from "../cmps/mail-cmp/mail-filter.jsx";
export class MailCompose extends React.Component {
  state = {
    newMail: { to: "", subject: "", body: "", send: false },
  };

  componentDidMount() {
    this.setState({ newMail: { to: "", subject: "", body: "", send: false } });
  }

  onSetFilter = (filterBy) => {
  };

  componentWillUnmount() {
    console.log("we out of here honey");
    const { to, subject, body } = this.state.newMail;
    if (to.length > 0 || subject.length > 0 || body.length > 0)
      mailService.addMailToSentOrDraftsMails(this.state.newMail, false);
  }
  onClicKSend = (ev) => {
    ev.preventDefault();
    this.setState({ newMail: { ...this.state.newMail, send: true } });

    //this if for the send modal
    setTimeout(() => {
      this.setState({
        newMail: { to: "", subject: "", body: "", send: false },
      });
    }, 300);
    mailService.addMailToSentOrDraftsMails(this.state.newMail, true);
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState({ newMail: { ...this.state.newMail, [field]: value } });
  };

  render() {
    const { to, subject, body } = this.state.newMail;
    return (
      <section>
        <MailFilter onSetFilter={this.onSetFilter} />
        <div className="newMailHadder">New Massage</div>
        <form className="newMail">
          {/* <label htmlFor="email"></label> */}
          <input
            type="email"
            id="to"
            placeholder="To:"
            name="to"
            onChange={this.handleChange}
            value={to}
          />
          {/* <label htmlFor="subject"></label> <br /> */}
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            name="subject"
            onChange={this.handleChange}
            value={subject}
          />
          {/* <label htmlFor="body"></label> <br /> */}
          <textarea
            type="text"
            id="body"
            placeholder=""
            name="body"
            onChange={this.handleChange}
            value={body}
          >
          </textarea>
          {/* <br /> */}
          <button onClick={this.onClicKSend}>send</button>
        </form>
      </section>
    );
  }
}
