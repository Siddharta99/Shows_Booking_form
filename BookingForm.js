
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    
    sex: '',
    
  });

  useEffect(() => {
    
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
        localStorage.setItem('userDetails', JSON.stringify(formData));
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>

        <label>
          Name:
          <input 
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          age:
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          Sex:
          <input
            type="text"
            value={formData.sex}
            onChange={(e) => setFormData({ ...formData, Sex: e.target.value })}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </label>
        <br />
        
        <button onClick={()=> {alert("Booking confirmed")}} type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
