// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer












// class Boat extends Vehicle {
//     constructor(id, type, crew) {
//       super(id, 0, 'bwom');
//       this.type = type;
//       this.crew = crew;
//     }

//     useHorn() {
//       console.log(this.sound);
//     }
