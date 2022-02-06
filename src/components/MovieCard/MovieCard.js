import './MovieCard.scss';

const MovieCard = ({image, title, id, selectMovie}) => {
  return (
    <div className='card-container'>
      <button
        id={id}
        onClick={() => selectMovie(id)}>
        <img className='card-image' src={image} alt={title + ' cover'}/>
      </button>
      <h3 className='card-text'>{title}</h3>
    </div>
  )
}

export default MovieCard;
