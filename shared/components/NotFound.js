import React from 'react';
import Header from './Header';

const style = {
  padding: '16px'
};

export default ({ route }) => (
  <div className="container">
    <Header headerTitle="Not Found" showBackButton={true}/>
    <div>
      <div style={style}>
        <h1>Sorry!</h1>
        <p>Something went wrong…</p>
      </div>
    </div>
  </div>
);
