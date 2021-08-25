import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { emails } from '../../assets/emails.js'

export const mailService = {
    query,
}


const KEY = 'MAILS';
let gMails=emails;

function query() {
    console.log('query mails')
    return Promise.resolve(gMails)
}