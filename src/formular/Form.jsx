import "./Form.css";
import { carData, carDescription } from "../carData.js";
import { useNavigate, useParams } from "react-router-dom";

function Form() {
    const { id } = useParams();
    const car = carData[id - 1];
    const description = carDescription[id - 1];

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate("/success");
    };

    return (
        <div className="display-container">
            <div className="car-infos">
                <div className="big-car-image" id="form-car-image">
                    <img src={"../public/" + car.id + ".jpg"} alt={car.name} />
                </div>
                <h2>{car.name}</h2>
                <div className="car-detail">
                    <strong>Kategorie:</strong> {car.category}
                </div>
                <div className="car-detail">
                    <strong>Getriebe:</strong> {car.transmission}
                </div>
                <div className="car-detail">
                    <strong>Extras:</strong> {car.extras.join(", ")}
                </div>
                <div className="car-detail">
                    <strong>Preis/Tag:</strong> {car.pricePerDay.join(" - ")}{" "}
                    CHF
                </div>
                <div className="car-detail">
                    <strong>Beschreibung:</strong> {description.description}
                </div>
            </div>
            <form onSubmit={handleFormSubmit} className="form-display">
                <label for="firstname">
                    <div className="required">*</div>Vorname:
                </label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Max"
                    required
                />
                <label for="lastname">
                    <div className="required">*</div>Nachname:
                </label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Mustermann"
                    required
                />
                <label for="email">
                    <div className="required">*</div>E-Mail:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="max.mustermann@example.com"
                    required
                />
                <label for="phone">
                    <div className="required">*</div>Telefon:
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+41 123 456 7890"
                    required
                />
                <label for="address">
                    <div className="required">*</div>Adresse:
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Beispielstrasse 123"
                    required
                />
                <label for="city">
                    <div className="required">*</div>Stadt:
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Zürich"
                    required
                />
                <label for="zip">
                    <div className="required">*</div>PLZ:
                </label>
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="8000"
                    required
                />
                <label for="country">
                    <div className="required">*</div>Land:
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Schweiz"
                    required
                />
                <label for="rental-start">
                    <div className="required">*</div>Mietbeginn:
                </label>
                <input
                    type="date"
                    id="rental-start"
                    name="rental-start"
                    required
                />
                <label for="rental-end">
                    <div className="required">*</div>Mietende:
                </label>
                <input type="date" id="rental-end" name="rental-end" required />

                <label for="card-number">
                    <div className="required">*</div>Kreditkartennummer:
                </label>
                <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234 5678 9012 3456"
                    required
                />
                <label for="card-expiry">
                    <div className="required">*</div>Ablaufdatum:
                </label>
                <input
                    type="text"
                    id="card-expiry"
                    name="card-expiry"
                    placeholder="MM/YY"
                    pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                    required
                />
                <label for="card-cvc">
                    <div className="required">*</div>CVC:
                </label>
                <input
                    type="text"
                    id="card-cvc"
                    name="card-cvc"
                    placeholder="123"
                    required
                />

                <label for="driver-license">
                    <div className="required">*</div>Führerschein Hochladen:
                </label>
                <input
                    type="file"
                    id="driver-license"
                    name="driver-license"
                    required
                />
                <div className="form-button">
                    {" "}
                    <button type="submit" className="rent-button">
                        Jetzt mieten
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
