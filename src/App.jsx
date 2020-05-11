import React, {Component } from 'react';
import './App.css';
import Clock from './Clock'

import {Form, FormControl, Button} from 'react-bootstrap';
export default class App extends Component{
  constructor(props){
super(props);
this.state={
deadline:'September 21, 2030',
newDeadline: ''


}
  }
  changeDeadline(){
   this.setState({deadline:this.state.newDeadline})
  }
     render(){
     
return(
    <div className='App' >
<div className='App-title'> <h2 className='display-2'> Countdown until {this.state.deadline}</h2>
 </div>
<Clock deadline={this.state.deadline} />
<div className='form'   stype={{color:'black'}}>
    <Form className='col-sm-8'   >
     <FormControl
     className='Deadline-input'
     placeholder='Enter a date'
     onChange={event => this.setState({newDeadline:event.target.value})}
     size="sm"
   
    />
   
<Button 
className='button'
variant="outline-default" 
onClick={()=>this.changeDeadline()} 
size="md"
 >
  Submit
  </Button>
</Form>  
 </div>
</div>
)

  
    }
}
