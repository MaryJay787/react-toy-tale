import React from 'react';

class BannerForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            image: "",
            likes: 0
        }
    }

    handleInput = (e) => {
        this.setState = ({
            [e.target.name]: e.target.value })
    }

    
    render(){
        return(
            <div className="">
            <form className="add-toy-form" >
                <h3>Create a toy!</h3>
                <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleInput}/>
                <br/>
                <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.handleInput}/>
                <br/>
                <button type="submit" name="submit" className="submit" onClick={this.props.handleSubmit}>Create New Toy</button>
            </form>
            </div>
           
        
        )
    }
}

export default BannerForm