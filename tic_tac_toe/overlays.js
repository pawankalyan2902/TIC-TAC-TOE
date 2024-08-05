//this bring the overlay to display edit(onclick)

function overlays(event) {
    overlay.style.display = "block ";//not important
    backdrop.style.display = "block";
    player_id_value = event.target.dataset.player;//+will convert '1'to 1 
    console.log(player_id_value);
}
edit[0].addEventListener("click", overlays);
edit[1].addEventListener("click", overlays);
//This works on  inside  overlay
function cancel() {
    overlay.style.display = "none ";//not important
    backdrop.style.display = "none ";
    user.classList.remove("user_name");
    input.classList.remove("js_input");
    alert_content.textContent = "";
    input.value = "";//refreshs the input value
}
cancel_a.addEventListener("click", cancel);
backdrop.addEventListener("click", cancel);

// forms and getting data
function form_operation(event) {
    event.preventDefault();//remove the default event occured
    const form_data = new FormData(forms);//instantiating an object and (gives the html id of the targeted elment{js selector forms})
    let name = form_data.get("player_name").trim();
    // new code added
    console.log(name);
    if (!name) {
        console.log("name")
        alert_content.textContent = "Please enter your name";
        user.classList.add("user_name");
        input.classList.add("js_input");
        return;
    }
    else if (player_id_value == 1) {
        pn1.innerHTML = name;
    }
    else {
        pn2.innerHTML = name;
    }
    player[player_id_value - 1].names = name;
    console.log(player[player_id_value - 1].names);
    cancel()//close the player 
    
}
forms.addEventListener("submit", form_operation);



