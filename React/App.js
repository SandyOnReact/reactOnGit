import React, { Component } from 'react';
import './App.css';
import CardComponent from './components/CardComponent/CardComponent';

class App extends Component {
  state = {
    showCards : [
      {"id":1,"name":"sandy","email":"sk@gmail.com","mobileNo":"8793753269"}
    ]
  }
  onCreateButtonClickedHandler = (cardId)=>{
    console.log("Hello");
    return(
      <h1>Hello</h1>
    )
   
  }
  onDeleteButtonClickedHandler = (cardId)=>{
    console.log(cardId);
      let newArray  = [...this.state.showCards];
      newArray = this.state.showCards.filter((item)=>{
        return item.id !== cardId
      })
      this.setState({showCards:newArray});

  }
  onUpdateButtonClickedHandler = ()=>{

  }
  render() {
    return (
      <div className="App">
        <CardComponent showCards={this.state.showCards}
        createClick = {this.onCreateButtonClickedHandler}
        deleteClick = {this.onDeleteButtonClickedHandler}
        updateClick = {this.onUpdateButtonClickedHandler}/>
      </div>
    );
  }

}

export default App;
