var  ww
var  wh







function setup(){
    createCanvas(windowWidth,windowHeight);
    ww = windowWidth;
    wh = windowHeight;


    
}



function draw(){
   //console.log(ww)
    const p1 = {x: 0, y: 0}
    const p2 = {x: ww, y:wh}

    const p11 = {x: 0, y: wh/2}
    const p21 = {x: ww, y:wh/2}

    const p12 = {x: 0, y: wh}
    const p22 = {x: ww, y:0}

    const p13 = {x: ww/2, y: 0}
    const p23 = {x: ww/2, y:wh}





    line(p1.x,p1.y,p2.x,p2.y)
    line(p11.x,p11.y,p21.x,p21.y)
    line(p12.x,p12.y,p22.x,p22.y)
    line(p13.x,p13.y,p23.x,p23.y)
   
    
    


}

function ecuapp(p1,p2){
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y

    const m = dy / dx
    const b = p1.y - m * p1.x

    point(p1.x, p1.y)

    let x = p1.x + 1 
    let y
    while(x!= p2.x){
        y = m * x +b
        point(x,y)
        x++
    }
}