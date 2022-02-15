import { Link } from 'react-router-dom';
import tomatillo from '../../assets/tomatillo.svg';
import './MovieCard.scss';

const MovieCard = ({image, title, id, selectMovie, rating}) => {
  return (
    <div className='card-container'>
      <Link to={`/${id}`}>
        <div
          className='card'
          id={id}
          tabIndex='0'
          role='button'
        >
          <img className='card-image' src={image} alt={title + ' cover'}/>
        </div>
      </Link>
      <p className='rating'>
        <img
          className='tomatillo'
          src={tomatillo}
        />
        {rating.toFixed(1)}
      </p>
      <h3 className='title'>{title}</h3>
    </div>
  );
}

export default MovieCard;
