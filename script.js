// lets declare some variables
// note: there is two ways to declare a variable in javascript (let) and (var). for now use let. dont ask why for now,lol.
let camperbot;
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;

 // thats how we initialize a function to a button
 button1.onclick = goStore;   // here we are saying when the user hite the (button1), call the (goStore) fuction and excute it.
 button2.onclick = goCave;    // now when the uesr hite button2, the function will output going to cave.
 button3.onclick = fightDragon;


 // create an empty function

 function update(location) {

 }


// Declare an array 
let inventory = ["stick"];

const locations = [
    // create the first object 
    { 
        name: "town squre",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],     // this is an array inside an object and that object is in an array
        "button functions" : [goStore, goCave, fightDragon],
        text : "You are in the town square. You see a sign that says \"Store\"."
    },    // dont forgetto add a comma so you can seprate the objects

      // creat the second object
      {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)",  "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
        
      }

];      // create an array that stors objects. An object is declared between two carly bracket   {}

// now we want the javaScript to interacts and do something to some elements in the html
// the document.querySelector("#button1"); Note this method take a css property ex if you want ti use (html id) you need to use ( the css id ) like this (#idName)  

const button1 = document.querySelector("#button1");  // the  document.querySelector("#button1"); method now gave us access to the (#button1) id  
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text= document.querySelector("#text");
const xpText= document.querySelector("#xpText");
const healthText= document.querySelector("#healthText");
const goldText= document.querySelector("#goldText");
const monsterStats= document.querySelector("#monsterStats");
const monsterName= document.querySelector("#monsterName");

// step 35 
const monsterHealthText = document.querySelector("#monsterHealth");

// step 36 , declare some functions

function goTown() {
    //console.log("Going to store.");  // output to the console/screen
    button1.innerText = "Go to store";  // the innerText function is used to add text, and here we used a button that we already have and we add a text for it.
        button2.innerText = "Go to cave";
        button3.innerText = "Fight dragon";
        button1.onclick = goStore;
        button2.onclick = goCave;
        button3.onclick = fightDragon;
        text.innerText = "You are in the town square. You see a sign that says \"Store\".";
     
}


function goStore() {
    
    console.log("Going to store.");  // output to the console/screen
    button1.innerText = "Buy 10 health (10 gold)";  // the innerText function is used to add text, and here we used a button that we already have and we add a text for it.
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;   /* the onclick is there to do an action if the user click the button   */
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
  

}

// three empty functions

function buyHealth() {

}

function buyWeapon() {

}



// step 38 
function goCave() {
    console.log("Going to cave.");
}

// step 39
function fightDragon() {
    console.log("Fighting dragon.");
}

// step 41 how to do an action when a uesr hite one of the buttons.

/* button1 represents your first button element. These elements have
  a special property called (onclick), which you can use to determine
   what happens when someone clicks that button.*/

  