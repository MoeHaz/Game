/*  
*Two important  things in this program so far.

1- location array: in this array I learend taht an array can have (objects{}) and these objects can have (keys and valuses) and (arrys).

2-the second important thing is : the (update function()) the pur  purpose of having is to implement some actions from the location array on other function in the program, meaning instead  of 
having a code body instead each function in the program, we created one function (update()) and we called it in other functions.




*/






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

 function update(location) {    // the location variable is an array peremeter
      // output to the console/screen
      
      button1.innerText = location["button text"][0];// the innerText function is used to add text, and here we used a button that we already have and we add a text for it.
      button2.innerText = location["button text"][1];
      button3.innerText = location["button text"][2];
      button1.onclick = location["button functions"][0];
      button2.onclick = location["button functions"][1];
      button3.onclick = location["button functions"][2];
    text.innerText = location.text;

 }


// Declare an array 
let inventory = ["stick"];

const weapons = [
    {
        name : "stick",
        power : 5
  
    },

    {
      name : "dagger",
      power : 30
    },
      {
        name: "claw hammer",
        power : 50
      },
      {
        name : "sword",
        power : 100
      }
];

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
        
      },
      { 
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text : "You enter the cave. You see some monsters." 
      },

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

function goTown() {    // the goTown and goStore should be empty

    update(locations[0]);  // pass the first object ofthe array

    //console.log("Going to store.");  // output to the console/screen
    // button1.innerText = "Go to store";  // the innerText function is used to add text, and here we used a button that we already have and we add a text for it.
    //     button2.innerText = "Go to cave";
    //     button3.innerText = "Fight dragon";
    //     button1.onclick = goStore;
    //     button2.onclick = goCave;
    //     button3.onclick = fightDragon;
    //     text.innerText = "You are in the town square. You see a sign that says \"Store\".";
     
}


function goStore() {
    

    update(locations[1]);       // step 68


    // console.log("Going to store.");  // output to the console/screen
    // button1.innerText = "Buy 10 health (10 gold)";  // the innerText function is used to add text, and here we used a button that we already have and we add a text for it.
    // button2.innerText = "Buy weapon (30 gold)";
    // button3.innerText = "Go to town square";
    // button1.onclick = buyHealth;   /* the onclick is there to do an action if the user click the button   */
    // button2.onclick = buyWeapon;
    // button3.onclick = goTown;
    // text.innerText = "You enter the store.";
  

}

// three empty functions

function buyHealth() {
    
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
      } else {
        text.innerText = "You do not have enough gold to buy health."
    
      }
}

function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
    goldText.innerText = gold;
    let newWeapon = weapons;
    text.innerText = "You now have a new weapon."
  }
}

// step 69 

function fightSlime() {

} 

function fightBeast(){
    
}



// step 38 
function goCave() {
    update(locations[2]);
}

// step 39
function fightDragon() {
    console.log("Fighting dragon.");
}

// step 41 how to do an action when a uesr hite one of the buttons.

/* button1 represents your first button element. These elements have
  a special property called (onclick), which you can use to determine
   what happens when someone clicks that button.*/

  