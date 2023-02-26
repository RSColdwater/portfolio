function expandirSkill(){
    let sk = this.children[1];

    if(sk.style.maxHeight){
        sk.style.maxHeight = null;
    }else{
        sk.style.maxHeight = sk.scrollHeight + "px";
    }
}

function brilharBotao(){
    this.style.backgroundColor = "var(--secun)";
    this.style.boxShadow = "0 0 20px 3px var(--secun)";

    this.children[0].style.color = "var(--cont)";
    this.children[0].style.fontWeight = "800";
}

function normalizarBotao(){
    this.style.background = "rgba(0, 0, 0, 0.2)";
    this.style.boxShadow = "none";

    this.children[0].style.color = "var(--text)";
    this.children[0].style.fontWeight = "600";
}

const cards = document.querySelectorAll('#sctSkills .dvSeg .dvCard');
for(let loop = 0; loop < cards.length; loop++){
    cards[loop].addEventListener('click', expandirSkill);
}

const button = document.querySelectorAll("#sctProjetos .dvPri .dvSub button");
for(let loop = 0; loop < button.length; loop++){
    button[loop].addEventListener('mouseover', brilharBotao);
    button[loop].addEventListener('mouseout', normalizarBotao);
}

const a = document.querySelectorAll('#sctProjetos .dvPri .dvSub button a');