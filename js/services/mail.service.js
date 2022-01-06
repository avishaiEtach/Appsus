import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { emails } from '../../assets/emails.js'
const MAILS = 'mails';
const SENT_MAILES = 'sent';
const DRAFTS = 'drafts';
const TRASH = 'trash';

export const mailService = {
    queryAllTypeOfMails,
    getMailById,
    addMailToSentOrDraftsMails,
    markMailReadOrUnRead,
    saveToStorage,
    deleteMail,
   deleteAllSelected,
    addStarAllSelected,
    toggleStarByID,
    toggleReadByID,
    toggleSelectByID

}

//all data
let gMails = emails;
let gSentMails;
let gDrafts;
let gTrash;

_CreateInboxMails();
_CreateSentMails();
_CreateDraftMails();
_CreateTrashMails();

const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }

function getMailById(mailId) {
    let mail = gMails.find(function (mail) {
        return mailId === mail.id
    })
    return Promise.resolve(mail);
}
function _getMailByIdLocal(mailId){
    let mail = gMails.find(function (mail) {
        return mailId === mail.id
    })
    return mail;
}

function _getIndexById(mailId,type) {
    let index;
    switch (type) {
        case 'sentmails':
            index=gSentMails.findIndex((email)=>(email.id===mailId))
            break;
        case 'inbox':
            index=gMails.findIndex((email)=>(email.id===mailId))
            break;
        case 'draft':
            index=gDrafts.findIndex((email)=>(email.id===mailId))
            break;
            case 'trash':
                index= gTrash.findIndex((email)=>(email.id===mailId))
                break;
    }
return index;
}

function markMailReadOrUnRead(isRead, id) {
    let mail = getMailById(id);
    mail.isRead = isRead;
    saveToStorage('inbox');
}

function queryAllTypeOfMails(wantedType, filterBy) {
    let mailsToShow;
    let filterShow;
    switch (wantedType) {
        case 'inbox':
            mailsToShow = storageService.loadFromStorage(MAILS);
            break;
        case 'sentmails':
            mailsToShow =storageService.loadFromStorage(SENT_MAILES);
            break;
        case 'draft':
            mailsToShow = storageService.loadFromStorage(DRAFTS);
            break;
        case 'trash':
            mailsToShow = storageService.loadFromStorage(TRASH);
            break;
        case 'starred':
            mailsToShow = storageService.loadFromStorage(MAILS);
            mailsToShow = mailsToShow.filter(mail => { return (mail.star === true) })
            break;
    }
    if (filterBy) {
        let { txt, isRead } = filterBy;
        if (isRead === true || isRead === false)
            mailsToShow = mailsToShow.filter(mail => {
                return (mail.body.includes(txt) && mail.isRead === isRead)
                //lables
            })
        else {
            mailsToShow = mailsToShow.filter(mail => {
                return (mail.body.includes(txt))
            })
        }

        if (filterBy.sort) {
            if (filterBy.sort === 'Title')
            mailsToShow.sort(utilService.compareString);
            else if (filterBy.sort === 'Date')
            mailsToShow.sort(utilService.compareDatesByMs);
        }
    }
    return Promise.resolve(mailsToShow);
}




function addMailToSentOrDraftsMails(carToAdd, isSend) {
    let mail = _createSentOrDraftMail(carToAdd.to, carToAdd.subject, carToAdd.body);
    if (isSend) {
        gSentMails.unshift(mail)
        saveToStorage('sentmails');
        return Promise.resolve()
    }
    else {
        gDrafts.unshift(mail);
        saveToStorage('draft');
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
    saveToStorage('draft');
}

function _CreateSentMails() {
    let sentMails = storageService.loadFromStorage(SENT_MAILES)
    if (!sentMails || !sentMails.length) {
        sentMails = []
    }
    gSentMails = sentMails;
    saveToStorage('sentmails');
}


function _CreateInboxMails() {
    let mails = storageService.loadFromStorage(MAILS);
    if (!mails || !mails.length) {
        mails=gMails;
    }
    mails.map((mail) => { mail.star = false 
    mail.select=false});
    gMails = mails;
    saveToStorage('inbox');
}

function _CreateTrashMails() {
    let TrashMails = storageService.loadFromStorage(TRASH)
    if (!TrashMails || !TrashMails.length) {
        TrashMails = []
    }
    gTrash = TrashMails;
    saveToStorage('trash');
}



function saveToStorage(type) {
    switch (type) {
        case 'sentmails':
            storageService.saveToStorage(SENT_MAILES, gSentMails)
            break;
        case 'draft':
            storageService.saveToStorage(DRAFTS, gDrafts)
            break;
        case 'inbox':
            storageService.saveToStorage(MAILS, gMails)
            break;
         case 'trash':
                storageService.saveToStorage(TRASH, gTrash)
                break;
    }
}

function deleteMail(typeShow,id){
    const index=_getIndexById(id,typeShow)
    switch (typeShow) {
        case 'inbox':
            const mail=gMails[index];
            gTrash.unshift(gMails[index])
            gMails.splice(index,1);
            saveToStorage('trash');
            break;
        case 'sentmails':
           gSentMails.splice(index,1);
            break;
        case 'draft':
           gDrafts.splice(index,1);
            break;
        case 'trash':
          gTrash.splice(index,1);
            break;
    }
    saveToStorage(typeShow);
}

function deleteAllSelected(typeShow){
    let mails;
    switch (typeShow) {
        case 'inbox':
         mails=gMails;
            break;
        case 'sentmails':
            mails=gSentMails;
            break;
        case 'draft':
            mails=draftMails;
            break;
        case 'trash':
            mails=gTrash;
            break;
    }
    mails.forEach(email => {
        if (email.select)
         deleteMail(typeShow,email.id) 
        });
}

function addStarAllSelected(typeShow){
    let mails;
    switch (typeShow) {
        case 'inbox':
         mails=gMails;
            break;
        case 'sentmails':
            mails=gSentMails;
            break;
        case 'draft':
            mails=draftMails;
            break;
        case 'trash':
            mails=gTrash;
            break;
    }
    mails.map((email)=>{email.star=true });
}


function toggleStarByID(id){
     let mail=_getMailByIdLocal(id)
        if (mail.star)   mail.star=false;
        else  mail.star=true  ;
    saveToStorage('inbox');
}

function toggleReadByID(id){
    let mail=_getMailByIdLocal(id)
       if (mail.isRead)   mail.isRead=false;
       else  mail.isRead=true  ;
   saveToStorage('inbox');
}

function toggleSelectByID(id){
    let mail=_getMailByIdLocal(id)
       if (mail.select)   mail.select=false;
       else  mail.select=true  ;
        saveToStorage('inbox');
}