import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getCountries = async () => {
    try {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      const countries = response.data;
      setCountries(countries);
      setFetching(false)

    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  if(fetching) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Link to = {`/details/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>

          )
        })}
      </div>
    )
  }
  
}

export default CountriesList