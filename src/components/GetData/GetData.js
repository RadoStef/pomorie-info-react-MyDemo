import React, { useState } from 'react';
import { CustomCard } from '../UI/CustomCard';
import axios from 'axios';
import './GetData.css';


export const GetData = () => {
    const [cityObjects, setCityObjects] = useState(null);
    const [error, setError] = useState('');

    const errorMessage = `Sorry, an error occured, please check your connection or try again later.`

    const clearError = setTimeout(() => {
        setError('')
    }, 5000);
    

    const fetchDataHandler = () => {
    axios.get('https://pomorie-info-default-rtdb.europe-west1.firebasedatabase.app/objects.json')
      .then(response => {
        setCityObjects(response.data);
      })
      .catch(error => {
        setError(errorMessage);
        clearError();
      });
  }

    return (
    <CustomCard>
        <h2>Getting data from firebase, PeEx</h2>
        <div className='object-wrapper'>
            {cityObjects ? (
          Object.keys(cityObjects).map(key => (
            <div key={key}>
              <h3>{cityObjects[key].name}</h3>
              <p>{cityObjects[key].description}</p>
              <div className='picture-wrapper'>
                <img src={cityObjects[key].picture} alt={cityObjects[key].name}/>
              </div>
              <p>{cityObjects[key].address}</p>
              <p>+{+cityObjects[key].phone}</p>
            </div>
          ))
        ) : (
          <p style={{textAlign: 'center'}}>To get data, please click on "Get Data" button.</p>
        )}
        <div>{error ? <p style={{color: 'red', textAlign: 'center'}}>{error}</p> : <p></p>}</div>
        </div>
        <button className="submit" onClick={fetchDataHandler}>Get data</button>
    </CustomCard>
    );
};