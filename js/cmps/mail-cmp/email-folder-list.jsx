import { MailList } from "./mail-list.jsx";
import { mailService } from "../../services/mail.service.js";
import { MailFilter } from "./mail-filter.jsx";
export class EmailFolderList extends React.Component {
  state = {
    mails: [],
    filterBy: null,
    mailsSelected:0
  };

  componentDidMount() {
    this.loadMails();
  }
  componentDidUpdate(prevState) {
    if (prevState.match.params.type != this.props.match.params.type)
      this.loadMails();
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadMails);
  };

  loadMails = () => {
    console.log(this.state);
    const { filterBy } = this.state;
    const typeOfMAilToReview = this.props.match.params.type;
    mailService
      .queryAllTypeOfMails(typeOfMAilToReview, filterBy)
      .then((mails) => {
        this.setState({ mails });
      });
  };
  
  moveToTrash = (id) => {
    mailService.deleteMail(this.props.match.params.type,id);
    this.loadMails();
  }

  mailSelcted=(add)=>{
    let num=this.state.mailsSelected+add;
    this.setState({ mailsSelected:num });
  }

  deleteAllSelected=()=>{
    const {type}=this.props.match.params
    mailService.deleteAllSelected(type);
    this.setState({ mailsSelected:0 });
    this.loadMails();
  }
  
  starAllSelected=()=>{
    const {type}=this.props.match.params
    mailService.addStarAllSelected(type)
    this.loadMails();
  }

  render() {
    const { mails,mailsSelected } = this.state;
    if (!this.state.mails)
      return <div>There is no mails in this category right now...</div>;
    else
      return (
        <div className="fillterAndList">
          <MailFilter onSetFilter={this.onSetFilter} />
          {mailsSelected>0 &&<div className="selected-div">{mailsSelected} selected
          <button  onClick={this.deleteAllSelected} className="far fa-trash-alt  opt-button"></button>
          <button  onClick={this.starAllSelected} className="far fa-star  opt-button"></button>
          </div>}
          <MailList mails={mails} typeShow={this.props.match.params.type} 
           moveToTrash={this.moveToTrash} mailSelcted={this.mailSelcted} />
        </div>
      );
  }
}
