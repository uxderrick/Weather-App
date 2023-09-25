import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const WeatherCard = ({ weather }) => {
  // const Celcius = `${weather.main?.humidity - 32}`;
  // const Icon = `${weather.weather?.}`;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/04n@2x.png`}
        />
        <Card.Body>
          <Card.Title>
            {weather.name}, {weather.sys?.country}
          </Card.Title>
          <Card.Text></Card.Text>

          {/* <Card.Text>{weather.main?.temp > 25 ? "Hot" : "Cold"} </Card.Text> */}

          <Card.Text>{weather.main?.temp} Celsius</Card.Text>
          <Card.Text>{weather.main?.humidity} Humidity</Card.Text>
          <Card.Text>{weather.wind?.speed} Wind Speed</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
