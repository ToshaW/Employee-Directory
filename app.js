
//1. View option that displays all employee info
const render = function() {
       $('.list').empty(); 
  
    let employee=``;
    for ( let i = 0; i < employeeList.length; i++ ) {
    employee+= `<p>${employeeList[i].name}<p/><p>${employeeList[i].officeNum}<p/><p>${employeeList[i].phoneNum}<p/>`;
    console.log (employeeList[i]);
    }
    $('.list').html(employee);
  }  
  render();
 
  //2. Add option that allows users to input name, office number, and phone number and then renders the updated employee list.

  const Add = function() {
    const newEmployee = {
    name: name, 
    officeNum: officenumber, 
    phoneNum: phonenumber
  }
    const name = $('#Name').val();
    const officenumber = $('#Office').val();
    const phonenumber = $('#Phone').val();
    employeeList.push(newEmployee);
    render ();   
 }
 $('#Submit').on('click', Add());
 $('#view').on('click', render());
 
  //3. Verify option that allows users to input a name and renders yes if the employee exists and no otherwise.
  const verify = function() {
    const nameVal = $('name').val();
    if(employeeList.includes(nameVal)) {
    $('name').addClass('yes');
    }
  }

  $('search').on('click', render());

  //4. Update  option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.


  //5. Delete option that deletes the employee with the matching name and then renders the updated employee list.

  const removeName = function() {
    const nameVal = $('name').val;
    employeeList.splice(employeeList.indexOf(nameVal),1);
    $('name').val('')
    render();
  }
  $('#delete').on('click', removeName);
