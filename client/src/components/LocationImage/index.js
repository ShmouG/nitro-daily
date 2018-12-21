import React from 'react';
import './style.css';

function LocationImage(location) {
  // const { location } = location;
  if (location === 'Bedroom') {
    return <img className="d-flex justify-content-center" width="100%" src="https://2.bp.blogspot.com/-aJeNQHsphoc/WYXlgNrWb_I/AAAAAAABc_k/GK8zHt-DU_AcqvsjrL-Sj0YL-o0_5LlGQCEwYBhgL/s1600/Toyoi-Yuuta-12.gif" alt="example" />;
  }
  return <img className="d-flex justify-content-center" width="100%" src="https://i.gzn.jp/img/2014/11/29/1041uuu-gif/04.gif" alt="example" />;
}

export default LocationImage;
