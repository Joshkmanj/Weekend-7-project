$(document).ready(readyNow)

//Initialized array for employees to be stored in, which isn't actually utilized for this particular project, but it can be
// used for more functionality later. As of current, the employee array stores the information of employees past and present,
let employeeArray =[];
//Global variable created to hold an un-abridged total of the combined annual salaries
let totalAnnualSalary= 0;


 function readyNow(){
     //Have all my inputs ready to go once page loads
    $('.inputButton').on('click',buttonClick);
    $('.tableOutput').on('click', '#deleteButton', theDeleter) //Since the delete button isn't available on page-load, parent('.tableOutput) must be targeted initially
    console.log('ready now');
 }


 function buttonClick() {
     //This initializes an employee-object, and uses JQuery to retrieves values from the DOM to be stored in this locally stored object
     let employee={
        firstName:$('.firstInput').val(), 
        lastName:$('.lastInput').val(),
        idNumber:$('.idInput').val(),
        jobTitle:$('.titleInput').val(),
        annualSalary: Number($('.salaryInput').val())
    }

    //This pushes employee data from the local variable to be stored on the global employee array
    employeeArray.push(employee);

    //This appends employee data to the DOM
    $('.tableOutput').append(`<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.idNumber}</td>
    <td>${employee.jobTitle}</td>
    <td class="salaryRow" >${employee.annualSalary}</td>
    <td><button id="deleteButton" >Delete</button></td></tr>`)//appends a delete button

    //This calls a funtion that'll handle the employee salary counter
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

    //This goes up to the parent of the element being clicked and then back down to the salary data cell
    //and retrieves the text of that cell as a string, and sets it equal to a local variable 'lostSalary'
    let lostSalary = $(this).parents('tr').children('.salaryRow').text();  //.val isn't used because that is meant for retrieving values from input fields, not html elements

    //This multiplication will cause the string to convert into a number, which is purposely negative.
    lostSalary= -1 * lostSalary
    console.log('Salary being removed is:', lostSalary);
    
    //update total salary with a negative number
    salaryCalculator(lostSalary);

    //This removes the parent row that contains all the employee's data.
    $(this).parents('tr').remove();  //This jumps straight up to the ancestor that's specified in quotes, and removes it from the HTML.
    // $(this).parent().parent().remove();// This achieves the same thing, but goes up one parent at a time.
}//End deleter function

function salaryCalculator(salary){
    console.log('inide salaryCalculator');

    //This updates the global totalAnnualSalary variable
    totalAnnualSalary += salary

    //This creates a local monthlyCost variable that is converted to a string when rounded to the 2nd decimal place.
    let monthlyCosts = (totalAnnualSalary/12).toFixed(2)

    //This empties the costOutput field and appends the new value 
    $('.costOutput').empty()
    $('.costOutput').append('$'+ monthlyCosts) //toFixed(2) makes the number round to the nearest hundredth place decimal

    //This filter changes the css color based on the totalAnnualSalary, since the monthlyCosts variable is a string
    if ( (totalAnnualSalary/12) > 20000 ){
        console.log('Cost is too high');
        $('.costOutput').parent().css("background-color", "red")
        $('.costOutput').parent().css("box-shadow", "0px 0px 20px red")
    }else if( (totalAnnualSalary/12) > 10000){
        $('.costOutput').parent().css("background-color", "#ffa800")
        $('.costOutput').parent().css("box-shadow", "0px 0px 20px #ffa800")
    } else{
        $('.costOutput').parent().css("background-color", "rgb(93, 196, 84)")
        $('.costOutput').parent().css("box-shadow", "0px 0px 20px greenyellow")
    }//end color filter
}//End salaryCalculator
