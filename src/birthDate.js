export default class BirthDate{
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    getAge() {
        let fecha = new Date(this._year, (this._month - 1), this._day);
        let today = new Date(); 
        let diff = today.getTime() - fecha.getTime();
        let dateDiff = new Date(diff);
        let age = dateDiff.getUTCFullYear() - 1970;
        
        return age;
    }
}