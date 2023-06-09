import React from 'react';
import styles from './Blah.module.css';

function TopBanner(props: any) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-1">
          <img src="./logo192.png" alt="Company Logo" />
        </div>

        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBanner;
