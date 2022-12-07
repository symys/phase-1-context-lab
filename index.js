/* Your Code Here */
class Employee {
    constructor(arr) {
        this.firstName     = arr[0];
        this.familyName    = arr[1]; 
        this.title         = arr[2];
        this.payPerHour    = arr[3]; 
        this.timeInEvents  = []; 
        this.timeOutEvents = [];
    }
}

function createEmployeeRecord(employee) {
  return new Employee(employee)
}

function createEmployeeRecords(arrOfArr) {
  let employeeRecords = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    employeeRecords.push(createEmployeeRecord(arrOfArr[i]));
  }

  return employeeRecords;
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  let timeObj = {
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  };
  this.timeInEvents.push(timeObj);
  return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    let timeObj = {
    type: "TimeOut",
    date : date,
    hour: parseInt(hour, 10)
    }
    this.timeOutEvents.push(timeObj)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find((searchedDate) => searchedDate.date === date)
    const timeOut = this.timeOutEvents.find((searchedDate) => searchedDate.date === date)

    return (timeOut.hour-timeIn.hour)/100
}


function wagesEarnedOnDate(date){
    return(hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

function findEmployeeByFirstName(srcArray, firstName){
    const employeeObj = srcArray.find((employee) => employee.firstName === firstName)
    return employeeObj
}

let calculatePayroll = function (recordArr){
    let totalPay = 0;

    recordArr.map((employee) =>  (totalPay += allWagesFor.call(employee)))

    return totalPay;
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};


