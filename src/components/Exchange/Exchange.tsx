import trendingDown from '../../assets/icons/trending-down.svg';
import trendingUp from '../../assets/icons/trending-up.svg';
import bitcoin from '../../assets/images/bitcoin.svg';
import { useDate } from '../../hooks';

const Exchange = () => {
  const date = useDate();

  return (
    <section className='main-exchange-container'>
      <img
        className='main-exchange-image'
        src={bitcoin}
        alt=''
        width='200'
        height='200'
        fetchpriority='high'
        decoding='sync'
        loading='eager'
      />
      <div className='main-exchange-container--title'>
        <h2>Visibilizamos todas las tasas de cambio.</h2>
        <p>
          Traemos información en tiempo real de las casas de cambio y las
          monedas más importantes del mundo.
        </p>
      </div>
      <section className='main-tables-container main-tables--slider'>
        <div className='main-currency-table'>
          <p className='currency-table--title'>Monedas</p>
          <div className='currency-table--container'>
            <table>
              <tr>
                <td className='table__top-left'>Bitcoin</td>
                <td className='table__top-right table__right'>
                  $ 1.96
                  <img
                    className='trending-down'
                    src={trendingDown}
                    alt=''
                    width='15'
                    height='15'
                    fetchpriority='low'
                    decoding='async'
                    loading='lazy'
                  />
                </td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td className='table__right'>
                  $ 0.07
                  <img
                    className='trending-up'
                    src={trendingUp}
                    alt=''
                    width='15'
                    height='15'
                    fetchpriority='low'
                    decoding='async'
                    loading='lazy'
                  />
                </td>
              </tr>
              <tr>
                <td>Ripple</td>
                <td className='table__right'>
                  $ 2.17
                  <img
                    className='trending-down'
                    src={trendingDown}
                    alt=''
                    width='15'
                    height='15'
                    fetchpriority='low'
                    decoding='async'
                    loading='lazy'
                  />
                </td>
              </tr>
              <tr>
                <td className='table__bottom-left'>Stella</td>
                <td className='table__bottom-right table__right'>
                  $ 4.96
                  <img
                    className='trending-down'
                    src={trendingDown}
                    alt=''
                    width='15'
                    height='15'
                    fetchpriority='low'
                    decoding='async'
                    loading='lazy'
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className='currency-table--date currency-table--date__bg'>
            <p>
              <b>Actualizado:</b> <span>{date}</span>
            </p>
          </div>
        </div>
        <div className='main-comisiones-table'>
          <p className='comisiones-table--title'>Comisiones</p>
          <div className='comisiones-table--container'>
            <table>
              <tr>
                <td className='table__top-left'>Bitrade</td>
                <td className='table__top-right table__right'>$ 12.96</td>
              </tr>
              <tr>
                <td>Bitpreco</td>
                <td className='table__right'>$ 13.07</td>
              </tr>
              <tr>
                <td>Novadax</td>
                <td className='table__right'>$ 13.15</td>
              </tr>
              <tr>
                <td className='table__bottom-left'>Coinext</td>
                <td className='table__bottom-right table__right'>$ 14.96</td>
              </tr>
            </table>
          </div>
          <div className='comisiones-table--date comisiones-table--date__bg'>
            <p>
              <b>Actualizado:</b> <span>{date}</span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Exchange;
