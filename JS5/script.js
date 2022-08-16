//VARIABLES
const body = document.querySelector('body');
const btn = document.querySelector('.btn');

const colorArray = ["#fc0356","#fc03a9","#fc03db","#d703fc","#9803fc","#036bfc","#03dbfc","#cafc03","#03fc3d","green","#fcad03s","#03fcbe","#f803fc","#03fce8","blue","#fc0377","red","#03cffc","#dbfc03","pink","#03fc8c","orange","#9003fc","yellow","#fc4e03","#03f8fc","violet"];

const changeBgColor = function(){
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    const randomColor = colorArray[randomIndex];
    body.style.backgroundColor = randomColor;
};
btn.addEventListener('click',changeBgColor);