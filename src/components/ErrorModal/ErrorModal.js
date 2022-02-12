import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorModal.scss';

const ErrorModal = ({error}) => {
  console.log(typeof error)
  return(
    <div className='error-modal'>
      <p className='modal-content'>
        {error}
        {!error.includes('500') && <Link to='/'>Take me to the Rotten Tomatillos home page</Link>}
      </p>
    </div>
  )
}

export default ErrorModal
