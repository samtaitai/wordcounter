const form = document.querySelector("#textbox");
const wSpace = document.querySelector("#withSpace");
const woSpace = document.querySelector("#woSpace");
const resetBtn = document.querySelector("#reset");
const charBtn = document.querySelector("#ch");
const wordBtn = document.querySelector("#wd");

function countChar(e){
    const input = e.target.value;
    const blank = /\s/;

    let len = 0;
    let len2 = 0;
    let blankCnt = 0;
    let newlineCnt = 0;
    input.split('').forEach(function(ch){
        if(blank.test(ch)) blankCnt++;
        if(ch === '\n') newlineCnt++;
    })

    len = input.length - newlineCnt;
    len2 = len - blankCnt + newlineCnt;

    wSpace.innerText = `${len}`;
    woSpace.innerText = `${len2}`;
}

function countWord(e){
    const input = e.target.value;
    const blank = /\s/;
    let len = 0;
    len = input.split(blank).length - 1;
    wSpace.innerText = `${len}`;
}

function charSetup(){
    console.log("char setup fired");
    charBtn.disabled = true;
    wordBtn.disabled = false;
    document.querySelector("h1").innerHTML=`<span class="material-symbols-outlined">
    summarize
</span>Character Counter<span class="material-symbols-outlined">
    summarize
</span>`;
    document.querySelector("#result1").innerText = "With whitespace: ";
    document.querySelector("#result2").hidden = false;
    document.querySelector("#result2").innerText = "Without whitespace: ";
    document.querySelector("#woSpace").hidden = false;
    form.addEventListener('input', countChar);
    wordBtn.addEventListener('click', wordSetup);
}

function wordSetup(){
    console.log("word setup fired");
    wordBtn.disabled = true;
    charBtn.disabled = false;
    document.querySelector("h1").innerHTML=`<span class="material-symbols-outlined">
    summarize
</span>Word Counter<span class="material-symbols-outlined">
    summarize
</span>`;
    document.querySelector("#result1").innerText = "How many words: ";
    document.querySelector("#result2").hidden = true;
    document.querySelector("#woSpace").hidden = true;
    form.addEventListener('input', countWord);
    charBtn.addEventListener('click', charSetup);
}

document.addEventListener("DOMContentLoaded", charSetup());

resetBtn.addEventListener('click', function(){
    form.reset();
    wSpace.innerText="";
    woSpace.innerText="";
});

