import "./Form.css";
import { carData, carDescription } from "../carData.js";
import { Link, useParams } from "react-router-dom";

function Submitted() {
    return (
        <div className="display-container" id="submitted-container">
            <div className="thank-you-message">
                <h2>Vielen Dank für Ihre Buchung!</h2>
                <p>Ihre Mietanfrage wurde erfolgreich übermittelt.</p>
                <Link to="/">
                    <button className="rent-button">
                        Zurück zur Startseite
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Submitted;
