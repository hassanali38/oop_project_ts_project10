#! /usr/bin/env node
import inquirer from "inquirer";
//Creating a class named as Student
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
//What is next,js?
//Creating a class named as Person
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
//Declaring an object of Person class
const persons = new Person();
//Method to start the program and handles all the functionalities
const programStart = async (persons) => {
    while (true) {
        console.log("Welcome to My Application!");
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "To whom do you want to talk?",
                choices: ["Self", "Student", "Quit"]
            }
        ]);
        if (answer.select == "Self") {
            console.log("I am talking to myself!");
            console.log("I am feeling very motivated right now!");
        }
        else if (answer.select == "Student") {
            const ans = await inquirer.prompt([
                {
                    type: "input",
                    name: "student",
                    message: "Enter the name of a student to whom you want to talk:"
                }
            ]);
            const student = persons.students.find(val => val.name == ans.student);
            //If the name of student not found in the array passed to this function
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello! I am ${name.name} and I am fine!`);
                console.log(persons.students);
            }
            if (student) {
                console.log("Student is present in the array");
                console.log(`Hello! I am ${ans.student} and I am fine!`);
                console.log(persons.students);
            }
        }
        else if (answer.select == "Quit") {
            break;
        }
    }
};
programStart(persons);
