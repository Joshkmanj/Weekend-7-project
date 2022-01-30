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
let monthlyCosts = 0;
//initialized array for employees to be stored in


 function readyNow(){
     //Have all my inputs ready to go once page loads
    $('.inputButton').on('click',buttonClick);
    $('.tableOutput').on('click', '#deleteButton', theDeleter)
    console.log('ready now');
 }

 function buttonClick() {
     //This initializes an employee-object, and retrieves values from the DOM to be stored in this object
     let employee={
        firstName:$('.firstInput').val(), 
        lastName:$('.lastInput').val(),
        idNumber:$('.idInput').val(),
        jobTitle:$('.titleInput').val(),
        annualSalary: Number($('.salaryInput').val())
    }
    //This pushes employee data from the local variable to the global employee array
    employeeArray.push(employee);

    //This appends employee data to the DOM
    $('.tableOutput').append(`<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.idNumber}</td>
    <td>${employee.jobTitle}</td>
    <td class="salaryRow" >${employee.annualSalary}</td>
    <td><button id="deleteButton" >Delete</button></td></tr>`)//appends a delete button

    //This refers to a funtion that'll handle the employee salary counter
    salaryCalculator((employee.annualSalary))
    


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

 

function theDeleter(){
    console.log('the deleter is being run');

    // console.log('This is:');
    // $(this).parent('tableOutput');
    // console.log('What is "this"?', ($(this).empty()));


    

    console.log('What is "this"?', ($(this).parent().child('.salaryRow')));
    console.log('What is "this"?', ($(this).parent().parent().remove()));
    // $(this).parent('tableOutput').empty();
    //update salary
    salaryCalculator(-1200);
}

function salaryCalculator(salary){
    console.log('inide salaryCalculator');
    
    monthlyCosts += (salary/12)
    $('.costOutput').empty()
    $('.costOutput').append(monthlyCosts)
}
