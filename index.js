/* Your Code Here */

const createEmployeeRecord = (array)=>{
    const obj = {}
    obj['firstName'] = array[0] 
    obj['familyName'] = array[1] 
    obj['title'] = array[2] 
    obj['payPerHour'] = array[3] 
    obj['timeInEvents'] = []
    obj['timeOutEvents'] = []
    return obj
}

function createEmployeeRecords(arrayOfArray){
    return arrayOfArray.map((employee)=> createEmployeeRecord(employee))
}

function createTimeInEvent(array, timeRecord){
    let splitTimeRecord = timeRecord.split(" ")
    let hours = parseFloat(splitTimeRecord[1])
    array.timeInEvents = [{type: "TimeIn", date: splitTimeRecord[0], hour: hours}]
    return array
}

function createTimeOutEvent(array, timeRecord){
    let splitTimeRecord = timeRecord.split(" ")
    let hours = parseFloat(splitTimeRecord[1])
    array.timeOutEvents = [{type: "TimeOut", date: splitTimeRecord[0], hour: hours}]
    return array 
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
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


