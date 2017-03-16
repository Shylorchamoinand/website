function quest() {
// Define game variables
var inventory = ["BOOK"];
var floor1 = ["GUN", "BANANA"];
var floor2 = ["STICK"];
var gameclear = false;
var area = "1";
var goWhere = "";
var approvalRating = 0;
var zombiesInArea = 0;
var usedItem = "none";
var floor1len = 0;
var invlen = 0;
var currentfloor1, currentfloor2, currentfloor3, currentfloor4, currentfloor5, currentfloor6, currentfloor7, currentfloor8, currentfloor9 = "";
var currentinv = "";
function floor1List() {
    floor1len = floor1.length;
    for (i = 0; i < floor1len; i++) {
    currentfloor1 = currentfloor1 + floor1[i] + ", ";
} //end for loop
}
 function floor2List() {
    floor2len = floor2.length;
    for (i = 0; i < floor2len; i++) {
    currentfloor2 = currentfloor2 + floor2[i] + ", ";
 } //end for loop
} //end floor2List
function invList() {
    invlen = inventory.length;
    for (i = 0; i < invlen; i++) {
    currentinv = currentinv + inventory[i] + ", ";
} //end for loop
} //end invList

// Begin the game

while (gameclear === false) {
     alert("Oh hai o' o' o'! Nice o' welcome to the Ice o' Quest o' o' o'.");
    // Begin in Area One
    while (area === "1" && gameclear === false) {
        // Ask for a command
        var area1decision = prompt("Nice o' you stand o' o' in an ice o' forest. Ice o' snow o' o' o' is falling o' o'. (Type o' o' HELP for ice o' help, or type o' o' an ice o' command!)");
        if(area1decision.toUpperCase() === "HELP") {
        alert("Nice o' you can o' o' use o' o' the following Ice o' commands: HELP, LOOK, USE, DROP, TAKE, INVENTORY, GO.");
        } else if (area1decision.toUpperCase() === "LOOK") { // end help
            floor1List();
        alert("Nice o' you look o' o' around o' ice. Nice o' you see o' o' on the ice o' ground the following: " + currentfloor1 + "and to the ice o' west nice o' you see o' o' your ice o' campsite." );
        currentfloor1 = "";
        } else if (area1decision.toUpperCase() === "USE") { // end look
        var usedItem = prompt("Ice o' what are nice o' you trying o' o' to use o' o'?").toUpperCase();
        var usedIndex = inventory.indexOf(usedItem);
         if (usedIndex >= 0) { // if item in inventory
            if (usedItem === "BOOK") { // if using the book
                alert("Nice o' you open o' o' the ice o' Book. The ice o' title reads o' o' ''Nice o' Guide to Icish''!");
                alert("The first o' ice nice o' page reads ''Ice o' Guide to Icish Grammar''. It explains o' o' that ice o' nouns must be prefixed o' o' with ''ice o''', ice o' adjectives must be suffixed with ''o' ice'', and ice o' verbs must o' o' end in ''o' o'''.");
                alert("The next o' ice ice o' page explains o' o' that ''nice'' is o'o' the ice o' equivalent of ''yes'', and conversely o' ice ''*mmh??*'' means o' o' ''no''.");
                alert("Nice o' you would like o' o' to continue reading o' o', but nice o' your ice o' brain hurts o' o' too much o' ice. Nice o' you close o' o' the ice o' book.");
            } else if (usedItem === "GUN") {
                var shootItem = prompt("Ice o' what do nice o' you want o' o' to shoot o' o'?").toUpperCase();
                if (shootItem === "ME" || shootItem === "MYSELF" || shootItem === "NICE O' ME") { // shoot yourself
                    alert("Nice o' you shoot o' o' nice o' yourself in nice o' your OH BAI. Nice o' you immediately o' ice die o' o'.");
                    area = -1;
                } else { // if shooting something else
                floor1List();
                shotItem = floor1.indexOf(shootItem);
                 if (shotItem >= 0) { // if shot item on floor1
                    alert("Nice o' you put a couple o' ice ice o' bullets into the ice o' " + shootItem + ". Nice o' you feel good o' ice about yourself.");
                 } else {
                    alert("Nice o' you look o' o' around o' ice, but can't seem to find o' o' a/an " + shootItem + " to shoot o' o'.");
                 } // end use gun
            }
        }
            } else {
             alert("Nice o' you don't seem o' o' to have o' o' a/an " + usedItem + " to use o' o'.");
             } // end use item
        } else if (area1decision.toUpperCase() === "TAKE") { // end use
         floor1List();
         var takeItem = prompt("Ice o' what are nice o' you trying o' o' to take o' o'? (" + currentfloor1 + " )").toUpperCase();
         currentfloor1 = "";
            var takenItem = floor1.indexOf(takeItem);
                if (takenItem >= 0) { // if its an actual item
                    alert("Nice o' you pick o' o' up o' Ice the ice o' " + takeItem + " and put o' o' it in nice o' your ice o' bag.");
                    inventory[inventory.length] = takeItem;
                    floor1List();
                    var thetakenitems = floor1.splice(takenItem, 1);
                    currentfloor1 = "";
                } // end taking an item
        } else if (area1decision.toUpperCase() === "INVENTORY") {
         invList();
        alert("Nice o' you check o' o' your ice o' bag. Nice o' you have o' o' the ice o' following: " + currentinv + "." );
        currentinv = "";
        } else if (area1decision.toUpperCase() === "DROP") {
        invList();
         var dropItem = prompt("Ice o' what are nice o' you trying o' o' to drop o' o'? (" + currentinv + " )").toUpperCase();
         currentinv = "";
            var droppedItem = inventory.indexOf(dropItem);
                if (droppedItem >= 0) { // if its an actual item
                    alert("Nice o' you drop o' o' the ice o' " + dropItem + ". It falls o' o' on the ice o' ground.");
                    floor1[floor1.length] = dropItem; // Add the item you dropped to the floor1
                    var thedroppeditems = inventory.splice(droppedItem, 1); // Take the dropped item out of your inv
                } else if (dropItem === "BASS" || dropItem === "THE BASS") { // DROP THE BASS
                    alert("Nice o' you drop o' o' the ice o' bass o' o' o'! The Nice One approves o' o'.");
                    approvalRating++;
                } else { // invalid answer
                    alert("Nice o' you don't o' ice have o' o' any of ice o' that to drop o' o'.");
                } // end dropping an item
        } else if (area1decision.toUpperCase() === "GO") { // end take
            goWhere = prompt("Which o' ice ice o' way do nice o' you want o' o' to go o' o'? (Try o' o' NORTH, SOUTH, EAST, or WEST.)").toUpperCase();
                if (goWhere === "NORTH") {
                    alert("Nice o' you head o' o' ice o' north o' o' o'.");
                    area = "9";
                } else if (goWhere === "WEST") {
                    alert("Nice o' you head o' o' ice o' west.");
                    area = "8";
                } else if (goWhere === "EAST") {
                    alert("Nice o' you head o' o' ice o' east.");
                    area = "2";
                } else {
                    alert("Nice o' you try o' o' to go o' o' " + goWhere + ", but walk o' o' straight o' ice into o' ice an ice o' tree.");
                }
        } else { //end go
        alert("Ice o' that *mmh* a valid o' ice ice o' answer! Try o' o' typing o' o' HELP for ice o' help.");
        }
    } //end area1

    while (area === "2" && gameclear === false) {
        // Ask for a command
        var area2decision = prompt("Nice o' you are o' ice in an ice o' forest. The ice o' trees grow o' o' denser o' ice to the east. (Type o' o' HELP for ice o' help, or type o' o' an ice o' command!)");
        if (area2decision.toUpperCase() === "HELP") {
        alert("Nice o' you can o' o' use o' o' the following Ice o' commands: HELP, LOOK, USE, DROP, TAKE, INVENTORY, GO.");
        } else if (area2decision.toUpperCase() === "LOOK") { // end help
            floor2List();
        alert("Nice o' you look o' o' around o' ice. Nice o' you see o' o' on the ice o' ground the following: " + currentfloor2 + "and nice o' you don't o' o' see o' o' much o' ice nearby." );
        currentfloor2 = "";
        } else if (area2decision.toUpperCase() === "USE") { // end look
        var usedItem = prompt("Ice o' what are nice o' you trying o' o' to use o' o'?").toUpperCase();
        var usedIndex = inventory.indexOf(usedItem);
         if (usedIndex >= 0) { // if item in inventory
            if (usedItem === "BOOK") { // if using the book
                alert("Nice o' you open o' o' the ice o' Book. The ice o' title reads o' o' ''Nice o' Guide to Icish''!");
                alert("The first o' ice nice o' page reads ''Ice o' Guide to Icish Grammar''. It explains o' o' that ice o' nouns must be prefixed o' o' with ''ice o''', ice o' adjectives must be suffixed with ''o' ice'', and ice o' verbs must o' o' end in ''o' o'''.");
                alert("The next o' ice ice o' page explains o' o' that ''nice'' is o'o' the ice o' equivalent of ''yes'', and conversely o' ice ''*mmh??*'' means o' o' ''no''.");
                alert("The next o' ice ice o' page sings o' o' the ice o' praises of the ice o' almighty Nice One, the nice o' deity of your o' ice ice o' people!");
                alert("Nice o' you would like o' o' to continue reading o' o', but nice o' your ice o' brain hurts o' o' too much o' ice. Nice o' you close o' o' the ice o' book.");
            } else if (usedItem === "GUN") {
                var shootItem = prompt("Ice o' what do nice o' you want o' o' to shoot o' o'?").toUpperCase();
                if (shootItem === "ME" || shootItem === "MYSELF" || shootItem === "NICE O' ME") { // shoot yourself
                    alert("Nice o' you shoot o' o' nice o' yourself in nice o' your OH BAI. Nice o' you immediately o' ice die o' o'.");
                    area = -1;
                } else { // if shooting something else
                 floor2List();
                 shotItem = floor2.indexOf(shootItem);
                  if (shotItem >= 0) { // if shot item on floor2
                    alert("Nice o' you put a couple o' ice ice o' bullets into the ice o' " + shootItem + ". Nice o' you feel good o' ice about yourself.");
                  } else {
                    alert("Nice o' you look o' o' around o' ice, but can't seem to find o' o' a/an " + shootItem + " to shoot o' o'.");
                  } // end use gun
            }
        }
            } else {
             alert("Nice o' you don't seem o' o' to have o' o' a/an " + usedItem + " to use o' o'.");
             } // end use item
        } else if (area2decision.toUpperCase() === "TAKE") { // end use
         floor2List();
         var takeItem = prompt("Ice o' what are nice o' you trying o' o' to take o' o'? (" + currentfloor2 + " )").toUpperCase();
         currentfloor2 = "";
            var takenItem = floor2.indexOf(takeItem);
                if (takenItem >= 0) { // if its an actual item
                    alert("Nice o' you pick o' o' up o' Ice the ice o' " + takeItem + " and put o' o' it in nice o' your ice o' bag.");
                    inventory[inventory.length] = takeItem;
                    floor2List();
                    var thetakenitems = floor2.splice(takenItem, 1);
                    currentfloor2 = "";
                } // end taking an item
        } else if (area2decision.toUpperCase() === "INVENTORY") {
         invList();
        alert("Nice o' you check o' o' your ice o' bag. Nice o' you have o' o' the ice o' following: " + currentinv + "." );
        currentinv = "";
        } else if (area2decision.toUpperCase() === "DROP") {
        invList();
         var dropItem = prompt("Ice o' what are nice o' you trying o' o' to drop o' o'? (" + currentinv + " )").toUpperCase();
         currentinv = "";
            var droppedItem = inventory.indexOf(dropItem);
                if (droppedItem >= 0) { // if its an actual item
                    alert("Nice o' you drop o' o' the ice o' " + dropItem + ". It falls o' o' on the ice o' ground.");
                    floor2[floor2.length] = dropItem; // Add the item you dropped to the floor2
                    var thedroppeditems = inventory.splice(droppedItem, 1); // Take the dropped item out of your inv
                } else if (dropItem === "BASS" || dropItem === "THE BASS") { // DROP THE BASS
                    alert("Nice o' you drop o' o' the ice o' bass o' o' o'! The Nice One approves o' o'.");
                    approvalRating++;
                } else { // invalid answer
                    alert("Nice o' you don't o' ice have o' o' any of ice o' that to drop o' o'.");
                } // end dropping an item
        } else if (area2decision.toUpperCase() === "GO") { // end take
            goWhere = prompt("Which o' ice ice o' way do nice o' you want o' o' to go o' o'? (Try o' o' NORTH, SOUTH, EAST, or WEST.)").toUpperCase();
                if (goWhere === "NORTH") {
                    alert("Nice o' you head o' o' ice o' north o' o' o'.");
                    area = "0";
                } else if (goWhere === "WEST") {
                    alert("Nice o' you head o' o' ice o' west.");
                    area = "1";
                } else {
                    alert("Nice o' you try o' o' to go o' o' " + goWhere + ", but walk o' o' straight o' ice into o' ice an ice o' tree.");
                }
        } else { //end go
        alert("Ice o' that *mmh* a valid o' ice ice o' answer! Try o' o' typing o' o' HELP for ice o' help.");
        }
    } //end area2
    
   // INSERT AREAS 3-9 HERE

    // INSERT CAVE HERE

    while (area === "0") {
        var lastDecision = prompt("Nice o' you stand o' o' ice o' in a vice o' clearing. There is an ice o' box on o' o' the ice o' ground. Snow o' flakes are falling o' o' gently o' ice.").toUpperCase();
         if (lastDecision === "USE" || lastDecision === "LOOK" || lastDecision === "TAKE") {
            alert("Nice o' you o' o' open the ice o' box and peer o' o' inside o' ice.");
            alert("Inside o' ice is a young, golden-haired o' ice nice o' boy sleeping o' o' on an ice o' bed of ice o' Nilla Wafers o' o' o'.");
            alert("Nice o' you feel o' o' an ice o' sense of ice o' completeness come o' o' upon you o' ice, and transcend o' o' ice o' mortality.");
            alert("Ice o' congratulations! Nice o' you found o' o' the almighty o' ice Nice One.");
            area = -1;
         } else { // end use on box
            alert("Nice o' you don't feel o' o' like " + lastDecision + "ing right now o' ice.");
         }
    } // end final area

    while (area === "-1") {
            gameclear = true;
    }
} // end game
// User has finished
if (approvalRating >= 5) {
    alert("The Nice One o' approves!");
}
alert("Ice o' thanks for playing o' o'!");
alert("This o' Ice Ice o' game was created o' o' by Nice o' Char Senki, with Nice o' Levi Wallace and o' o' the Nice One o' o' o' himself.");
}