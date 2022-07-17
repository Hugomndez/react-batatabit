import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img
          src={logo}
          alt='Batatabit logo'
          width='150'
          height='24'
          fetchpriority='high'
          decoding='sync'
          loading='eager'
        />
      </a>
      <div className='header--title-container'>
        <h1 className='header--title'>
          La próxima revolución en el intercambio de criptomonedas.
        </h1>
        <p className='header--subtitle'>
          Batatabit te ayuda a navegar entre los diferentes precios y
          tendencias.
        </p>
        <a href='#plans' className='header--button'>
          Conoce Nuestros Planes <span className='header--button-icon'></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
