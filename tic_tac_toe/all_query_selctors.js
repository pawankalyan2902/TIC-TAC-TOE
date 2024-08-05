let edit = document.querySelectorAll("button.button_of_edit");//new code
//newly added code
let player_id_value = 0;
//an object to store the anme and symbol
let player = [
    {
        names: "",
        symbol: "x",
    },
    {
        names: "",
        symbol: "o",
    }
]
//board_elemnts array
j = 2;
let z=0;
board_info = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
let win=0;
let draw = 0;
//display and rmove overlays
let overlay = document.querySelector(".overlayaside");
let backdrop = document.querySelector(".backdrop");

//input of overlays
let confirm_a = document.querySelector("#confirm_a");
let cancel_a = document.querySelector("#cancel_a");

//forms
let forms = document.querySelector("form");
let alert_content = document.querySelector("#alert");

//for setting the name of player
let pn1 = document.querySelector("#player_name1");
let pn2 = document.querySelector("#player_name2");

//board games
const displays = document.querySelector("#js_display");
//new code
i = 0;
let squarebox_content = document.querySelectorAll(".input_element");
let list = document.querySelectorAll("#board_elements li ");



//switching statements
let switch_names = document.querySelector("#names")
//winning
let wining_content = document.querySelector("#winning_text");
n = 0;
let naming = document.querySelector("#name");
let winner_name_display = document.querySelector("#winner_name_display")






//about input 
let input = document.querySelector("input");




