const prompt = require('prompt-sync')({sigint: true});


/*

user needs a prompt to add new to do items
The number of to do items displays to the user (index: Item)


a list of todo items is displayed to the users (itemName.length)
if statement for if there are no items entered and they haven't entered a 
valid action.

userprompt to change from complete to incomplete using an action

that action prompts for a item to be changed


1. Figure out the UI
-Console.log()
 - welcome message
  - different options (add a task, complete task or exit program)
  -error messages for invalid options
  -spacing/seperators to make it look nice

-prompts
  -which option to do number prompt number to decide which option
   1 adding a task
   2 marking task as complete
   3 exit 

- while loop 
program has no known ending so we want to be able to 
prompt them indefinitely until they decide to exit 

- display todo list to the user
-completion status 
 - the name of the item 
  - the number associated with the item 
- loop to display each item in the toDo list


2. add to do items 
-prompt for the to do item
- save the item by storing it in an array . push
- an array to keep track of to do items - global variable


2.5. - how do we set items to be incomplete
any item on the list is incomplete until we make it complete
- whenever we add an item to the to do list the item is incomplete by default
let completeStatus = toDoList + [incomplete];

array of booleans
[true, false, true,]
[walk dog, get food , run mile]
 0           1            2     shared index

let status = []
by default when we add a new item we want to add
false boolean to our status array.
3. complete to do items 
-display items in the toDo list with thier status 
-pick which to do item to mark as complete - wap its status
from false to true 
-display updated list 






*/






console.log("Welcome to the To-Do App");
console.log("========================");
console.log("");
console.log("");

console.log("~~Select an Action~~");
console.log("[1] Create a to-do list ");
console.log("[2] Complete a to-do item ");
console.log("[3] Exit To-Do List Application ");


let option = Number(prompt('> '));
let toDoList= [];
let status = [];

while(option !==3) 
{
  if(option === 1) 
   { 
   console.log("~Create a new To-Do item~");
   console.log("What is the item called?");

   //add to do item

   let addItem = prompt("> ");

    while(addItem.length ===0)
    {
    console.log("Invalid: Input cannot be empty. Try Again. ")
    addItem = prompt("> ");
    }

   toDoList.push(addItem);
   status.push(false);


   displayList();


   //reprompt the user
   selectOption();
   
   } else if (option === 2)
   {

   console.log("~Completing To-Do Item~");
   console.log("");
   console.log(" which item would you like to complete?");
   displayList();

   let newStatus = Number(prompt('> '));

    while(isNaN(newStatus) || newStatus > status.length || newStatus < 1)
     {
     console.log("Please input a number that corresponds with an item in the list: ");
     newStatus = Number(prompt('> '));
     }


   status[newStatus-1]= true;
     
   //complete an item 
   

   displayList()
   //reprompt the user
   selectOption();

  } else { 
    
    console.log("invalid operation")
    selectOption();}
}

//exiting the application
console.log('~ Exiting To-do List Application ~');



function selectOption()
{
   console.log("~~Select an Action~~");
   console.log("[1] Create a to-do list ");
   console.log("[2] Complete a to-do item ");
   console.log("[3] Exit To-Do List Application ");
   option = Number(prompt('> '));
}



function displayList()
{
    if(toDoList.length === 0)
    {
        console.log("Your to-do list is empty.");
        
    } else 
    {
        console.log(`You have ${toDoList.length} to-do item(s)`);
    }


    for(let i = 0; i < toDoList.length; i++)
    {
        let statusValue = "";
        if (status[i] === false)
        {
            statusValue = "[INCOMPLETE]";
            
        } else if ( status[i] === true)
        {
            statusValue = "[COMPLETE]";
        }

        console.log(` ${i+1}. ${statusValue} ${toDoList[i]}`); 
    }
}