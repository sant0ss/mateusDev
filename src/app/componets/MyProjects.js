import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function MyProjects() {
  
  const items = Array.from({ length: 6 }, (_, index) => (
    <div className="proj-box-single shadow-lg m-auto w-3/4 h-72 bg-black rounded-xl drop-shadow " key={index}>
      <h2 className='text-cinza text-center text-5xl mt-28'><FontAwesomeIcon icon={faGear} spin /></h2>
    </div>
  ));

  return (
    <div className="mt-12 grid xl:grid-cols-3 grid-cols-1 gap-12 lg:mx-24 mx-0">
      {items}
    </div>
  );
}

export default MyProjects;