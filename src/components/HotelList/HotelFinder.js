import { Component, Fragment } from 'react';
import { hotels } from '../../components/mock-data/data';

class HotelFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredHotels: hotels,
            searchTerm: '',
        }
    };

    // this replaces useEffect(() => ...,[])
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
          this.setState({filteredHotels: hotels.filter((hotel) => hotel.name.includes(this.state.searchTerm)), })
        }
    };

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    };

    render() {
        return (
        <Fragment>
          <div>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          </div>
        </Fragment>
      )
    };
};

export default HotelFinder;