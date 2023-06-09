import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import '../styles/App.scss';
import logo from '../images/logo2.png'

function App() {

  //LOCALSTORAGE
  
  // Estados

  // En vez de leer la propiedad name leemos la propiedad data y su valor por defecto es un objeto vacío: ls.get('data', {})
  // Del objeto (vacío o relleno que nos devuelve ls.get) obtenemos la propiedad name: ls.get('data', {}).name
  // Si la propiedad name existe la usamos, si no, usamos un string vacío: ls.get('data', {}).name || ''
  const [name, setName] = useState(ls.get('data', {}).name || '');
  // Lo mismo para el email
  const [email, setEmail] = useState(ls.get('data', {}).email || '');

  // useEffect

  // Usamos useEffect para guardar los datos en el local storage
  useEffect(() => {
    // En vez de guardar el nombre por un lado y el email por otro
    // Guardamos en el local storage un objeto data con las propiedad name y email: { name: 'loquesea', email: 'loquefuere' }
    ls.set('data', {
      name: name,
      email: email,
    });
  }, [name, email]);

  // Eventos

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  //LLAMAR A LA API
  
  const [starWarsData, setStarWarsData] = useState({});

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setStarWarsData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  return (
  <div className="app">
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Family Shopping" />
    </header>
    <main className="main">
      <div className='main__container'>
        <h2 className="main__container-h2">Bienvenido a</h2>
        <h1 className="main__container-h1">FAMILY SHOPPING</h1>
        <p className="main__container-p">
          Descubre los mejores centros comerciales de la Comunidad de Madrid para
          ir de compras con tus hijos
        </p>
        <button className="main__container-button">Empezar</button>
      </div>
    </main>
    <footer className="footer">
      <p className="footer__p"></p>
    </footer>
  </div>);
}

export default App;
