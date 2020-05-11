import React, {Component} from 'react';
import'./App.css';
class Clock extends Component{
constructor(props){
    super(props);
    this.state={
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    }
}
componentWillMount(deadline){
    this.getTimeUntil(this.props.deadline)
}
componentDidMount(){
    setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
}

LeadingZero(num){
    return num<10 ? '0'+num : num;
}


getTimeUntil(deadline){
const time=Date.parse(deadline)-Date.parse(new Date());
console.log('time', time);
const seconds=Math.floor((time/1000)%60);
const minutes=Math.floor((time/1000/60)%60);
const hours=Math.floor(time/(1000*60*60)%24);
const days=Math.floor(time/(1000*60*60*24));
console.log('seconds',seconds,'minutes',minutes, 'hours',hours,'days',days)

this.setState({days,hours,minutes,seconds })
}



render(){
return(

<div>
<div className="Clock-days"> {this.LeadingZero(this.state.days)} Days :  </div>
    <div className="Clock-hours">{this.LeadingZero(this.state.hours)} Hours :  </div> 
    <div className="Clock-minutes">{this.LeadingZero(this.state.minutes)} Minutes :  </div>
    <div className="Clock-seconds">{this.LeadingZero(this.state.seconds)} Seconds</div>
</div>

)

}
}


export default Clock;