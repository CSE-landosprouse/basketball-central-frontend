import { useState } from "react";
import "./TeamForm.css";

const initialFormData = {
    name: "",
    city: "",
    conference: "Eastern Conference",
    arena: "",
    championships: "",
    logo: ""
};

function TeamForm({ onAddTeam }) {
    const [formData, setFormData] = useState(initialFormData);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function validateForm() {
        if (formData.name.trim().length < 2) {
            return "Team name must contain at least 2 characters.";
        }

        if (formData.city.trim().length < 2) {
            return "City must contain at least 2 characters.";
        }

        if (formData.arena.trim().length < 2) {
            return "Arena must contain at least 2 characters.";
        }

        const championships = Number(formData.championships);

        if (
            !Number.isInteger(championships) ||
            championships < 0 ||
            championships > 30
        ) {
            return "Championships must be a whole number from 0 to 30.";
        }

        try {
            new URL(formData.logo);
        } catch {
            return "Please enter a valid logo URL.";
        }

        return "";
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const validationMessage = validateForm();

        if (validationMessage) {
            setMessage(validationMessage);
            setIsError(true);
            return;
        }

        setIsSubmitting(true);
        setMessage("");

        try {
            await onAddTeam({
                ...formData,
                name: formData.name.trim(),
                city: formData.city.trim(),
                arena: formData.arena.trim(),
                championships: Number(formData.championships),
                logo: formData.logo.trim()
            });

            setFormData(initialFormData);
            setMessage("Team successfully added to Full Court.");
            setIsError(false);
        } catch (error) {
            setMessage(error.message);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="team-form-section">
            <div className="team-form-heading">
                <p>EXPAND THE LEAGUE</p>
                <h2>Add a Team</h2>
                <span>Add an NBA team to the live Full Court team list.</span>
            </div>

            <form className="team-form" onSubmit={handleSubmit} noValidate>
                <label>
                    Team Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="60"
                        required
                    />
                </label>

                <label>
                    City and State
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="80"
                        placeholder="Miami, Florida"
                        required
                    />
                </label>

                <label>
                    Conference
                    <select
                        name="conference"
                        value={formData.conference}
                        onChange={handleChange}
                        required
                    >
                        <option>Eastern Conference</option>
                        <option>Western Conference</option>
                    </select>
                </label>

                <label>
                    Home Arena
                    <input
                        type="text"
                        name="arena"
                        value={formData.arena}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="80"
                        required
                    />
                </label>

                <label>
                    Championships
                    <input
                        type="number"
                        name="championships"
                        value={formData.championships}
                        onChange={handleChange}
                        min="0"
                        max="30"
                        step="1"
                        required
                    />
                </label>

                <label className="team-form-wide">
                    Logo Image URL
                    <input
                        type="url"
                        name="logo"
                        value={formData.logo}
                        onChange={handleChange}
                        placeholder="https://example.com/team-logo.png"
                        required
                    />
                </label>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding Team..." : "Add Team"}
                </button>

                {message && (
                    <p
                        className={`team-form-message ${
                            isError ? "team-form-error" : "team-form-success"
                        }`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </section>
    );
}

export default TeamForm;