import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { emails } from '../../assets/emails.js'
const KEYMMAILS = 'MAILS';
const KEYSENT = 'SENT';

export const mailService = {
    queryMails,
    getMailById,
    addMailToSentMails,
    _createSentMail,
    querySentMails

}

let gMails=emails;
let gSentMails=[];
const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }


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
    //_saveCarsToStorage();
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