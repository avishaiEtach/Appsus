import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { emails } from '../../assets/emails.js'
const MAILS = 'MAILS';
const SENT_MAILES = 'SENT';

export const mailService = {
    queryMails,
    querySentMails,
    getMailById,
    addMailToSentMails,
    _createSentMail,
    _CreateSentMails
}

let gMails=emails;
let gSentMails;
const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }
_CreateSentMails();

function getMailById(mailId){
    let mail = gMails.find(function (mail) {
        return mailId === mail.id
    })
    return Promise.resolve(mail)
}

function queryMails() {
    console.log('query mails')
    return Promise.resolve(gMails)
}

function querySentMails(){
    return Promise.resolve(gSentMails)
}

function addMailToSentMails(carToAdd) {
    let mail = _createSentMail(carToAdd.to, carToAdd.subject,carToAdd.body);
    gSentMails.unshift(mail)
    console.log(gSentMails);
    _saveMailsToStorage();
    return Promise.resolve()
}

function _createSentMail(to,subject,body) {
    return {
        id: utilService.makeId(),
        to:to,
        subject:subject,
        body: body,
    }
}

function _CreateSentMails() {
    let sentMails = storageService.loadFromStorage(SENT_MAILES)
    if (!sentMails || !sentMails.length) {
        sentMails = []
    }
    gSentMails = sentMails;
    _saveMailsToStorage();
}

function _saveMailsToStorage() {
    storageService.saveToStorage(SENT_MAILES, gSentMails)
}
