import React, { Component } from 'react'
import './tour.css'

export default class Tour extends Component {
    state = {
        showInfo: false,
    }

    toggleInfo = () => { 
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    
    render() {
        const { id, img, name, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="" />
                    <i className="fa fa-window-close fa-2x" onClick={ () => removeTour(id) }></i>
                </div>
                
                <h3>{name}</h3>
                {
                    this.state.showInfo ?
                        (
                            <>
                                <p>{info}</p>
                                <i className="fa fa-minus-circle fa-2x" onClick={this.toggleInfo}></i>
                            </>
                        ) : <i className="fa fa-plus-circle fa-2x" onClick={this.toggleInfo}></i>
                }
                
            </article>
        )
    }
}
