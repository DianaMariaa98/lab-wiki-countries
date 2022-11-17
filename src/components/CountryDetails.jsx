import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function CountryDetails() {
  const {id} = useParams();
  const [countries, setCountries] = useState(null);


  const getCountries = async () => {
    try {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`);
      const countries = response.data;
      setCountries(countries);
      console.log(countries)

    } catch (error) {
      console.log(error)
    } 
  }
  useEffect(() => {
    getCountries();
  }, []);

  const styles = {
    width: "30%"
  }

  return (
    <div>
      
      {countries && <div>
        <div class="col-7">
              <h1>{countries.name.common}</h1>
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={styles}>Capital</td>
                    <td>{countries.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {countries.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                       {countries.borders.map((border) => {
                        return <p>{border}</p>
                       })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
      </div>}
    </div>
    
  )
}

export default CountryDetails