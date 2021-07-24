"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        this.employees = [];
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
// const accounting = new Department('6', 'Accounting');
const it = new ITDepartment('6', ['Ro']);
console.log(it);
it.describe();
it.addEmployee('Ro');
it.addEmployee('Pri');
// it.employees[2] = 'Thais';
it.printEmployeeInfo();
const accounting = new AccountingDepartment('d2', []);
console.log(accounting);
accounting.addReport('Sales increasing 5% on a monthy basis');
accounting.printReports;
