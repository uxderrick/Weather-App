import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const WeatherCard = ({ weather }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/02n@2x.png`}
        />
        <Card.Body>
          <Card.Title>{weather.name},</Card.Title>
          <Card.Text></Card.Text>
          {/* <Card.Text>{main.temp} Kelvin</Card.Text>
          <Card.Text>{main.humidity} Humidity</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
