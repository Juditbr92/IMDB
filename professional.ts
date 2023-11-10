// Paso 1. Crear clase Professional con los siguientes atributos públicos:

class Professional {
    public name: string 
    public age: number
    public weight: number
    public height: number 
    public isRetired: boolean
    public nationality: string
    public oscarsNumber: number
    public profession: string

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession){
        name = this.name;
        age = this.age;
        weight = this.weight;
        height = this.height;
        isRetired = this.isRetired;
        nationality = this.nationality;
        oscarsNumber = this.oscarsNumber;
        profession = this.profession;
    }

    public showAtributes(){
        console.log()
    }
}