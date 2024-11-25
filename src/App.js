import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Auth from './components/Auth';
import ContactForm from './components/ContactForm';
import FileUpload from './components/FileUpload';


function App() {
  return (
    <div className="App">
      <Auth />
      <ProductList />
      <ContactForm />
      <FileUpload />
    </div>
  );
}

export default App;

