export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getStrTime,
    showOnLyPartOfString
}

function getStrTime(time){
    const ms=new Date(time);
    const hrs = ms.getHours();
    const mins = ms.getMinutes();

    let str= `${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}`
    return str;

}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function showOnLyPartOfString(str) {
    if (str.length>50){
    let res=string.substring(0,50)+'...';
    }
return res;
}
