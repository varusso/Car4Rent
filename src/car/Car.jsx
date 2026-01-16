import "./Car.css";
import { carData, carDescription } from "../carData.js";
import { Link, useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";

function Car() {
    const { id } = useParams();
    const car = carData[id - 1];
    const description = carDescription[id - 1];

    return (
        <div className="display-container">
            <div className="car-display" key={car.id}>
                <div className="big-car-image">
                    <img src={"../public/" + car.id + ".jpg"} alt={car.name} />
                </div>
                <div className="on-car-details-container">
                    <div className="on-car-details" id="car-name">
                        {car.name}
                    </div>
                    <div className="on-car-details" id="car-color">
                        <div
                            className="color"
                            style={{ backgroundColor: car.color }}
                        ></div>
                    </div>

                    <div className="on-car-details" id="on-car-text">
                        Kategorie:
                    </div>
                    <div className="on-car-details">{car.category}</div>
                    <div className="on-car-details" id="on-car-text">
                        Getriebe:
                    </div>
                    <div className="on-car-details">{car.transmission}</div>
                    <div className="on-car-details" id="on-car-text">
                        Extras:
                    </div>
                    <div className="on-car-details">
                        {" "}
                        {car.extras.map((extra, index) => (
                            <span key={index}>
                                {index > 0 && ", "}
                                {extra}
                            </span>
                        ))}{" "}
                    </div>
                    <div className="on-car-details" id="on-car-text">
                        Preis/Tag:
                    </div>
                    <div className="on-car-details">
                        {car.pricePerDay.map((price, index) => (
                            <span key={index}>
                                {index > 0 && " - "}
                                {price}
                            </span>
                        ))}{" "}
                        CHF
                    </div>
                    <div className="on-car-details" id="on-car-text">
                        Priotität:
                    </div>
                    <div className="on-car-details" id="on-car-details">
                        {car.priority}
                    </div>
                    <div className="on-car-details" id="on-car-text">
                        Bemerkung:
                    </div>
                    <div className="on-car-details" id="on-car-details">
                        {car.notes}
                    </div>
                    <div className="car-button">
                        <Link to={`/rent/${car.id}`}>
                        <button className="rent-button">Mieten</button>
                        </Link>
                    </div>
                </div>
                <div className="car-description">
                    <h1>Beschreibung</h1>
                    {description.description}
                </div>
            </div>
        </div>
    );
}

export default Car;
