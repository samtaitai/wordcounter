const form = document.querySelector("#textbox");
const wSpace = document.querySelector("#withSpace");
const woSpace = document.querySelector("#woSpace");

//refine the logic:
//without whitespace === with whitespace - num of \s(regex)
form.addEventListener('input', function(e){
    const input = e.target.value;
    let arr = [];
    input.split('').forEach(function(ch){
        if(ch != ' ') arr.push(ch);
    })

    let len = input.length;
    let len2 = arr.join('').length;

    wSpace.innerText = `${len}`;
    woSpace.innerText = `${len2}`;

})

//when the page loaded or 'character' button clicked
//h1 = Character counter
//character button disabled
//when 'input' event fired, count char

//when the 'word' button clicked
//h1 = word counter
//word button disabled
//when 'input' event fired, count word