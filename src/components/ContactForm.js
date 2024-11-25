import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [validator] = useState(new SimpleReactValidator());

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      try {
        await addDoc(collection(db, 'contactos'), form);
        alert('Datos guardados correctamente');
        setForm({ nombre: '', email: '', mensaje: '' });
        validator.hideMessages();
      } catch (error) {
        console.error("Error al guardar los datos: ", error);
      }
    } else {
      validator.showMessages();
      setForm({ ...form });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            name="nombre" 
            value={form.nombre} 
            onChange={handleChange} 
          />
          {validator.message('nombre', form.nombre, 'required|alpha')}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
          />
          {validator.message('email', form.email, 'required|email')}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea 
            className="form-control" 
            id="mensaje" 
            name="mensaje" 
            rows="3" 
            value={form.mensaje} 
            onChange={handleChange} 
          ></textarea>
          {validator.message('mensaje', form.mensaje, 'required')}
        </div>

        <button type="submit" className="btn btn-primary mt-3">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
