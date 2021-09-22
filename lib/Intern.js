const Employee = require("./Employee");

class intern extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.school = school; 
    }

    school(){
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}


module.exports = Intern;