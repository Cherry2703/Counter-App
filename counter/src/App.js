import {Component} from "react"

import "./App.css"

class App extends Component{
  state={count:0}

onClickDecrease=()=>{
  this.setState(prevState=>({count:prevState.count-1}))
}

onClickReset=()=>{
  this.setState({count:0})
}

onClickIncrease=()=>{
  this.setState(prevState=>({count:prevState.count+1}))
}


  render(){
    const {count}=this.state
    return(
      <div className="main-container">
        <div className="counter-container">
          <h1>counter application</h1>
          <h1 className={count<0 ? "orange":"green"}>{count}</h1>
          <div className="buttons-container">
            <button type="button" onClick={this.onClickDecrease} className="Btn decrease">Decrease</button>
            <button type="button" onClick={this.onClickReset} className="Btn reset">Reset</button>
            <button type="button" onClick={this.onClickIncrease} className="Btn increase">Increase</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App