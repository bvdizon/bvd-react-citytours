import React, { Component } from 'react'
import Tour from './Tour';
import { tourData } from '../../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData,
    };

    removeTour = id => {
        console.log(id);
        const filteredTours = this.state.tours.filter(tour => tour.id !== id);
        this.setState({
            tours: filteredTours
        });
    };

    render() {
        return (
            <section className="pamalut section">
                {
                    this.state.tours.map(tour => { 
                        return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                    })
                }
            </section>
        )
    }
}
