import BirthDate from "./birthDate.js";
import Contact from './contact.js';
import List from './list.js'

/*
console.log("BirthDate");
let b1 = new BirthDate(12, 3, 2000);
console.log(b1.getAge());
console.log("contact");
let c1 = new Contact("Ramon Aguirre", "raguirre@ucol", b1, 3131030000, "Tecoman, colima")
console.log(c1.getName());
console.log(c1.getEmail());
console.log(c1.getBirthDate());
console.log(c1.getPhoneNumber());
console.log(c1.getAddress());
*/

class App{
    constructor(){
        this._btnRegister = document.querySelector("#btnAdd");//boton
        this._table = document.querySelector("#registry") //48 tabla
        this._btnRegister.addEventListener("click", this.readForm);//
        this._list = new List();
    }

    readForm = () => {
        let people = Contact.readForm();
    
        if(people === false){
            Swal.fire(
                'Error',
                'Todos los campos son requeridos',
                'error'
              );
              return;
        }
        let result = this._list.add(people);

        if(result === false){
            swal.fire("Error", "Este usuario ya fue registrado", "error");
            return;
        }

        this._addContact(people)
            Swal.fire(
                'CORRECTO',
                'Registro completo',
                'success'
              )

    }

    _addContact(people){
        let row = this._table.insertRow(-1);

        let colName = row.insertCell(0);
        let colEmail = row.insertCell(1);
        let colBirthDate = row.insertCell(2);
        let colPhonenumber = row.insertCell(3);
        let coladdress = row.insertCell(4);

        colName.innerHTML = people.getName();
        colEmail.innerHTML = people.getEmail();
        colBirthDate.innerHTML = people.getBirthDate();
        colPhonenumber.innerHTML = people.getPhoneNumber();
        coladdress.innerHTML = people.getAddress();

    }
}

new App();
