/**
 * Created by yassine on 18/03/15.
 */

function parseDate(date) {
    console.log("typeof date", typeof date);
    if (typeof date == 'string') {
        return date;
    }
    if (date == null) {
        return "";
    }
    var curr_date = date.getDate();
    var curr_month = date.getMonth() + 1;
    var curr_year = date.getFullYear();
    return (curr_date < 10 ? "0" : "") + curr_date + "/" + (curr_month < 10 ? "0" : "") + curr_month + "/" + curr_year;
}

function parseDateTime(date) {
    console.log("typeof date", typeof date);
    if (typeof date == 'string') {
        return date;
    }
    if (date == null) {
        return "";
    }
    var curr_date = date.getDate();
    var curr_month = date.getMonth() + 1;
    var curr_year = date.getFullYear();

    var curr_hour = date.getHours();
    var curr_min = date.getMinutes();
    var curr_sec = date.getSeconds();
    return curr_year + curr_month + "-" + (curr_date < 10 ? "0" : "") + curr_date + "-" + (curr_month < 10 ? "0" : "") + " " + curr_hour + ":" + curr_min + ":" + curr_sec;
}

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}


Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};


function frStringToDate(string) {
    if (string == null) {
        return null;
    }
    var array = string.split("/");
    return new Date(array[2], array[1] - 1, array[0]);
}