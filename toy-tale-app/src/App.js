import React, { Component } from 'react';
import './App.css';
import toys from './resources/toys.js';
import CardsContainer from './CardsContainer.js';
import BannerForm from './BannerForm.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      toys: toys,
      form: false
    }
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newToy = {
      name: e.target.form.name.value,
      image: e.target.form.image.value,
      likes: 0
    }
    console.log(newToy)


    this.setState({
      toys: [newToy, ...toys]
    })
  }
 
  render() {
    return (
      <div className="App">
        
         <div id="toy-header">
           <img src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png" alt="toy-header"/>
         </div>
         <p>Andy needs your help! <button id='new-toy-btn' onClick={this.toggleForm}>Add a new toy!</button></p>
         {this.state.form ? <BannerForm handleSubmit={this.handleSubmit}/> : null}

        <CardsContainer toys={this.state.toys} />

      </div>
    )
  }
}

export default App;
