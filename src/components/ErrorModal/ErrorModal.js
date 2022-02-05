import React from 'react';
import './ErrorModal.css';

const ErrorModal = ({error}) => {
  return(
    <div className='error-modal'>
      <p className='modal-content'>{error}</p>
    </div>
  )
}

export default ErrorModal
