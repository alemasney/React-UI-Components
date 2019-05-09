import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';


const App = () => {
  return (
    <div className="section-container clearfix">
      <div>
        <ImageThumbnail />
      </div>
      <div className="content-container">
          <HeaderContainer />
          <CardContainer />
      </div>
    </div>
  );
};

export default App;
