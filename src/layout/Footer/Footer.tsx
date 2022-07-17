import logoFooter from '../../assets/images/logo-footer.svg';

const Footer = () => {
  return (
    <footer>
      <section className='left'>
        <ul>
          <li>
            <a href='#'>LinkedIn</a>
          </li>
          <li>
            <a href='#'>Crunchbase</a>
          </li>
          <li>
            <a href='#'>Hackernews</a>
          </li>
        </ul>
      </section>
      <section className='right'>
        <img
          src={logoFooter}
          alt='Logo de Batatabit 2021'
          width='64'
          height='50'
          fetchpriority='low'
          decoding='async'
          loading='lazy'
        />
      </section>
    </footer>
  );
};

export default Footer;
