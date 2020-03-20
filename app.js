var randn_no = '25';
var submit_no;

var num_list = [];

var count = 0;

document.querySelector('#submitguess').addEventListener('click', (e) => {
    //when user clicks on submit button after entering number
    submit_no = document.querySelector('#guessField').value;
    if(submit_no!=='')
    {
        
        num_list.push(submit_no);
        document.getElementById('num-list').innerHTML = num_list;
        document.querySelector('#guessField').value='';

        if(submit_no === randn_no)  //when guessed number is correct
        {
            document.getElementById('alert').innerHTML = `<div class="success">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong> Congratulations! You got it right! </strong>
            </div>`;

            document.getElementById('restart-game').innerHTML = `<input type = "submit" value = "Start new game" 
            class = "guessSubmit" id = "restart">`

            document.getElementById("submitguess").disabled = true;   //disable submit button
        }

        else if(randn_no !== submit_no)   //when guessed number is incorrect
        { 
            count++;
            document.getElementById('alert').innerHTML = `<div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong> Wrong! </strong>
            </div>`;
        }
    }
    if(count === 5) //when 10 guesses are done restart the game
    {
        document.getElementById('restart-game').innerHTML = `<input type = "submit" value = "Start new game" 
        class = "guessSubmit" id = "restart">`

        document.getElementById("submitguess").disabled = true;   //disable submit button
    }
    else
    {
        if(submit_no > randn_no)
        {
            document.getElementById('restart-game').innerHTML = `<p> Last guess was too high </p>`
        }
        else if(randn_no > submit_no)
        {
            document.getElementById('restart-game').innerHTML = `<p> Last guess was too low </p>`
        }
    }
});

document.querySelector('#restart-game').addEventListener('click', () => {
    location.reload();
});



 
