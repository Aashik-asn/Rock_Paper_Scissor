let rock=document.querySelectorAll(".option");
let user_score=document.querySelector(".user-score");
let bot_score=document.querySelector(".bot-score");
let desc=document.querySelector(".desc")

const comp=()=>{
    let choice=["Rock","Paper","Scissor"];
    let idx=Math.floor(Math.random()*3);
    return choice[idx];
}

rock.forEach((value)=>{
    value.addEventListener("click",(e)=>{
        let user_choice=e.target.getAttribute('alt');
        let comp_choice=comp();
        if(user_choice==comp_choice){
            desc.innerText=`Draw!!! Both chosen ${user_choice}`
            desc.style.backgroundColor="grey"
        }else{
            if((user_choice=="Rock" && comp_choice=="Scissor") || 
            (user_choice=="Paper" && comp_choice=="Rock")|| 
            (user_choice=="Scissor" && comp_choice=="Paper")){
                desc.innerText=`You won!!! ${user_choice} wins ${comp_choice}`;
                desc.style.backgroundColor="green";
                user_score.innerText=`${parseInt(user_score.innerText)+1}`;
            }else{
                desc.innerText=`You lost!!! ${comp_choice} wins ${user_choice}`;
                desc.style.backgroundColor="red";
                bot_score.innerText=`${parseInt(bot_score.innerText)+1}`;
            }
        }
    })
})



