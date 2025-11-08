import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date && formData.time && formData.guests > 0) {
      navigate("/confirmed");
    } else {
      alert("Please fill all the fields correctly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Time:
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">Select a time</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
        </select>
      </label>

      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          max="10"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Occasion:
        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </label>

      <button type="submit">Reserve Table</button>
    </form>
  );
}

export default BookingForm;
