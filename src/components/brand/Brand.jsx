import React from 'react';
import { goldman, tmobile, nvidia, ubs, siemens } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand-section">
    <h4>More than 200+ corporate bodies and schools trust us</h4>
    <div className="gpt3__brand section__padding">
      <div>
        <img src={goldman} />
      </div>
      <div>
        <img src={tmobile} />
      </div>
      <div>
        <img src={siemens} />
      </div>
      <div>
        <img src={ubs} />
      </div>
      <div>
        <img src={nvidia} />
      </div>
    </div>
  </div>
);

export default Brand;
