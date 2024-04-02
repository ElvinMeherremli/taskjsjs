function Person(name, surname, age, isMale) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.isMale = isMale;
  this.fullName = function () {
    let fullName = `${this.name} ${this.surname}`;
    let fullNameArr = fullName.split(" ");
    let name = fullNameArr.shift().toUpperCase();
    let nameArr = [];
    let surname = fullNameArr.pop().toUpperCase().charAt(0);
    nameArr.push(surname);
    nameArr.push(name);
    let fullNameRes = nameArr.join(".");
    return fullNameRes;
  };
}

let person = new Person('Elvin', 'Meherremli', 14, 'male')
console.log(person.fullName());

function Employee(department, experienceYear, salary) {
  this.department = department;
  this.experienceYear = experienceYear;
  this.salary = salary;
  this.salary = 0;
  this.generateID = function () {
    let depmin = this.department.substr(0, 2).toUpperCase();
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomInt = getRandomInt(1000, 9999);
    let res = `${depmin}${randomInt}`;
    return res
  };
}

let emp = new Employee('IT', '1 year')
console.log(emp.generateID());