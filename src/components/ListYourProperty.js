import React, { useState } from "react";
import notification from '../assets/notification.svg';
import GoogleMapComponent from "./GoogleMapComponent";


const ListYourProperty =()=>{

    const [curTab, setCurTab] = useState(1);

    const [propType, setPropType] = useState("");

    const [showMaintainance, setShowMaintainance] = useState('hide');

    const propDetailSelections={};
    const locationDetailSelections={};
    const featuresDetailSelections={};
    const priceDetailSelections={};

    const updateSelection=(e, selections)=>{
        selections[e.target.name]= e.target.value;
    }

    const handlePropDetailSelections=(e)=>{
        updateSelection(e,propDetailSelections);
    }
    const handleLocationDetailSelections=(e)=>{
        updateSelection(e,locationDetailSelections);
    }
    const handleFeaturesDetailSelections=(e)=>{
        updateSelection(e,featuresDetailSelections);
    }
    const handlePriceDetailSelections=(e)=>{
        updateSelection(e,priceDetailSelections);
    }

    const setNavClass =(curTab, tabNum)=>{
        if(curTab==tabNum){
            return 'active-tab';
        }else if(curTab<tabNum){
            return 'non-active-tab';
        }else{
            return 'completed-tab';
        }
    }

    const handleSubmit=()=>{
        setCurTab(curTab+1);
        console.log(curTab);
    }

    const handlePropChange=(e)=>{
        if(e.target.value=="Residential"){
            setPropType(
                <div className="button-group" style={{marginTop:'20px'}}>
                    <input type="radio" name="property_type" value="Flat/Apartment" id="flat-or-apartment" onChange={handlePropDetailSelections}/><label for="flat-or-apartment">Flat / Apartment</label> 
                    <input type="radio" name="property_type" value="House/Villa" id="house-or-villa" onChange={handlePropDetailSelections}/><label for="house-or-villa"> House / Villa</label>
                </div>
                );
        }else if(e.target.value=="Commercial"){
            setPropType(
                <div className="button-group" style={{marginTop:'20px'}}>
                    <input type="radio" name="property_type" value="Office Space" id="office-space" onChange={handlePropDetailSelections}/>
                    <label for="office-space">Office Space</label>
                    <input type="radio" name="property_type" value="Co-working" id="co-working" onChange={handlePropDetailSelections}/>
                    <label for="co-working">Co-working</label>
                    <input type="radio" name="property_type" value="Restaurant/Cafe" id="restaurant-cafe" onChange={handlePropDetailSelections}/>
                    <label for="restaurant-cafe">Restaurant/Cafe</label>
                    <input type="radio" name="property_type" value="Shop/Showroom" id="shop-showroom" onChange={handlePropDetailSelections}/>
                    <label for="shop-showroom">Shop/Showroom</label>
                    <input type="radio" name="property_type" value="Industrial Bldg." id="industrial-bldg" onChange={handlePropDetailSelections}/>
                    <label for="industrial-bldg">Industrial Bldg.</label>
                    <input type="radio" name="property_type" value="Industrial Shed" id="industrial-shed" onChange={handlePropDetailSelections}/>
                    <label for="industrial-shed">Industrial Shed</label>
                    <input type="radio" name="property_type" value="Warehouse/Godown" id="warehouse-godown" onChange={handlePropDetailSelections}/>
                    <label for="warehouse-godown">Warehouse/Godown</label>
                </div>
            );
        }else{
            setPropType("");
        }
    }

    const maintainanceCostContainer=(e)=>{
        if(e.target.value=='extra'){
            setShowMaintainance('form-group');
        }else{
            setShowMaintainance('hide');
        }
    }

    const setForm=(curTab)=>{
        if(curTab==1){
            // Property details
            return(
                <form className="property-form">
                    <div className="form-group"  id="property_for">
                        <label><span className="required">*</span>Property For:</label>
                        <div className="radio-group">
                            <div><input type="radio" name="property_for" value="Rent" id="Rent" onChange={handlePropDetailSelections}/><label for='Rent'> Rent</label></div>
                            <div><input type="radio" name="property_for" value="Sale" id="Sale" onChange={handlePropDetailSelections}/><label for='Sale'> Sale</label></div>
                        </div>
                        
                    </div>
                    
                    <div className="form-group" id="property_type">
                        <label><span className="required">*</span>Property Type:</label>
                        <div className="radio-group">
                            <div><input type="radio" name="property_type" value="Residential" id="Residential" onInput={handlePropChange}/><label for='Residential'>Residential</label> </div>
                            <div><input type="radio" name="property_type" value="Commercial" id="Commercial"  onInput={handlePropChange}/> <label for='Commercial'>Commercial</label></div>
                            <div><input type="radio" name="property_type" value="Land/Plot" id="Land/Plot" onChange={handlePropDetailSelections} onInput={handlePropChange}/> <label for='Land/Plot'>Land / Plot</label></div>
                        </div>
                        <div>{propType}</div>
                    </div>
                    
                    <div className="form-group" id="built-up-area">
                        <label for="built-up-area">Built up Area<span className="required">*</span></label>
                        <input type="number" id="built-up-area" name="built_up_area" required placeholder="Sq. Ft." onInput={handlePropDetailSelections}/> 
                    </div>
                    
                    <div className="form-group" id="carpet-area-con">
                        <label for="carpet-area">Carpet Area<span className="required">*</span></label>
                        <input type="number" id="carpet-area" name="carpet_area" required placeholder="Sq. Ft." onInput={handlePropDetailSelections}/> 
                    </div>
                    
                    <div className="form-group" id="property-on-floor-con">
                        <label for="property-on-floor">Property on Floor<span className="required">*</span></label>
                        <input type="number" id="property-on-floor" name="property_on_floor" required onInput={handlePropDetailSelections}/>
                    </div>
                    
                    <div className="form-group" id="total-floors-con">
                        <label for="total-floors">Total Floors <span className="required">*</span></label>
                        <input type="number" id="total-floors" name="total_floors" required onInput={handlePropDetailSelections}/>
                    </div>
                    
                    <div className="form-group" id="property-facing-con">
                        <label for="property-facing">Property Facing <span className="required">*</span></label>
                        <select id="property-facing" name="property_facing" required onChange={handlePropDetailSelections}>
                            <option value="">Select</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                            <option value="North-East">North East</option>
                            <option value="North-West">North West</option>
                            <option value="South-East">South East</option>
                            <option value="South-West">South West</option>
                        </select>
                    </div>
                    
                    <div className="form-group" id="property_age">
                        <label><span className="required">*</span>Property Age:</label>
                        <div className="button-group">
                            <input type="radio" name="property_age" value="Less than 1 Year" id="less-than-one" onInput={handlePropDetailSelections}/><label for="less-than-one">Less than 1 Year</label> 
                            <input type="radio" name="property_age" value="1-3 Years" id="one-to-three" onInput={handlePropDetailSelections}/><label for="one-to-three"> 1-3 Years</label>
                            <input type="radio" name="property_age" value="3-5 Years" id="three-to-five" onInput={handlePropDetailSelections}/><label for="three-to-five"> 3-5 Years</label>
                            <input type="radio" name="property_age" value="5-10 Years" id="five-to-ten" onInput={handlePropDetailSelections}/><label for="five-to-ten"> 5-10 Years</label>
                            <input type="radio" name="property_age" value="Greater than 10 Years" id="ten-plus" onInput={handlePropDetailSelections}/><label for="ten-plus"> Greater than 10 Years</label>
                        </div>
                        
                    </div>
                    
                    <div className="form-group" id="bhk_type">
                        <label><span className="required">*</span>BHK Type:</label>
                        <div className="button-group">
                            <input type="radio" name="bhk_type" value="1 RK" id="one-rk" onInput={handlePropDetailSelections}/><label for="one-rk">1 RK</label> 
                            <input type="radio" name="bhk_type" value="1 BHK" id="one-bhk" onInput={handlePropDetailSelections}/><label for="one-bhk"> 1 BHK</label>
                            <input type="radio" name="bhk_type" value="2 BHK" id="two-bhk" onInput={handlePropDetailSelections}/><label for="two-bhk"> 2 BHK</label>
                            <input type="radio" name="bhk_type" value="3 BHK" id="three-bhk" onInput={handlePropDetailSelections}/><label for="three-bhk"> 3 BHK</label>
                            <input type="radio" name="bhk_type" value="4 BHK" id="four-bhk" onInput={handlePropDetailSelections}/><label for="four-bhk"> 4 BHK</label>
                            <input type="radio" name="bhk_type" value="5+ BHK" id="five-bhk" onInput={handlePropDetailSelections}/><label for="five-bhk"> 5+ BHK</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="bathrooms_toilets">
                        <label><span className="required">*</span>Bathrooms/ Toilets:</label>
                        <div className="button-group">
                            <input type="radio" name="bathrooms_toilets" value="1" id="bathroom-1" onInput={handlePropDetailSelections}/>
                            <label for="bathroom-1">1</label>
                            <input type="radio" name="bathrooms_toilets" value="2" id="bathroom-2" onInput={handlePropDetailSelections}/>
                            <label for="bathroom-2">2</label>
                            <input type="radio" name="bathrooms_toilets" value="3" id="bathroom-3" onInput={handlePropDetailSelections}/>
                            <label for="bathroom-3">3</label>
                            <input type="radio" name="bathrooms_toilets" value="4" id="bathroom-4" onInput={handlePropDetailSelections}/>
                            <label for="bathroom-4">4</label>
                            <input type="radio" name="bathrooms_toilets" value="5" id="bathroom-5" onInput={handlePropDetailSelections}/>
                            <label for="bathroom-5">5</label>
                            <input type="radio" name="bathrooms_toilets" value="6+" id="bathroom-6" onInput={handlePropDetailSelections}/>
                            <label for="bathroom-6">6+</label>
            </div>
                    </div>
                    
                    <div className="form-group" id="balcony">
                        <label><span className="required">*</span>Balcony:</label>
                        <div className="button-group">
                            <input type="radio" name="balcony" value="0" id="balcony-0" onInput={handlePropDetailSelections}/>
                            <label for="balcony-0">0</label>
                            <input type="radio" name="balcony" value="1" id="balcony-1" onInput={handlePropDetailSelections}/>
                            <label for="balcony-1">1</label>
                            <input type="radio" name="balcony" value="2" id="balcony-2" onInput={handlePropDetailSelections}/>
                            <label for="balcony-2">2</label>
                            <input type="radio" name="balcony" value="3" id="balcony-3" onInput={handlePropDetailSelections}/>
                            <label for="balcony-3">3</label>
                            <input type="radio" name="balcony" value="4+" id="balcony-4" onInput={handlePropDetailSelections}/>
                            <label for="balcony-4">4+</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="tenant_preference">
                        <label>Tenant Preference:</label>
                        <div className="button-group">
                            <input type="radio" name="tenant_preference" value="Any" id="tenant-any" onInput={handlePropDetailSelections}/>
                            <label for="tenant-any">Any</label>
                            <input type="radio" name="tenant_preference" value="Family" id="tenant-family" onInput={handlePropDetailSelections}/>
                            <label for="tenant-family">Family</label>
                            <input type="radio" name="tenant_preference" value="Bachelor (Man)" id="tenant-bachelor-man" onInput={handlePropDetailSelections}/>
                            <label for="tenant-bachelor-man">Bachelor (Man)</label>
                            <input type="radio" name="tenant_preference" value="Bachelor (Women)" id="tenant-bachelor-women" onInput={handlePropDetailSelections}/>
                            <label for="tenant-bachelor-women">Bachelor (Women)</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="availability">
                        <label>Availability:</label>
                        <div className="button-group">
                            <input type="radio" name="availability" value="Immediate" id="avail-immediate" onInput={handlePropDetailSelections}/>
                            <label for="avail-immediate">Immediate</label>
                            <input type="radio" name="availability" value="within 15 days" id="avail-15-days" onInput={handlePropDetailSelections}/>
                            <label for="avail-15-days">within 15 days</label>
                            <input type="radio" name="availability" value="within 1 month" id="avail-1-month" onInput={handlePropDetailSelections}/>
                            <label for="avail-1-month">within 1 month</label>
                            <input type="radio" name="availability" value="within 2 months" id="avail-2-months" onInput={handlePropDetailSelections}/>
                            <label for="avail-2-months">within 2 months</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="property-description-con">
                        <label for="property-description">Property Description</label>
                        <textarea id="property-description" name="property_description" required onInput={handlePropDetailSelections}></textarea>
                    </div>
                    
                </form>
            )
        }else if(curTab==2){
            return(
                <div className="location-details">
                    <div class="form-group" id="building/society-name-con">
                        <label for="building-society-name">Building / Society Name<span class="required">*</span></label>
                        <input type="text" id="building-society-name" name="building-society-name" required placeholder="Enter Apartment Name" onInput={handleLocationDetailSelections}/>
                    </div>

                    <div class="form-group" id="locality-area-con">
                        <label for="locality-area">Locality / Area<span class="required">*</span></label>
                        <input type="text" id="locality-area" name="locality-area" required placeholder="Eg: sheetal nagar" onInput={handleLocationDetailSelections}/>
                    </div>

                    <div class="form-group" id="landmark-street-name-con">
                        <label for="landmark-street-name">Landmark / Street Name</label>
                        <input type="text" id="landmark-street-name" name="landmark-street-name" placeholder="Prominent Landmark" onInput={handleLocationDetailSelections}/>
                    </div>

                    <div class="form-group" id="city-con">
                        <label for="city">City</label>
                        <select id="city" name="city" onChange={handleLocationDetailSelections}>
                            <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
                            <option value="Delhi, Delhi">Delhi, Delhi</option>
                            <option value="Bengaluru, Karnataka">Bengaluru, Karnataka</option>
                            <option value="Hyderabad, Telangana">Hyderabad, Telangana</option>
                            <option value="Ahmedabad, Gujarat">Ahmedabad, Gujarat</option>
                            <option value="Chennai, Tamil Nadu">Chennai, Tamil Nadu</option>
                            <option value="Kolkata, West Bengal">Kolkata, West Bengal</option>
                            <option value="Surat, Gujarat">Surat, Gujarat</option>
                            <option value="Pune, Maharashtra">Pune, Maharashtra</option>
                            <option value="Jaipur, Rajasthan">Jaipur, Rajasthan</option>
                            <option value="Lucknow, Uttar Pradesh">Lucknow, Uttar Pradesh</option>
                            <option value="Kanpur, Uttar Pradesh">Kanpur, Uttar Pradesh</option>
                            <option value="Nagpur, Maharashtra">Nagpur, Maharashtra</option>
                            <option value="Indore, Madhya Pradesh">Indore, Madhya Pradesh</option>
                            <option value="Thane, Maharashtra">Thane, Maharashtra</option>
                            <option value="Bhopal, Madhya Pradesh">Bhopal, Madhya Pradesh</option>
                            <option value="Visakhapatnam, Andhra Pradesh">Visakhapatnam, Andhra Pradesh</option>
                            <option value="Pimpri-Chinchwad, Maharashtra">Pimpri-Chinchwad, Maharashtra</option>
                            <option value="Patna, Bihar">Patna, Bihar</option>
                            <option value="Vadodara, Gujarat">Vadodara, Gujarat</option>
                            <option value="Ghaziabad, Uttar Pradesh">Ghaziabad, Uttar Pradesh</option>
                            <option value="Ludhiana, Punjab">Ludhiana, Punjab</option>
                            <option value="Agra, Uttar Pradesh">Agra, Uttar Pradesh</option>
                            <option value="Nashik, Maharashtra">Nashik, Maharashtra</option>
                            <option value="Faridabad, Haryana">Faridabad, Haryana</option>
                            <option value="Meerut, Uttar Pradesh">Meerut, Uttar Pradesh</option>
                            <option value="Rajkot, Gujarat">Rajkot, Gujarat</option>
                            <option value="Kalyan-Dombivli, Maharashtra">Kalyan-Dombivli, Maharashtra</option>
                            <option value="Vasai-Virar, Maharashtra">Vasai-Virar, Maharashtra</option>
                            <option value="Varanasi, Uttar Pradesh">Varanasi, Uttar Pradesh</option>
                        </select>
                    </div>
                    <div className="google-map-con">
                        <label>Mark Locality on Map</label>
                        {<GoogleMapComponent/>}
                    </div>
                </div>
            );
        }else if(curTab==3){
            return(
                <form className="features-form">
                    <label>General Features</label>
                    <div className="form-group" id="non-veg">
                        <label><span className="required">*</span>Non- Veg:</label>
                        <div className="radio-group">
                            <div><input type="radio" name="non_veg" value="Allowed" id="non-veg-allowed" onInput={handleFeaturesDetailSelections}/><label for="non-veg-allowed"> Allowed</label></div>
                            <div><input type="radio" name="non_veg" value="Not Allowed" id="non-veg-not-allowed" onInput={handleFeaturesDetailSelections}/><label for="non-veg-not-allowed"> Not Allowed</label></div>
                        </div>
                    </div>

                    <div className="form-group" id="pets-allowed">
                        <label><span className="required">*</span>Pets Allowed:</label>
                        <div className="radio-group">
                            <div><input type="radio" name="pets_allowed" value="Yes" id="pets-yes" onInput={handleFeaturesDetailSelections}/><label for="pets-yes"> Yes</label></div>
                            <div><input type="radio" name="pets_allowed" value="No" id="pets-no" onInput={handleFeaturesDetailSelections}/><label for="pets-no"> No</label></div>
                        </div>
                    </div>

                    <div className="form-group" id="electricity">
                        <label><span className="required">*</span>Electricity:</label>
                        <div className="radio-group">
                            <div><input type="radio" name="electricity" value="Rare/No Powercut" id="electricity-rare" onInput={handleFeaturesDetailSelections}/><label for="electricity-rare"> Rare/No Powercut</label></div>
                            <div><input type="radio" name="electricity" value="Frequent Powercut" id="electricity-frequent" onInput={handleFeaturesDetailSelections}/><label for="electricity-frequent"> Frequent Powercut</label></div>
                        </div>
                    </div>

                    <div className="form-group" id="water-supply">
                        <label><span className="required">*</span>Water Supply:</label>
                            <div className="radio-group">
                            <div><input type="radio" name="water_supply" value="Municipal Corporation (BMC)" id="water-bmc" onInput={handleFeaturesDetailSelections}/><label for="water-bmc"> Municipal Corporation (BMC)</label></div>
                            <div><input type="radio" name="water_supply" value="Borewell" id="water-borewell" onInput={handleFeaturesDetailSelections}/><label for="water-borewell"> Borewell</label></div>
                            <div><input type="radio" name="water_supply" value="Both" id="water-both" onInput={handleFeaturesDetailSelections}/><label for="water-both"> Both</label></div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="form-group" id="furnishing">
                        <label><span className="required">*</span>Furnishing:</label>
                        <div className="button-group">
                            <div><input type="radio" name="furnishing" value="Fully Furnished" id="fully-furnished" onInput={handleFeaturesDetailSelections}/><label for="fully-furnished"> Fully Furnished</label></div>
                            <div><input type="radio" name="furnishing" value="Semi Furnished" id="semi-furnished" onInput={handleFeaturesDetailSelections}/><label for="semi-furnished"> Semi Furnished</label></div>
                            <div><input type="radio" name="furnishing" value="Unfurnished" id="unfurnished" onInput={handleFeaturesDetailSelections}/><label for="unfurnished"> Unfurnished</label></div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="form-group" id="additional-features">
                        <label>Additional Features:</label>
                        <div className="button-group">
                            <div><input type="checkbox" name="features" value="Air Conditioning" id="air-conditioning"/><label for="air-conditioning"> Air Conditioning</label></div>
                            <div><input type="checkbox" name="features" value="Ceiling Fans" id="ceiling-fans"/><label for="ceiling-fans"> Ceiling Fans</label></div>
                            <div><input type="checkbox" name="features" value="Refrigerator" id="refrigerator"/><label for="refrigerator"> Refrigerator</label></div>
                            <div><input type="checkbox" name="features" value="Washing machine" id="washing-machine"/><label for="washing-machine"> Washing machine</label></div>
                            <div><input type="checkbox" name="features" value="Microwave" id="microwave"/><label for="microwave"> Microwave</label></div>
                            <div><input type="checkbox" name="features" value="Oven" id="oven"/><label for="oven"> Oven</label></div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="form-group" id="tiles">
                        <label>Tiles:</label>
                        <div className="button-group">
                            <div><input type="checkbox" name="tiles" value="Normal White Tiles" id="normal-tiles"/><label for="normal-tiles"> Normal White Tiles</label></div>
                            <div><input type="checkbox" name="tiles" value="Marble" id="marble"/><label for="marble"> Marble</label></div>
                            <div><input type="checkbox" name="tiles" value="Vitrified Tiles" id="vitrified-tiles"/><label for="vitrified-tiles"> Vitrified Tiles</label></div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="form-group" id="safety">
                        <label><span className="required">*</span>Safety:</label>
                        <div className="button-group">
                            <div><input type="checkbox" name="safety" value="24/7 Security personnel (Gated Security)" id="gated-security"/><label for="gated-security"> 24/7 Security personnel (Gated Security)</label></div>
                            <div><input type="checkbox" name="safety" value="Security Systems- CCTV" id="cctv"/><label for="cctv"> Security Systems- CCTV</label></div>
                        </div>
                    </div>

                    <hr></hr>

                    <div class="amenities-grid">
                        <h2>Society Amenities</h2>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/security-guard.png" alt="24/7 Security"/>
                            <label for="security_24_7"> 24/7 Security</label>
                            <input type="checkbox" name="security_24_7" id="security_24_7"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/wallmount-camera.png" alt="CCTV Camera"/>
                            <label for="cctv_camera"> CCTV Camera</label>
                            <input type="checkbox" name="cctv_camera" id="cctv_camera"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-lift-building-and-construction-flatart-icons-outline-flatarticons.png" alt="Lift"/>
                            <label for="lift"> Lift</label>
                            <input type="checkbox" name="lift" id="lift"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/car--v1.png" alt="Reserved Parking"/>
                            <label for="reserved_parking"> Reserved Parking</label>
                            <input type="checkbox" name="reserved_parking" id="reserved_parking"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/pastel-glyph/64/water.png" alt="Regular Water Supply"/>
                            <label for="regular_water_supply"> Regular water supply</label>
                            <input type="checkbox" name="regular_water_supply" id="regular_water_supply"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-power-cord-energy-dreamstale-lineal-dreamstale.png"  alt="Power Backup Partial"/>
                            <label for="power_backup_partial"> Power Back up-Partial</label>
                            <input type="checkbox" name="power_backup_partial" id="power_backup_partial"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-power-cord-energy-dreamstale-lineal-dreamstale.png"  alt="Power Backup Full"/>
                            <label for="power_backup_full"> Power Back up-Full</label>
                            <input type="checkbox" name="power_backup_full" id="power_backup_full"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/staff.png" alt="Maintenance Staff"/>
                            <label for="maintenance_staff"> Maintenance staff</label>
                            <input type="checkbox" name="maintenance_staff" id="maintenance_staff"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/windows/32/tree.png" alt="Garden Park"/>
                            <label for="garden_park"> Garden/ Park</label>
                            <input type="checkbox" name="garden_park" id="garden_park"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/external-others-pike-picture/50/external-attraction-water-park-attraction-others-pike-picture-32.png" alt="Kids Play Area"/>
                            <label for="kids_play_area"> Kids Play area</label>
                            <input type="checkbox" name="kids_play_area" id="kids_play_area"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/windows/32/cycling-road.png" alt="Sport"/>
                            <label for="sport"> Sport</label>
                            <input type="checkbox" name="sport" id="sport"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/external-gym-hotel-nawicon-detailed-outline-nawicon.png" alt="Property Gym"/>
                            <label for="property_gym"> Property Gym</label>
                            <input type="checkbox" name="property_gym" id="property_gym"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/carbon-copy/100/garage-closed.png"  alt="Community Hall"/>
                            <label for="community_hall"> Community Hall</label>
                            <input type="checkbox" name="community_hall" id="community_hall"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/shop--v1.png" alt="Shopping Center"/>
                            <label for="shopping_center"> Shopping center</label>
                            <input type="checkbox" name="shopping_center" id="shopping_center"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/carbon-copy/100/garage-closed.png"  alt="Club House"/>
                            <label for="club_house"> Club House</label>
                            <input type="checkbox" name="club_house" id="club_house"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/lap-pool.png" alt="Swimming Pool"/>
                            <label for="swimming_pool"> Swimming pool</label>
                            <input type="checkbox" name="swimming_pool" id="swimming_pool"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/subwoofer.png" alt="Intercom"/>
                            <label for="intercom"> Intercom</label>
                            <input type="checkbox" name="intercom" id="intercom"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/pastel-glyph/64/fire-element.png" alt="Fire Safety"/>
                            <label for="fire_safety"> Fire Safety</label>
                            <input type="checkbox" name="fire_safety" id="fire_safety"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/carbon-copy/100/garage-closed.png"  alt="Club House 2"/>
                            <label for="club_house_2"> Club House</label>
                            <input type="checkbox" name="club_house_2" id="club_house_2"/>
                        </div>
                        <div class="amenity-item">
                            <img src="https://img.icons8.com/ios/50/lap-pool.png" alt="Swimming Pool 2"/>
                            <label for="swimming_pool_2"> Swimming pool</label>
                            <input type="checkbox" name="swimming_pool_2" id="swimming_pool_2"/>
                        </div>
                    </div>

                    <hr></hr>

                </form>
            );
        }else if(curTab==4){
            return(
                <div className="price-details">
                    <div className="form-group" id="rent-con">
                        <label for="rent">Rent<span class="required">*</span></label>
                        <input type="text" id="rent" name="rent" required placeholder="₹/Month" />
                    </div>

                    <div className="form-group" id="security-con">
                        <label for="security">Security<span class="required">*</span></label>
                        <input type="text" id="security" name="security" required placeholder="₹/Month" />
                    </div>
                    <div className="form-group" id="maintainance-con">
                        <label for="maintainance">Maintenance<span class="required">*</span></label>
                        <select id="maintainance" name="maintainance" onChange={maintainanceCostContainer}>
                            <option>Included in rent</option>
                            <option value='extra'>Extra Maintenance</option>
                        </select>
                    </div>

                    <div className={showMaintainance} id="maintainance-cost-con">
                        <label for="maintainance-cost">Maintainance Cost</label>
                        <input type="text" id="maintainance-cost" name="maintainance-cost" placeholder="₹" />
                        <select id="maintainance-period" name="maintainance-period">
                            <option>Monthly</option>
                            <option>Quaterly</option>
                            <option>Annually</option>
                        </select>
                    </div>

                    
                    <div className="additional-pricing-detail-con">
                        <label for="additional-pricing-detail">Additional Pricing details to convey to agent?</label>
                        <textarea rows={10} id="additional-pricing-detail" name="additional-pricing-detail" placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us." />
                        
                    </div>
                </div>
            )
        }
    }

    const printSelection=()=>{
        console.log(propDetailSelections);
        console.log(locationDetailSelections);
        console.log(featuresDetailSelections);
        console.log(priceDetailSelections);
    }


    return(
        <>
            <a href="#" className="notification-holder" onClick={printSelection}><img src={notification}></img></a>
            <div className="listPropertyContainer">
                <div className="lp-nav">
                    <p className={setNavClass(curTab,1)}>PROPERTY DETAILS</p>
                    <p className={setNavClass(curTab,2)}>LOCATION DETAILS</p>
                    <p className={setNavClass(curTab,3)}>FEATURES & AMENITIES</p>
                    <p className={setNavClass(curTab,4)}>PRICE DETAILS</p>
                    <p className={setNavClass(curTab,5)}>PROPERTY IMAGES</p>
                </div>
                <div className="lp-form">
                    {setForm(curTab)}
                </div>
                <div className="lp-footer">
                    <p className="help-text">Need Help? <strong>Call 9999999999</strong> </p>
                    <button className="btn" type="Submit" onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </>
    )
}

export default ListYourProperty;