

class Desenhar{
    constructor(canvas){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.x = 0;
        this.y = 0;
    
    
        this.#addEventListeners()
    
    }


    #addEventListeners(){
        this.canvas.addEventListener('mousedown', (event) => this.comecouDesenho(event));
        this.canvas.addEventListener('mousemove', (event) => this.desenhando(event))
        this.canvas.addEventListener('mouseup', (event) => this.parouDesenhar());
        this.canvas.addEventListener('mouseout', (event) => this.parouDesenhar());
    }

    comecouDesenho(event){
        this.isDrawing = true;
        const {offsetX, offsetY} = event;
        this.x = offsetX;
        this.y = offsetY;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y)
    }

    desenhando(event){
        if(!this.isDrawing) return;

        const {offsetX, offsetY} = event;
        this.x = offsetX;
        this.y = offsetY;
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke()
    }

    parouDesenhar(){
        this.isDrawing = false;
        this.ctx.closePath();
    }
}
