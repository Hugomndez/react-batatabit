import orangeRightArrow from '../../assets/icons/orange-right-arrow.svg';

const Plans = () => {
  return (
    <section id='plans' className='main-plans-container'>
      <div className='plans--title'>
        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      </div>
      <section className='plans-container--slider'>
        <article className='plans-container--card'>
          <div className='plan-info-container'>
            <h3 className='plan-card--title'>Pago mensual</h3>
            <p className='plan-card--price'>
              <span>$</span> 19
            </p>
            <p className='plan-card--saving'>* Acceso limitado.</p>
            <button className='plan-card--ca'>
              Escoger este
              <img
                className='plan-card--ca-icon'
                src={orangeRightArrow}
                alt=''
                width='20'
                height='20'
                fetchpriority='low'
                decoding='async'
                loading='lazy'
              />
            </button>
          </div>
        </article>
        <article className='plans-container--card'>
          <p className='cards recommended'>Recomendado</p>
          <div className='plan-info-container'>
            <h3 className='plan-card--title'>Pago anual</h3>
            <p className='plan-card--price'>
              <span>$</span> 99
            </p>
            <p className='plan-card--saving'>
              * Ahorras $129 comparado al plan mensual.
            </p>
            <button className='plan-card--ca'>
              Escoger este
              <img
                className='plan-card--ca-icon'
                src={orangeRightArrow}
                alt=''
                width='20'
                height='20'
                fetchpriority='low'
                decoding='async'
                loading='lazy'
              />
            </button>
          </div>
        </article>
        <article className='plans-container--card'>
          <div className='plan-info-container'>
            <h3 className='plan-card--title'>Pago anual</h3>
            <p className='plan-card--price'>
              <span>$</span> 199
            </p>
            <p className='plan-card--saving'>* Acceso ilimitado.</p>
            <button className='plan-card--ca'>
              Escoger este
              <img
                className='plan-card--ca-icon'
                src={orangeRightArrow}
                alt=''
                width='20'
                height='20'
                fetchpriority='low'
                decoding='async'
                loading='lazy'
              />
            </button>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Plans;
