import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { emails } from '../../assets/emails.js'
const MAILS = 'MAILS';
const SENT_MAILES = 'SENT';
const DRAFTS = 'DRAFTS';

export const mailService = {
    queryAllTypeOfMails,
    getMailById,
    addMailToSentOrDraftsMails,
}

//all data
let gMails=emails;
let gSentMails;
let gDrafts;
let gTrash;

_CreateInboxMails();
_CreateSentMails();
_CreateDraftMails();


const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }

function getMailById(mailId) {
    let mail = gMails.find(function (mail) {
        return mailId === mail.id
    })
    return Promise.resolve(mail)
}

function queryAllTypeOfMails(wantedType,filterBy){
     let mailsToShow=gMails;
    let filterShow;
    switch (wantedType){
        case 'inbox':
            mailsToShow=gMails;
          break;
        case 'sentmails':
            mailsToShow=gSentMails;
          break;
        case 'draft':
            mailsToShow=gDrafts;
        break;
        case 'trash':
            mailsToShow=gTrash;
        break;
        case 'starred':
            mailsToShow = mailsToShow.filter(mail => { return (mail.star===true )})
        break;
        default:
            mailsToShow=gMails;
    }
    if (filterBy){
        debugger;
        let { txt, isRead } = filterBy;
        if (isRead===true ||isRead===false )   
        mailsToShow = mailsToShow.filter(mail => {
            return (mail.body.includes(txt) &&  mail.isRead === isRead )
               //lables
        })
        else{
            mailsToShow = mailsToShow.filter(mail => {
                return (mail.body.includes(txt))
            })  
        }
    }
    return Promise.resolve(mailsToShow);
}



function addMailToSentOrDraftsMails(carToAdd, isSend) {
    let mail = _createSentOrDraftMail(carToAdd.to, carToAdd.subject, carToAdd.body);
    if (isSend) {
        gSentMails.unshift(mail)
        _saveToStorage('sent');
        return Promise.resolve()
    }
    else {
        gDrafts.unshift(mail);
        _saveToStorage('draft');
        return Promise.resolve()
    }
}

function _createSentOrDraftMail(to, subject, body) {
    return {
        id: utilService.makeId(),
        to: to,
        subject: subject,
        body: body,
        sentAt: Date.now()
    }
}

function _CreateDraftMails() {
    let draftMails = storageService.loadFromStorage(DRAFTS)
    if (!draftMails || !draftMails.length) {
        draftMails = []
    }
    gDrafts = draftMails;
    _saveToStorage('draft');
}

function _CreateSentMails() {
    let sentMails = storageService.loadFromStorage(SENT_MAILES)
    if (!sentMails || !sentMails.length) {
        sentMails = []
    }
    gSentMails = sentMails;
    _saveToStorage('sent');
}

function _saveToStorage(type) {
  switch (type){
      case 'sent':
        storageService.saveToStorage(SENT_MAILES, gSentMails)
        break;
      case 'inbox':
        storageService.saveToStorage(DRAFTS, gDrafts)
        break;
      case 'draft':
      storageService.saveToStorage(MAILS, gMails)
      break;
  }
}

 function _CreateInboxMails(){
    let mails=gMails;
    mails.map((mail) => {mail.star= false});
    gMails = mails;
}