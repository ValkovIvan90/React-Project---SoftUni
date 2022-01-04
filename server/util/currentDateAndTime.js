
function createDate() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    const createdDate = year + '-' + month + '-' + day;
    return createdDate;
}
function createTime() {
    let time = new Date();

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hour < 10) {
        hour = "0" + hour
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    const createdTime = hour + ':' + minutes + ':' + seconds;

    return createdTime;
}
module.exports = {
    createDate,
    createTime
}