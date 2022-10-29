var attackingName=prompt("Digite o nome do personagem de ataque:")
var power=prompt("Digite o quanto de dano causa o atacante:")
var defenseName=prompt("Digite o nome do personagem de defesa:")
var life=prompt("Digite quanto de vida tem a defesa:")
var shield=prompt("A defesa tem escudo?\n Digite 1 para Sim\n 2 para Não") 

while(shield<"1"||shield>"2"){
    alert(`Digite uma opção valida!`)
    shield=prompt("A defesa tem escudo?\n Digite 1 para Sim\n 2 para Não")
}

var varnameAttacking=window.document.getElementById('nameAttacking')
varnameAttacking.innerHTML=`${attackingName}`
var varPower=window.document.getElementById('powerSpan')
varPower.innerHTML=`${power}`
var varnameDefense=window.document.getElementById('nameDefense')
varnameDefense.innerHTML=`${defenseName}`
var varLife=window.document.getElementById('lifeNumberSpan')
varLife.innerHTML=`${life}` 

var energyLost=window.document.getElementById('heEnergy')

var boxOver=window.document.getElementById('boxGameOver')
var rapunzelBeginning=window.document.getElementById('rapunzelBeginning')
var flynnBeginning=window.document.getElementById('flynnBeginning')
var boxGame=window.document.querySelector('.boxGame')


var floatLife=parseFloat(life)
var floatPower=parseFloat(power)


if(floatLife<floatPower){
    varLife.innerHTML=0
    boxOver.innerHTML=`GAME OVER`
    rapunzelBeginning.src='./img/rapunzelOver.png'
    rapunzelBeginning.style.left='0'
    rapunzelBeginning.style.marginTop='11px'
    flynnBeginning.src='./img/flyynOver.png'
    flynnBeginning.style.height='171px'
    flynnBeginning.style.right='0'
    flynnBeginning.style.marginTop='223px'
    flynnBeginning.style.width= '505px'
    boxOver.classList.add('GameOverSHOW')
}
else{
    document.addEventListener("keydown", eventKeyboard)
    document.addEventListener("keydown", addAnimation)
}

function addAnimation(){
    rapunzelBeginning.classList.add('animation')
    setTimeout(()=>{
        rapunzelBeginning.classList.remove('animation')
    },300)
}

function eventKeyboard(){

    if(shield=="1"){

        var damage=varLife.innerHTML-(power/2)
        varLife.innerHTML=`${damage}` 
        var percentage=(100*damage)/life
        energyLost.style.width = `${percentage}%`

        if(varLife.innerHTML==0||varLife.innerHTML<0){
            document.removeEventListener("keydown", addAnimation)
            document.removeEventListener("keydown",eventKeyboard)
            boxOver.innerHTML=`GAME OVER`
            rapunzelBeginning.src='./img/rapunzelOver.png'
            rapunzelBeginning.style.left='0'
            rapunzelBeginning.style.marginTop='11px'
            flynnBeginning.src='./img/flyynOver.png'
            flynnBeginning.style.height='171px'
            flynnBeginning.style.right='0'
            flynnBeginning.style.marginTop='223px'
            flynnBeginning.style.width= '505px'
            boxOver.classList.add('GameOverSHOW')
        }
        
    }

    else if(shield=="2"){
        
        var damage=varLife.innerHTML-power
        varLife.innerHTML=`${damage}`
        var percentage=(100*damage)/life
        energyLost.style.width = `${percentage}%`
        
        if(varLife.innerHTML==0||varLife.innerHTML<0){
            document.removeEventListener("keydown", addAnimation)
            document.removeEventListener("keydown",eventKeyboard)
            boxOver.innerHTML=`GAME OVER`
            rapunzelBeginning.src='./img/rapunzelOver.png'
            rapunzelBeginning.style.left='0'
            rapunzelBeginning.style.marginTop='11px'
            flynnBeginning.src='./img/flyynOver.png'
            flynnBeginning.style.height='171px'
            flynnBeginning.style.right='0'
            flynnBeginning.style.marginTop='223px'
            flynnBeginning.style.width= '505px'
            boxOver.classList.add('GameOverSHOW')
        }
        
    }

}



