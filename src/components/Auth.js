import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error al registrar: ", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error al iniciar sesión: ", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión: ", error.message);
    }
  };

  return (
    <div className="container mt-5">
      {user ? (
        <div>
          <h3>Bienvenido, {user.email}</h3>
          <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <h2>Autenticación</h2>
          <div className="form-group">
            <label htmlFor="emailAuth">Email:</label>
            <input 
              type="email" 
              className="form-control" 
              id="emailAuth" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordAuth">Contraseña:</label>
            <input 
              type="password" 
              className="form-control" 
              id="passwordAuth" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button className="btn btn-primary mr-2" onClick={handleLogin}>Iniciar Sesión</button>
          <button className="btn btn-secondary" onClick={handleRegister}>Registrar</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
