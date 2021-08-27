export class MailInbox extends React.Component {
    state = {
        mails: [],
      };
    
      componentDidMount() {
        this.loadMails();
      }
      
      loadMails = () => {
        mailService.queryAllTypeOfMails('starred').then((mails) => {
          this.setState({ mails });
        });
      };

    render() {
        return (
          <MailList mails={this.state.mails} />
        )
    }
  }
  