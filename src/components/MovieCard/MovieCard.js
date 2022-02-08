import './MovieCard.scss';
import tomatillo from '../../assets/tomatillo.svg';

const MovieCard = ({image, title, id, selectMovie, rating}) => {
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
      <p className='rating'>
        <img
          className='tomatillo'
          src={tomatillo}/>
        {rating.toFixed(1)}
      </p>
      <h3 className='title'>{title}</h3>
    </div>
  )
}

export default MovieCard;
