export default class List{
    constructor() {
        this._contacts = new Array();
    }

    add(contact){
        let pos = this._findParticipant(contact);

        if(pos >= 0){
            return false;
        }

        this._contacts.push(contact);
            
        return true;
    }

    _findParticipant(contact){
        let pos = this._contacts.findIndex( (p) => {
            if(p.getEmail() === contact.getEmail()){
                return true;
            } else {
                return false;
            }
        });

        return pos;
    }
}