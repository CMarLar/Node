class Professional {

    constructor(name, age, nationality,  profession,){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.profession = profession;
    }
    information() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.nationality);
        console.log(this.profession);
    }
}

module.exports = {Professional};