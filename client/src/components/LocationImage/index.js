import React from 'react';
import './style.css';

function LocationImage(props) {
  const { location } = props; //eslint-disable-line
  if (location === 'Bedroom') {
    return <img className="d-flex justify-content-center" width="100%" src="https://2.bp.blogspot.com/-aJeNQHsphoc/WYXlgNrWb_I/AAAAAAABc_k/GK8zHt-DU_AcqvsjrL-Sj0YL-o0_5LlGQCEwYBhgL/s1600/Toyoi-Yuuta-12.gif" alt="Bedroom" />;
  }
  if (location === 'Home') {
    return <img className="d-flex justify-content-center" width="100%" src="https://2.bp.blogspot.com/-aJeNQHsphoc/WYXlgNrWb_I/AAAAAAABc_k/GK8zHt-DU_AcqvsjrL-Sj0YL-o0_5LlGQCEwYBhgL/s1600/Toyoi-Yuuta-12.gif" alt="Home" />;
  }
  if (location === 'Kitchen') {
    return <img className="d-flex justify-content-center" width="100%" src="https://i.pinimg.com/originals/ef/88/13/ef8813486a93676a1dce5fe65934d2b8.png" alt="Kitchen" />;
  }
  if (location === 'Street') {
    return <img className="d-flex justify-content-center" width="100%" src="https://i.pinimg.com/originals/cf/65/90/cf6590a43b1817dda2538edecf99ca56.gif" alt="Street" />;
  }
  if (location === 'Unknown') {
    return <img className="d-flex justify-content-center" width="100%" src="https://68.media.tumblr.com/b08695df17f02b0dbe3d6300a4116912/tumblr_ou4wr2TBMk1qke11oo1_540.gif" alt="Unknown" />;
  }
  if (location === 'Living Room Floor') {
    return <img className="d-flex justify-content-center" width="100%" src="https://68.media.tumblr.com/b6231b4d5e3be51d0a8b302f29e628ae/tumblr_om3zookB751rnbw6mo2_r1_540.gif" alt="Livingroom Floor" />;
  }
  if (location === 'Coffee Shop') {
    return <img className="d-flex justify-content-center" width="100%" src="https://i.gzn.jp/img/2014/11/29/1041uuu-gif/04.gif" alt="Coffee Shop" />;
  }
  if (location === 'Commute (Train)') {
    return <img className="d-flex justify-content-center" width="100%" src="https://i.imgur.com/Sx3HCPM.gif" alt="Train" />;
  }
  if (location === 'Commute (Bus)') {
    return <img className="d-flex justify-content-center" width="100%" src="https://i.imgur.com/Sx3HCPM.gif" alt="Bus" />;
  }
  if (location === 'Commute (Taxi)') {
    return <img className="d-flex justify-content-center" width="100%" src="https://68.media.tumblr.com/b08695df17f02b0dbe3d6300a4116912/tumblr_ou4wr2TBMk1qke11oo1_540.gif" alt="Taxi" />;
  }
  if (location === 'Bank') {
    return <img className="d-flex justify-content-center" width="100%" src="https://66.media.tumblr.com/7db449111e356b6597d8c3c71d2507a8/tumblr_ofsfaffr971rnbw6mo1_1280.gif" alt="Bank" />;
  }
  if (location === 'Bar') {
    return <img className="d-flex justify-content-center" width="100%" src="https://68.media.tumblr.com/063481f87ba3058c8bb235148df090b9/tumblr_nb8zykBVPC1qze3hdo1_r1_500.gif" alt="Bar" />;
  }
  if (location === 'Restaurant') {
    return <img className="d-flex justify-content-center" width="100%" src="https://blazepress.com/.image/t_share/MTMyNTkzNjEzNzY1OTA4OTU4/subtle-motion-gif-1gif.gif" alt="Restaurant" />;
  }
  if (location === 'Downtown') {
    return <img className="d-flex justify-content-center" width="100%" src="https://78.media.tumblr.com/f6395bca7a86e8efa6807271b64fb7f4/tumblr_p4jpsnKZQu1qze3hdo1_500.gif" alt="downtown" />;
  }
  return null;
  // return <img className="d-flex justify-content-center" width="100%" src="https://2.bp.blogspot.com/-aJeNQHsphoc/WYXlgNrWb_I/AAAAAAABc_k/GK8zHt-DU_AcqvsjrL-Sj0YL-o0_5LlGQCEwYBhgL/s1600/Toyoi-Yuuta-12.gif" alt="Bedroom" />;
}

export default LocationImage;
