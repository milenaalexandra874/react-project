import react,{ useEffect, userState } from 'react';
import axios from 'axios';

const weather=() => {
    const [city, setCity] = useState ('');
    const [weatherData, setWeatherData] = userState(null);
}

    const fetchData= async () => {
        try {
            const respose = await axios.get(
                'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={616b14cbd38253313b3b8852fa77335d}'
            );
            setWeatherData( response.data);
            console.log (response.data);
        } 
        catch (error){
            console.error(error);
        }

    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleInputeChange = (e) => {
      setCity(e.target.value);
    };
const handleSumit = (e) => {
    e.preventDefault();
    fetchData();
};
return <div>
    <form onSubmit={handleSubmit}>
        <input type ="text"
        placeholder="Enter City name"
        vaform 
        onChange={handleChange}/>

        <button type="Submit"> Get Weather</button>
        </form>   
        {weatherData ?(
            <>
            <h2>{ weatherData.name}</h2>
            <p> Temperature: { weatherData.main.temp}°C</p>
            <p> Description: { weatherData.weather[0].discription}</p>
            <p>Feels Like:{ weatherData.main.feels_like}°C</p>
            <p> Humidity:{weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p> Wind Pressure: {weatherData.wind.speed}m/h</p>
            </>
        ):(
            <p>loading Weather data...</p>
        )}
</div>
    


export default weather;
