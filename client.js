$(document).ready(readyNow)

//this is just the outline for the employee-object
// let employee={
//     firstName:'', 
//     lastName:'',
//     idNumber:0 ,
//     jobTitle:'' ,
//     annualSalary: 0
// }
let employeeArray =[];
//initialized array for employees to be stored in


 function readyNow(){
     //Have all my inputs ready to go once page loads
    $('.inputButton').on('click',buttonClick)
 }

 function buttonClick() {
     //This initializes an employee-object, and retrieves values from the DOM to be stored in this object
     let employee={
        firstName:$('.firstInput').val(), 
        lastName:$('.lastInput').val(),
        idNumber:$('.idInput').val(),
        jobTitle:$('.titleInput').val(),
        annualSalary: $('.salaryInput').val()
    }
    //This pushes employee data from the local variable to the global employee array
    employeeArray.push(employee);

    $('.tableOutput').append(`<tr>
    <td>first</td>
    <td>last</td>
    <td>id</td>
    <td>title</td>
    <td>salary</td>
    <td><button id="deleteButton">Delete</button></td></tr>`)

    //appends a delete button that will delete the row it's in

    //This empties input fields after having stored all data from them.
    $('.firstInput').val(''); 
    $('.lastInput').val('');
    $('.idInput').val('');
    $('.titleInput').val('');
    $('.salaryInput').val('');

    //These are tests to ensure data is being input/stored properly
    console.log('employee',employee);
    console.log('updated array',employeeArray);

    
    
 }//End buttonClick


 function moneyCounter() {
    totalMoney=0;
     for (let person of employeeArray) {
     totalMoney += Number(person.annualSalary)
     }
 }

 