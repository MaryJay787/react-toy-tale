import React from 'react';

class ToyCard extends React.Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.toy.name}</h2>
                <img className="toy-avatar" src={this.props.toy.image} alt=""/>
                <p>{this.props.toy.likes} Likes </p>
                <button className="like-btn">Like {'<3'} </button>
            </div>
        )
    }
}

export default ToyCard