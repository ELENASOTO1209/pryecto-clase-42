class Drops {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.rain=Bodies.circle(x,y,5,options);
    }
}