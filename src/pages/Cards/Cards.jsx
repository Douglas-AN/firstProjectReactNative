import './Cards.css';

function Cards({data}) {
  return (
    <a className='link-article'>
      <article>
        <header>
          <h2>{data.name}</h2>
        </header>
        <p>{data.ticker + ' ' + data.network}</p>
      </article>
    </a>
  );
}

export default Cards;
