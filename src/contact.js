import BirthDate from "./birthDate.js";

export default class Contact{
    constructor(name, email, birthDate, phoneNumber, address){
        this._name = name;
        this._email = email;
        this._birthDate = birthDate;
        this._phoneNumber = phoneNumber;
        this._address = address;
    }
    
    getName(){
        return this._name.toUpperCase();
    }

    getEmail(){
        return this._email;
    }

    getBirthDate(){
        return this._birthDate.getAge();
    }

    getPhoneNumber(){
        return this._phoneNumber;
    }

    getAddress(){
        return this._address.toUpperCase();
    }

    static readForm(){
        let inpName = document.querySelector("#name");
        let inpEmail = document.querySelector("#email");
        let inpBirthDate = document.querySelector("#birthDate");
        let inpPhoneNumber = document.querySelector("#phoneNumber");
        let inpAddress = document.querySelector("#address");
        
        let name = inpName.value;
        let email = inpEmail.value;
        let birthDate = inpBirthDate.value;
        let phoneNumber = inpPhoneNumber.value;
        let address = inpAddress.value;

        birthDate = birthDate.split("-");
        
        birthDate = new BirthDate(birthDate[2], birthDate[1] - 1, birthDate[0]);

        if(name && email && birthDate && phoneNumber){
           let participant = new Contact(name, email, birthDate, phoneNumber, address);

           inpName.value = '';
           inpEmail.value = '';
           inpBirthDate.value = '';
           inpPhoneNumber.value = '';
           inpAddress.value = '';

            return participant;
        }
        
        Swal.fire(
            'Error',
            'Todos los campos son requeridos',
            'error'
          );
          return false;
    }
}