import React, { useEffect } from 'react';
import Map from './Map';
import './modal.sass';

const Modal = ({ onRequestClose, title, latitude, longitude }) => {

  useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}

		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = 'visible';
			document.removeEventListener('keydown', onKeyDown);
		};
	});

  return (
		<div className='modal__backdrop'>
			<div className='modal__container'>
        <h3 className='modal__title'>{title}</h3>
				<Map latitude={latitude} longitude={longitude} />
				<button type='button' onClick={onRequestClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;