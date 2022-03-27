let lineBtn = document.getElementById('lineMake');
let squareBtn = document.getElementById('SqureMake');
let circleBtn = document.getElementById('CircleMake');
let drawBtn = document.getElementById('DrawAsUWant');
let eraserBtn = document.getElementById('Eraser');
let canvasWork = document.getElementById('Canvas_W')
let inputColor = document.getElementById('color')

let artArea = canvasWork.getContext("2d");

let painting = false;
let ButtonChoose = 1;
let oldPositionX=0;
let oldPositionY=0;


function drawLine()
{
    ButtonChoose=1;
}

function drawRect()
{
    ButtonChoose=2;
}

function drawCircle()
{
    ButtonChoose=3;
}
function freeDraw()
{
    ButtonChoose = 4;
}

function freeErase()
{
    ButtonChoose = 5;
}

canvasWork.addEventListener('mousedown',function (e)
{
    
    
    switch (ButtonChoose)
    {
        case 1 : 
        artArea.moveTo(e.offsetX,e.offsetY);
        artArea.strokeStyle=inputColor.value;
        break;
        case 2 :
        oldPositionX=e.offsetX;
        oldPositionY=e.offsetY;
        artArea.fillStyle=inputColor.value;
        break;
        case 3 :
            oldPositionX=e.offsetX;
            oldPositionY=e.offsetY;
            artArea.fillStyle=inputColor.value;
        break;
        case 4:
            painting=true;
            artArea.lineWidth=10;
            artArea.strokeStyle=inputColor.value;
        break; 
        case 5:   
            painting=true;
            artArea.lineWidth=30;
            artArea.strokeStyle='white';
        break;
    } 

});

canvasWork.addEventListener('mouseup',function(e)
{
    switch (ButtonChoose)
    {
        case 1: 
        artArea.lineTo(e.offsetX,e.offsetY);
        artArea.lineWidth=5;
        artArea.stroke();
        artArea.beginPath();
        break;  
        case 2:
        artArea.fillRect(oldPositionX,oldPositionY,e.offsetX-oldPositionX,e.offsetY-oldPositionY);
        artArea.stroke();
        artArea.beginPath();
        break;  
        case 3:
        artArea.arc(oldPositionX,oldPositionY,Math.sqrt(Math.pow(e.offsetX-oldPositionX,2)+Math.pow(e.offsetY-oldPositionY,2)),0,2*Math.PI);
        artArea.stroke();
        artArea.fill();
        artArea.beginPath();
        break;
        case 4:
        painting=false;
        artArea.beginPath();
        break;
        case 5:
        painting=false;
        artArea.beginPath();
        break;
    }
});

canvasWork.addEventListener('mousemove',function(e)
{
    if(!painting)
    {
        return;
    }
    
    artArea.lineCap='round';
    artArea.lineTo(e.offsetX,e.offsetY)
    artArea.stroke();
    artArea.beginPath();
    artArea.moveTo(e.offsetX,e.offsetY)
});


lineBtn.addEventListener('click',drawLine);
squareBtn.addEventListener('click',drawRect);
circleBtn.addEventListener('click',drawCircle)
drawBtn.addEventListener('click',freeDraw)
eraserBtn.addEventListener('click',freeErase)