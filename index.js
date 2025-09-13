const colors=["red","green","blue","yellow"];

let gamePattern=[];
let userPattern=[];

let started=false;
let level=0;
let index=0;

//key press
$(document).on("keydown", start);
//touch
$(document).on("touchstart", start);



//user clicks button
$(".btn").on("click",function() {
    if(!started) return;
    let color=$(this).attr("id")
    userPattern.push(color);//adds color
    check(); 
    playSound(color);
    $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    animate(color);
});






function start () {
    if(!started) {
        newColor();
        $("#level-title").text("Level "+level);
        started=true;
    }
}
function newColor() {
    userPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    randomColor=colors[Math.floor(Math.random()*4)];
    gamePattern.push(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
function playSound(name) {
    new Audio("./sounds/"+name+".mp3").play();
}
function animate(name) {
    $("#"+name).addClass("pressed");
    setTimeout(()=> {
        $("#"+name).removeClass("pressed");
    },100)
}

function check() {
    if(gamePattern[index]===userPattern[index]) {
        index++;
        if(gamePattern.length===userPattern.length){//same length 
            setTimeout(()=> {
                newColor();
            },1000);
            index=0;
        }
    }
    else {
        new Audio("./sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        setTimeout(()=> {
            $("body").removeClass("game-over");
        },20);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        

        started=false;
        level=0;
        gamePattern=[];
    }
}


