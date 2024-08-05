function board_games()
{
    i=0;
    j=2;
  
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
             board_info[i][j]=0;
        }
        console.log(board_info);
    }
    for(let i=0;i<9;i++)
    {
        console.log("1");
        squarebox_content[i].textContent="";
        list[i].style.backgroundColor=" rgb(243, 227, 255)";
    }

    wining_content.style.display="none";

}

//forms
function boarddisplay() {
    if (!(player[0].name || player[1].names))//an empty string is false
    {
        alert("Please enter your names ")
        return;
    }
    switch_names.innerHTML = player[0].names;
    displays.style.display = "block";
    console.log(player);
    if(naming)
    {
        board_games();
    }
}




function box_content(event) {
    //overwriting is prohibited using the code if
    row_of_content = event.target.dataset.row;
    column_of_content = event.target.dataset.col;
    if (board_info[row_of_content][column_of_content] != 0 )//code if
    {
        alert("PLease fill the space which is not filled");
        return;
    }
   
    //code begins form here when clicked for the first time
    let position_value = event.target.dataset.position_info_of_box;
    console.log(position_value);
    if (i != 9) {
        //this for player 1
        if (j == 2) {
            squarebox_content[position_value - 1].textContent = player[0].symbol;
            switch_names.innerHTML = player[1].names;
            j--;

        }
        else {
            squarebox_content[position_value - 1].textContent = player[1].symbol;
            switch_names.innerHTML = player[0].names;
            j++;
        }
        event.target.style.backgroundColor = "rgb(112, 13, 214)";
        i++;
    }
    board_info[row_of_content][column_of_content] = j;
    //new code

    // if(win==1||win==2)
    // {
    //     squarebox_content[position_value - 1].textContent ="";
    //     list[position_value - 1].style.backgroundColor=" rgb(243, 227, 255)";

    // }
    winner();
    
}
//newly learnt important
// for (let i = 0; i < 9; i++) //instead of using multiple event listner use this 
// {
//     list[i].addEventListener("click", box_content);
// }
displays.addEventListener("click", box_content);//by using parent element we can add event listners to all child



//game over
function gameover() {
    //for checking in rows
    for (let k = 0; k < 3; k++) {
        if (board_info[k][0] > 0 && board_info[k][0] == board_info[k][1] && board_info[k][0] == board_info[k][2]) {
            console.log("row");
            return board_info[k][0];
        }
    }
    //for checking in columns
    for (let k = 0; k < 3; k++) {
        if (board_info[0][k] > 0 && board_info[0][k] == board_info[1][k] && board_info[0][k] == board_info[2][k]) {
            console.log("column");
            return board_info[0][k];
        }
    }
    //for checking digonals and winner=0 for 1st position when clicked
    if ((board_info[0][0] > 0 || board_info[2][0] > 0) && (board_info[0][0] == board_info[1][1] && board_info[0][0] == board_info[2][2] || board_info[2][0] == board_info[1][1] && board_info[2][0] == board_info[0][2])) {
        console.log("diagonal");
        return board_info[1][1];
    }
    if (i == 9) {
        draw = 3;
        return draw;
    }
    return 0;
}
function winner() {
    win = gameover();
    if (win ==1) {
        wining_content.style.display = "block";
        naming.innerHTML="You won, "+player[0].names;
        
    }
    if (win ==2) {
        naming.textContent ="You won, "+player[1].names;
        wining_content.style.display = "block";
    }
    
   if(win == 3) {
        wining_content.style.display = "block";
        naming.textContent = " It\'s a draw";
    }

}


