import React, {Component} from 'react'

class Canvas extends Component  {

  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  degToRad (degree) {
    return degree*Math.PI/180
  }

  drawScoreBoard(){
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d')

    let now = new Date();
    let time = now.toLocaleTimeString();

    //BACKGROUND
    ctx.fillStyle = '#ddd'
    // ctx.strokeStyle = 'green'
    ctx.fillRect(300, 0, 680, 760)

    //BACKGROUND LEFT ROUND
    ctx.fillStyle = '#ddd'
    ctx.beginPath();
    ctx.arc(300, 370, 370, this.degToRad(90), this.degToRad((0) - 90));
    ctx.fill()

    //BACKGROUND RIGHT ROUND
    ctx.fillStyle = '#ddd'
    ctx.beginPath();
    ctx.arc(980, 370, 370, this.degToRad(270), this.degToRad((180) - 90));
    ctx.fill()

    //FORGROUND
    ctx.fillStyle = 'green'
    // ctx.strokeStyle = 'green'
    ctx.fillRect(300, 30, 680, 680)

    //FRONTGROUND LEFT ROUND
    ctx.fillStyle = 'green'
    ctx.beginPath();
    ctx.arc(305, 370, 340, this.degToRad(90), this.degToRad((0) - 90));
    ctx.fill()

    //FRONTGROUND RIGHT ROUND
    ctx.fillStyle = 'green'
    ctx.beginPath();
    ctx.arc(980, 370, 340, this.degToRad(270), this.degToRad((180) - 90));
    ctx.fill()

    //SCORE BAR
    ctx.fillStyle = '#fff'
    ctx.fillRect(200, 100, 880, 160)


    //BAR RIGHT ROUND
    ctx.fillStyle = '#fff'
    ctx.beginPath();
    ctx.arc(1080, 180, 80, this.degToRad(270), this.degToRad((180) - 90));
    ctx.stroke();
    ctx.fill()

    //BAR LEFT ROUND
    ctx.fillStyle = '#fff'
    ctx.beginPath();
    ctx.arc(200, 180, 80, this.degToRad(90), this.degToRad((0) - 90));
    ctx.stroke();
    ctx.fill()

    //TEAM ONE SCORE BOX
    ctx.font = "100px Arial"
    ctx.fillStyle = '#000'
    ctx.fillText(this.props.scoreData.teamOne, 180, 215)

    //TEAM TWO SCORE BOX
    ctx.font = "100px Arial"
    ctx.fillStyle = '#000'
    ctx.fillText(this.props.scoreData.teamTwo, 1050, 215)

    //CLOCK BACKGROUND
    ctx.fillStyle = 'green'
    ctx.beginPath();
    ctx.arc(640, 180, 95, 0, this.degToRad(360));
    ctx.fill()

    //CLOCK FRONGROUND
    ctx.fillStyle = '#273746'
    ctx.beginPath(); 
    ctx.arc(640, 180, 85, 0, this.degToRad(360));
    ctx.stroke();
    ctx.fill()

    //CLOCK
    ctx.font = "50px Arial"
    ctx.fillStyle = '#eeffee'
    ctx.fillText('90:00', 580, 190)

  }

  componentDidMount() {
    this.drawScoreBoard()
  }
  componentDidUpdate() {
    this.drawScoreBoard()
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
