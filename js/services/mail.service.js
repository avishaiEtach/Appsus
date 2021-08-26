import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { emails } from '../../assets/emails.js'
const MAILS = 'MAILS';
const SENT_MAILES = 'SENT';
const DRAFTS = 'DRAFTS';

export const mailService = {
    queryMails,
    querySentMails,
    queryDraftMails,
    getMailById,
    addMailToSentOrDraftsMails,
}

//all data
let gMails=emails;
let gSentMails;
let gDrafts;

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

function queryMails() {
    console.log('query mails')
    return Promise.resolve(gMails)
}

function querySentMails() {
    return Promise.resolve(gSentMails)
}

function queryDraftMails() {
    return Promise.resolve(gDrafts)
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