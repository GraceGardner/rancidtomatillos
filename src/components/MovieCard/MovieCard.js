import './MovieCard.scss';

const MovieCard = ({image, title, id, selectMovie}) => {
  return (
    <div className='card-container'>
      <div
        className='card'
        id={id}
        onClick={() => selectMovie(id)}
        tabIndex='0'
        role='button'>
        <img className='card-image' src={image} alt={title + ' cover'}/>
      </div>
      <h3 className='card-text'>{title}</h3>
    </div>
  )
}

export default MovieCard;
