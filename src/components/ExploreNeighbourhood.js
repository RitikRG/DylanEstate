import { useState } from 'react';
import GoogleMapComponent from "./GoogleMapComponent";
import '../css/exploreNeighbourhood.css';

const ExploreNeighbourhood=(selections)=>{
    const [activeTab, setActiveTab] = useState('transport');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return(
        <div className="neighborhood-section">
          <h2>Explore Neighborhood</h2>
          <div className='map-section'>
            <div className="search-section">
                <div className="location">
                    <span className="location-icon">📍</span>
                    <span className="location-name">{selections['locality-area']}</span>
                </div>
                <div className="search-box">
                    <label htmlFor="to">To:</label>
                    <input type="text" id="to" name="to" />
                    <button className="btn" id="search-button">Search</button>
                </div>
            </div>
            <div className="map-container">
                {<GoogleMapComponent/>}
            </div>
          </div>
          
          <div className="tabs-container">
            <div className="tabs">
              <button className={`tab ${activeTab === 'transport' ? 'active' : ''}`} onClick={() => handleTabClick('transport')}>Transport</button>
              <button className={`tab ${activeTab === 'essentials' ? 'active' : ''}`} onClick={() => handleTabClick('essentials')}>Essentials</button>
              <button className={`tab ${activeTab === 'utility' ? 'active' : ''}`} onClick={() => handleTabClick('utility')}>Utility</button>
            </div>
            <div className={`tab-content ${activeTab === 'transport' ? 'active' : ''}`} id="transport">
                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => handleToggle(0)}>
                            <img src="https://img.icons8.com/ios/50/bus.png"/> Bus Station
                        </div>
                        {activeIndex === 0 && (
                        <div className="accordion-content">
                            <ul>
                            <li>Mira Road Station (E) - 0.7 km | 3 mins</li>
                            <li>Mira Road Station (E) - 0.8 km | 2 mins</li>
                            <li>Mira Road Station (E) - 0.9 km | 4 mins</li>
                            <li>Mira Road Police Station - 1.8 km | 6 mins</li>
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => handleToggle(1)}>
                        <img src="https://img.icons8.com/external-bartama-outline-32-bartama-graphic/32/external-rail-vehicle-bartama-outline-32-bartama-graphic.png"/>Railway Station
                        </div>
                        {activeIndex === 1 && (
                        <div className="accordion-content">
                            <ul>
                            <li>Details here</li>
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => handleToggle(2)}>
                        <img src="https://img.icons8.com/parakeet-line/48/subway.png"/> Metro stations
                        </div>
                        {activeIndex === 2 && (
                        <div className="accordion-content">
                            <ul>
                            <li>Details here</li>
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => handleToggle(3)}>
                        <img src="https://img.icons8.com/ios/50/airport.png"/> Airport
                        </div>
                        {activeIndex === 3 && (
                        <div className="accordion-content">
                            <ul>
                            <li>Details here</li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={`tab-content ${activeTab === 'essentials' ? 'active' : ''}`} id="essentials">
            <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => handleToggle(0)}>
                        <img src="https://img.icons8.com/pastel-glyph/64/hospital--v1.png"/> Hosptal
                        </div>
                        {activeIndex === 0 && (
                        <div className="accordion-content">
                            <ul>
                            <li>Details here</li>
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => handleToggle(1)}>
                        <img src="https://img.icons8.com/ios/50/school.png"/> Railway Station
                        </div>
                        {activeIndex === 1 && (
                        <div className="accordion-content">
                            <ul>
                            <li>Details here</li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={`tab-content ${activeTab === 'utility' ? 'active' : ''}`} id="utility">
                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => handleToggle(0)}>
                        <img src="https://img.icons8.com/pastel-glyph/64/market--v2.png"/> Market
                        </div>
                        {activeIndex === 0 && (
                        <div className="accordion-content">
                            <ul>
                            <li>Details Here.</li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
            </div>
          </div>
        </div>
      );;
}

export default ExploreNeighbourhood;