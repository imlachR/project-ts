class Department {
  // name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, 'IT');

  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');

  }

  addReport(text: string) {
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
