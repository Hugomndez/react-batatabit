import bitcoinBaby2x from '../../assets/images/bitcoinbaby2x.jpg';

const Poster = () => {
  return (
    <section className='bitcoin-img-container'>
      <img
        className='bitcoin-bg-image'
        src={bitcoinBaby2x}
        alt=''
        fetchpriority='low'
        decoding='async'
        loading='lazy'
      />
      <h2>Conócelo hoy</h2>
    </section>
  );
};

export default Poster;
