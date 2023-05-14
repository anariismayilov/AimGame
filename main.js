
var cursor = document.querySelector(".fa-crosshairs")
var score = document.querySelector(".scorecount")
var enemy = document.querySelectorAll(".enemy")
document.addEventListener('mousemove', function(e){  
    cursor.style.transform = `translate3d(calc(${e.clientX}px + 10px), calc(${e.clientY}px), 0)`
  });

  for (let i = 0; i < enemy.length; i++) {
    enemy[i].addEventListener("click", (e) => {
        console.log(e.currentTarget.id);
        if (e.currentTarget.id==="mid" || e.currentTarget.id==="right" || e.currentTarget.id==="left")
        {
            console.log(e.currentTarget.id);
            score.innerHTML=Number(score.innerHTML)+1      
            enemy[i].style.display=""
}
    })
}
function Startgame() {
    var timeinterval=Math.random() * 4000 + 1000
    var enemycount = Math.ceil(Math.random()*3)
    setTimeout(() => {
        if (enemycount===1) {
            enemy[0].style.display = "block"      
        }
        else if (enemycount===2) {
            enemy[1].style.display = "block"      
        }
        else  {
            enemy[2].style.display = "block"      
        }

       
        // dot.id = "press"
        setTimeout(() => {
            if (enemycount===1) {
                enemy[0].style.display = ""      
            }
            else if (enemycount===2) {
                enemy[1].style.display = ""      
            }
            else  {
                enemy[2].style.display = ""      
            }
                             
            Startgame()
        }, 2000)
    },timeinterval)
}
Startgame()
console.log(enemy.length);
