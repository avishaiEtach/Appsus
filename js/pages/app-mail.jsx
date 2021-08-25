
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"

export class AppMail extends React.Component {

    state={
        mails:[]
    }
    
    componentDidMount() {
        this.loadMails();
        console.log('mails====>>',this.state.mails);
      }
    

    loadMails = () => {
        mailService.query().then((mails) => {
            this.setState({mails},()=>{
                console.log(this.state.mails)
            })
        });
      };


    render() {
        return (
            <MailList mails={this.state.mails}/>
         )
  }
}

