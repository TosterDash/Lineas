var P1 = {x: 0, y: 0};
var P2 = {x: 0, y: 0};
var P3 = {x: 0, y: 0};
var P4 = {x: 0, y: 0};
var P5 = {x: 0, y: 0};
var P6 = {x: 0, y: 0};
var P7 = {x: 0, y: 0};
var P8 = {x: 0, y: 0};

function setup() 
{
    createCanvas(windowWidth, windowHeight)
    P2.x=windowWidth;
    P2.y=windowHeight;

    P3.y=windowHeight;
    P4.x=windowWidth;    
    P5.x=Math.floor(windowWidth / 2);
    
    P6.y=windowHeight;
    P6.x=Math.floor(windowWidth / 2);
    P7.y=Math.floor(windowHeight / 2);
    
    P8.x=windowWidth;
    P8.y=Math.floor(windowHeight / 2);
}

function draw()
{
    lineaPP(P1, P2);
    lineaPP(P3, P4);
    lineaPP(P5, P6);
    lineaPP(P7, P8); 
}

function lineaPP(p1, p2)
{
    var py = p2.y - p1.y;
    var px = p2.x - p1.x;
    var m = py / px;
    var b = p1.y - m * p1.x;

    point(p1.x, p1.y);
    let x = p1.x;
    let y;

    while(x != p2.x)
    {
        y = m * x + b;
        point(x, y);
        x++;
    }
    if(p1.x == p2.x)
    {
        y = p1.y;
        while(y != p2.y){
            point(x, y)
            y++;
        }
    }    
}