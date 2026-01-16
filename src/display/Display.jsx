import "./Display.css";
import { carData } from "../carData.js";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Display() {
    return (
        <div className="display-container">
            <div className="grid-table">
                {carData.map((car) => (
                    <div className="grid-item" key={car.id}>
                        <div className="car-image">
                            <Link to={`/cars/${car.id}`}
                            >
                                <img
                                    src={"/" + car.id + ".jpg"}
                                    alt={car.name}
                                />
                            </Link>
                        </div>
                        <div className="car-details-container">
                            <div className="car-details" id="car-name">
                                {car.name}
                            </div>
                            <div className="car-details" id="car-color">
                                <div
                                    className="color"
                                    style={{ backgroundColor: car.color }}
                                ></div>
                            </div>

                            <div className="car-details" id="car-text">
                                Kategorie:
                            </div>
                            <div className="car-details">{car.category}</div>
                            <div className="car-details" id="car-text">
                                Getriebe:
                            </div>
                            <div className="car-details">
                                {car.transmission}
                            </div>
                            <div className="car-details" id="car-text">
                                Extras:
                            </div>
                            <div className="car-details">
                                {" "}
                                {car.extras.map((extra, index) => (
                                    <span key={index}>
                                        {index > 0 && ", "}
                                        {extra}
                                    </span>
                                ))}{" "}
                            </div>
                            <div className="car-details" id="car-text">
                                Preis/Tag:
                            </div>
                            <div className="car-details">
                                {car.pricePerDay.map((price, index) => (
                                    <span key={index}>
                                        {index > 0 && " - "}
                                        {price}
                                    </span>
                                ))}{" "}
                                CHF
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Display;
