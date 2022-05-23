
//Zadatak 1 

class Phone{
    
    constructor(model, warranity, yearOfproduction, batteryProcent){
        this.model = model
        this.warranity = warranity
        this.yearOfproduction = yearOfproduction
        this.batteryProcent = batteryProcent

        this.setTurnOn = false
        this.setTurnOff = true
    }
    //Funkcije
    turnOn(){
        if(this.setTurnOn === true && this.batteryProcent != 0 && this.batteryProcent > 10){
            console.log('Teleffon je vec ukljucen')
            
        }else if(this.batteryProcent === 0){
            console.log('Baterija telefona je prazna')
        }else if(this.batteryProcent > 0 && this.batteryProcent <= 10){
            console.log('Stavite telefon na punjac')
        }else{
            console.log('Telefon je ukljucen')
            return this.setTurnOn = true
        }
    }
    turnOff(){
        if(this.setTurnOff === true){
            console.log('Telefon je iskljucen')
            return this.setTurnOff = false
        } else{
            console.log('Telefon je vec iskljucen')
            
        }
    }
    warranityCheck(){

        let currentYear = new Date().getFullYear()
        if(this.yearOfproduction + this.warranity - currentYear < 0){
            console.log('Garancija ovog telefona je istekla')
        }else{
            console.log('Garancija ovog telefona jos traje ')
        }
    }
    //Setter
    set setBatteryProcent(newBatteryProcent){
        this.batteryProcent = newBatteryProcent;
    }
}
//Instanca
let PhoneKlari = new Phone('OPPO', 2, 2021, 50);

//Ispitivanje koda
PhoneKlari.turnOn();
PhoneKlari.turnOn();

PhoneKlari.turnOff();
PhoneKlari.turnOff();

PhoneKlari.warranityCheck();

PhoneKlari.setBatteryProcent = 5;
PhoneKlari.turnOn();

PhoneKlari.setBatteryProcent = 0;
PhoneKlari.turnOn();