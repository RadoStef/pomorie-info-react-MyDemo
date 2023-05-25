import { Component } from 'react';
import { hotels } from '../../components/mock-data/data';
import { CustomCard } from '../UI/CustomCard';
import './hotelList.css';

class HotelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHotel: true,
        };
    };

    toggleHotelsHandler() {
        this.setState((currentState) => {
            return {showHotel: !currentState.showHotel}
        });
    };

    render() {
      const hotelsList = (
        <ul>
          {hotels.map((hotel) => {
            return (
                <li key={hotel.id}>
                    <div> 
                        <p><b>{hotel.name} <span className='stars'>{hotel.star}</span></b> / ({hotel.stars}) stars</p>
                        <p>{hotel.description}</p>
                    </div>
                </li>
            )
          })}
        </ul>
      );

      return (
        <CustomCard>
            <h2>Class based component, which shows and hides hotels in Pomorie. PeEx</h2>
            <div className='dividers'>
               <button onClick={this.toggleHotelsHandler.bind(this)} className='show-btn'> {this.state.showHotel ? 'Hide' : 'Show'} </button> 
            </div>
            <div className='dividers'>
                {this.state.showHotel && hotelsList}
            </div>
        </CustomCard>
    )
  }
};

export default HotelList;