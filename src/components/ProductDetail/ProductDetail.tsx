import batata from '../../assets/icons/batata.svg';
import checkCircle from '../../assets/icons/check-circle.svg';
import clock from '../../assets/icons/clock.svg';
import dollarSign from '../../assets/icons/dollar-sign.svg';
import eye from '../../assets/icons/eye.svg';

const ProductDetail = () => {
  return (
    <section className='main-product-detail'>
      <span className='product-detail--batata-logo'>
        <img
          src={batata}
          alt=''
          width='40'
          height='25'
          fetchpriority='low'
          decoding='async'
          loading='lazy'
        />
      </span>
      <div className='product-detail--title'>
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>
      <section className='product-cards--container'>
        <article className='product-detail--card'>
          <img
            className='icon-card'
            src={clock}
            alt=''
            width='20'
            height='20'
            fetchpriority='low'
            decoding='async'
            loading='lazy'
          />
          <p className='product--card-title'>Tiempo real</p>
          <p className='product--card-body'>
            Nuestra API toma información minuto a minuto sobre las tasas que más
            determinan el comportamiento.
          </p>
        </article>
        <article className='product-detail--card'>
          <img
            className='icon-card'
            src={eye}
            alt=''
            width='20'
            height='20'
            fetchpriority='low'
            decoding='async'
            loading='lazy'
          />
          <p className='product--card-title'>No hay tasas escondidas</p>
          <p className='product--card-body'>
            Ni en la compra o al momento de exit, Batabit siempre te muestra el
            costo real de lo que estás adquiriendo.
          </p>
        </article>
        <article className='product-detail--card'>
          <img
            className='icon-card'
            src={dollarSign}
            alt=''
            width='20'
            height='20'
            fetchpriority='low'
            decoding='async'
            loading='lazy'
          />
          <p className='product--card-title'>Compara monedas</p>
          <p className='product--card-body'>
            Ni en la compra o al momento de exit, Batabit siempre te muestra el
            costo real de lo que estás adquiriendo.
          </p>
        </article>
        <article className='product-detail--card'>
          <img
            className='icon-card'
            src={checkCircle}
            alt=''
            width='20'
            height='20'
            fetchpriority='low'
            decoding='async'
            loading='lazy'
          />
          <p className='product--card-title'>Información confiable</p>
          <p className='product--card-body'>
            Nuestras fuentes están 100% verificadas y continuamos auditando su
            contenido mientras actualizan.
          </p>
        </article>
      </section>
    </section>
  );
};

export default ProductDetail;
