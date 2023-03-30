const form = document.querySelector("#textbox");
const wSpace = document.querySelector("#withSpace");
const woSpace = document.querySelector("#woSpace");
const wordRes = document.querySelector("#wordCount");
const resetBtn = document.querySelector("#reset");
const charBtn = document.querySelector("#ch");
const wordBtn = document.querySelector("#wd");

function countChar(e){
    const input = e.target.value;
    const blank = /\s/;

    let blankCnt = 0;
    let newlineCnt = 0;
    input.split('').forEach(function(ch){
        if(blank.test(ch)) blankCnt++;
        if(ch === '\n') newlineCnt++;
    })

    wSpace.innerText = `${input.length - newlineCnt}`;
    woSpace.innerText = `${input.length - blankCnt}`;
}

function countWord(e){
    const input = e.target.value;
    const blank = /\s/;
    wordRes.innerText = `${input.split(blank).length - 1}`;
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
    document.querySelector("#result1").hidden = false;
    document.querySelector("#result1").innerText = "With whitespace: ";
    document.querySelector("#result2").hidden = false;
    document.querySelector("#result2").innerText = "Without whitespace: ";
    document.querySelector("#withSpace").hidden = false;
    document.querySelector("#woSpace").hidden = false;
    document.querySelector("#result3").hidden = true;
    document.querySelector("#wordCount").hidden = true;
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
    document.querySelector("#result1").hidden = true;
    document.querySelector("#result2").hidden = true;
    document.querySelector("#withSpace").hidden = true;
    document.querySelector("#woSpace").hidden = true;
    document.querySelector("#result3").hidden = false;
    document.querySelector("#result3").innerText = "How many words: ";
    document.querySelector("#wordCount").hidden = false;
    form.addEventListener('input', countWord);
    charBtn.addEventListener('click', charSetup);
}

document.addEventListener("DOMContentLoaded", charSetup);

resetBtn.addEventListener('click', function(){
    form.reset();
    wSpace.innerText="";
    woSpace.innerText="";
});

