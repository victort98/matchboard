import React, {Component} from 'react'

class Canvas extends Component  {

  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  degToRad (degree) {
    return degree*Math.PI/180
  }

  updateCanvas(){
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    var background = new Image();
    background.src = "https://static1.squarespace.com/static/55d493c2e4b09a7ab6ebc9d5/5639fffee4b097a60fe050de/568ce46257eb8d622b8f19ec/1535852079341/Grass-Textures-for-Designers8.jpg";

    let team1 = "Sweden";
    let team2 = "Germany";
    let scoreTeam1 = this.props.scoreData.teamOne;
    let scoreTeam2 = this.props.scoreData.teamTwo;
    let time = "00:00";

background.onload = function(){
    
    

//drawing background image      
context.beginPath();    
context.drawImage(background,0,0);
        
       
    
//write team1 name
context.font = "bold 40px Arial";
context.beginPath();
context.fillStyle= "red"; 
context.fillText(`${team1}`, 1280/8.5, 720/3.5);

//write team2 name
context.beginPath();
context.font = "bold 40px Arial";
context.fillStyle= "red"; 
context.fillText(`${team2}`, 1280/10*7.6, 720/3.5);

//rectange1 
context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 1;
context.shadowColor = "black";
context.shadowOffsetX = -10;
context.shadowOffsetY = -10;
context.shadowBlur = 10; 
context.rect(1280/10,720/3,200,80);
context.stroke();
context.fillStyle = "#e6e6e6";
context.fill();
//write team1 Score
context.beginPath();
context.font = "bold 40px Arial";
context.fillStyle= "black"; 
context.fillText(scoreTeam1, 1280/6.3, 720/2.45);
 
//rectange2 
context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 1;
context.shadowColor = "black";
context.shadowOffsetX = -10;
context.shadowOffsetY = -10;
context.shadowBlur = 10;  
context.rect(1280/10*7.47,720/3,200,80);
context.stroke();
context.fillStyle = "#e6e6e6";
context.fill();
//write team2 Score  
context.beginPath();
context.font = "bold 40px Arial";
context.fillStyle= "black"; 
context.fillText(scoreTeam2, 1280/10*8.1, 720/2.45);



// circle
let rad = Math.PI/180;
context.beginPath();
context.strokeStyle = " #1aff1a";
context.lineWidth = 80;
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10; 
context.arc(1280/2, 720/2,200, 0*rad, 360*rad, 2 *rad);
context.stroke();
context.fillStyle = " #00b300";
context.fill();

context.beginPath();
context.font = "bold 80px Arial";
context.fillStyle= "red"; 
context.fillText(`${time}`, 1280/2.4, 720/2);

} }

componentDidMount() {
    this.updateCanvas();
  }
componentDidUpdate(){
    this.updateCanvas();
}  
  

  render(){    
    return (
      <div className="scoreboard">
        <canvas id="canvas" ref={this.canvasRef} width={1280} height={720}/>
      </div>
    )
  }
}

export default Canvas
