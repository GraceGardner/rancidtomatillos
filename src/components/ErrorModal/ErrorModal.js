import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorModal.scss';

const ErrorModal = ({error}) => {
  return(
    <div className='error-modal'>
      <div className='modal-content'>
        <p className='error-message'>{error}</p>
        {!error.includes('500') && <Link to='/'>Take me to the Rotten Tomatillos home page</Link>}
      </div>
    </div>
  )
}

export default ErrorModal
