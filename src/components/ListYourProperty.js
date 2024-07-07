import React, { useState } from "react";
import notification from '../assets/notification.svg';


const ListYourProperty =()=>{

    const [curTab, setCurTab] = useState(1);

    const [propType, setPropType] = useState("");

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
                    <input type="radio" name="property_type" value="Flat/Apartment" id="flat-or-apartment"/><label for="flat-or-apartment">Flat / Apartment</label> 
                    <input type="radio" name="property_age" value="House/Villa" id="house-or-villa"/><label for="house-or-villa"> House / Villa</label>
                </div>
                );
        }else if(e.target.value=="Commercial"){
            setPropType(
                <div className="button-group" style={{marginTop:'20px'}}>
                    <input type="radio" name="property_usage_type" value="Office Space" id="office-space"/>
                    <label for="office-space">Office Space</label>
                    <input type="radio" name="property_usage_type" value="Co-working" id="co-working"/>
                    <label for="co-working">Co-working</label>
                    <input type="radio" name="property_usage_type" value="Restaurant/Cafe" id="restaurant-cafe"/>
                    <label for="restaurant-cafe">Restaurant/Cafe</label>
                    <input type="radio" name="property_usage_type" value="Shop/Showroom" id="shop-showroom"/>
                    <label for="shop-showroom">Shop/Showroom</label>
                    <input type="radio" name="property_usage_type" value="Industrial Bldg." id="industrial-bldg"/>
                    <label for="industrial-bldg">Industrial Bldg.</label>
                    <input type="radio" name="property_usage_type" value="Industrial Shed" id="industrial-shed"/>
                    <label for="industrial-shed">Industrial Shed</label>
                    <input type="radio" name="property_usage_type" value="Warehouse/Godown" id="warehouse-godown"/>
                    <label for="warehouse-godown">Warehouse/Godown</label>
                </div>
            );
        }else{
            setPropType("");
        }
    }

    const setForm=(curTab)=>{
        if(curTab==1){
            return(
                <form className="property-form">
                    <div className="form-group"  id="property_for">
                        <label><span className="required">*</span>Property For:</label>
                        <div className="radio-group">
                            <div><input type="radio" name="property_for" value="Rent" id="Rent"/><label for='Rent'> Rent</label></div>
                            <div><input type="radio" name="property_for" value="Sale" id="Sale"/><label for='Sale'> Sale</label></div>
                        </div>
                        
                    </div>
                    
                    <div className="form-group" id="property_type">
                        <label><span className="required">*</span>Property Type:</label>
                        <div className="radio-group">
                            <div><input type="radio" name="property_type" value="Residential" id="Residential" onInput={handlePropChange}/><label for='Residential'>Residential</label> </div>
                            <div><input type="radio" name="property_type" value="Commercial" id="Commercial" onInput={handlePropChange}/> <label for='Commercial'>Commercial</label></div>
                            <div><input type="radio" name="property_type" value="Land/Plot" id="Land/Plot" onInput={handlePropChange}/> <label for='Land/Plot'>Land / Plot</label></div>
                        </div>
                        <div>{propType}</div>
                    </div>
                    
                    <div className="form-group" id="built-up-area">
                        <label for="built-up-area">Built up Area<span className="required">*</span></label>
                        <input type="number" id="built-up-area" name="built_up_area" required placeholder="Sq. Ft."/> 
                    </div>
                    
                    <div className="form-group" id="carpet-area-con">
                        <label for="carpet-area">Carpet Area<span className="required">*</span></label>
                        <input type="number" id="carpet-area" name="carpet_area" required placeholder="Sq. Ft."/> 
                    </div>
                    
                    <div className="form-group" id="property-on-floor-con">
                        <label for="property-on-floor">Property on Floor<span className="required">*</span></label>
                        <input type="number" id="property-on-floor" name="property_on_floor" required/>
                    </div>
                    
                    <div className="form-group" id="total-floors-con">
                        <label for="total-floors">Total Floors <span className="required">*</span></label>
                        <input type="number" id="total-floors" name="total_floors" required/>
                    </div>
                    
                    <div className="form-group" id="property-facing-con">
                        <label for="property-facing">Property Facing <span className="required">*</span></label>
                        <select id="property-facing" name="property_facing" required>
                            <option value="">Select</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                        </select>
                    </div>
                    
                    <div className="form-group" id="property_age">
                        <label><span className="required">*</span>Property Age:</label>
                        <div className="button-group">
                            <input type="radio" name="property_age" value="Less than 1 Year" id="less-than-one"/><label for="less-than-one">Less than 1 Year</label> 
                            <input type="radio" name="property_age" value="1-3 Years" id="one-to-three"/><label for="one-to-three"> 1-3 Years</label>
                            <input type="radio" name="property_age" value="3-5 Years" id="three-to-five"/><label for="three-to-five"> 3-5 Years</label>
                            <input type="radio" name="property_age" value="5-10 Years" id="five-to-ten"/><label for="five-to-ten"> 5-10 Years</label>
                            <input type="radio" name="property_age" value="Greater than 10 Years" id="ten-plus"/><label for="ten-plus"> Greater than 10 Years</label>
                        </div>
                        
                    </div>
                    
                    <div className="form-group" id="bhk_type">
                        <label><span className="required">*</span>BHK Type:</label>
                        <div className="button-group">
                            <input type="radio" name="bhk_type" value="1 RK" id="one-rk"/><label for="one-rk">1 RK</label> 
                            <input type="radio" name="bhk_type" value="1 BHK" id="one-bhk"/><label for="one-bhk"> 1 BHK</label>
                            <input type="radio" name="bhk_type" value="2 BHK" id="two-bhk"/><label for="two-bhk"> 2 BHK</label>
                            <input type="radio" name="bhk_type" value="3 BHK" id="three-bhk"/><label for="three-bhk"> 3 BHK</label>
                            <input type="radio" name="bhk_type" value="4 BHK" id="four-bhk"/><label for="four-bhk"> 4 BHK</label>
                            <input type="radio" name="bhk_type" value="5+ BHK" id="five-bhk"/><label for="five-bhk"> 5+ BHK</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="bathrooms_toilets">
                        <label><span className="required">*</span>Bathrooms/ Toilets:</label>
                        <div className="button-group">
                            <input type="radio" name="bathrooms_toilets" value="1" id="bathroom-1"/>
                            <label for="bathroom-1">1</label>
                            <input type="radio" name="bathrooms_toilets" value="2" id="bathroom-2"/>
                            <label for="bathroom-2">2</label>
                            <input type="radio" name="bathrooms_toilets" value="3" id="bathroom-3"/>
                            <label for="bathroom-3">3</label>
                            <input type="radio" name="bathrooms_toilets" value="4" id="bathroom-4"/>
                            <label for="bathroom-4">4</label>
                            <input type="radio" name="bathrooms_toilets" value="5" id="bathroom-5"/>
                            <label for="bathroom-5">5</label>
                            <input type="radio" name="bathrooms_toilets" value="6+" id="bathroom-6"/>
                            <label for="bathroom-6">6+</label>
            </div>
                    </div>
                    
                    <div className="form-group" id="balcony">
                        <label><span className="required">*</span>Balcony:</label>
                        <div className="button-group">
                            <input type="radio" name="balcony" value="0" id="balcony-0"/>
                            <label for="balcony-0">0</label>
                            <input type="radio" name="balcony" value="1" id="balcony-1"/>
                            <label for="balcony-1">1</label>
                            <input type="radio" name="balcony" value="2" id="balcony-2"/>
                            <label for="balcony-2">2</label>
                            <input type="radio" name="balcony" value="3" id="balcony-3"/>
                            <label for="balcony-3">3</label>
                            <input type="radio" name="balcony" value="4+" id="balcony-4"/>
                            <label for="balcony-4">4+</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="tenant_preference">
                        <label>Tenant Preference:</label>
                        <div className="button-group">
                            <input type="radio" name="tenant_preference" value="Any" id="tenant-any"/>
                            <label for="tenant-any">Any</label>
                            <input type="radio" name="tenant_preference" value="Family" id="tenant-family"/>
                            <label for="tenant-family">Family</label>
                            <input type="radio" name="tenant_preference" value="Bachelor (Man)" id="tenant-bachelor-man"/>
                            <label for="tenant-bachelor-man">Bachelor (Man)</label>
                            <input type="radio" name="tenant_preference" value="Bachelor (Women)" id="tenant-bachelor-women"/>
                            <label for="tenant-bachelor-women">Bachelor (Women)</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="availability">
                        <label>Availability:</label>
                        <div className="button-group">
                            <input type="radio" name="availability" value="Immediate" id="avail-immediate"/>
                            <label for="avail-immediate">Immediate</label>
                            <input type="radio" name="availability" value="within 15 days" id="avail-15-days"/>
                            <label for="avail-15-days">within 15 days</label>
                            <input type="radio" name="availability" value="within 1 month" id="avail-1-month"/>
                            <label for="avail-1-month">within 1 month</label>
                            <input type="radio" name="availability" value="within 2 months" id="avail-2-months"/>
                            <label for="avail-2-months">within 2 months</label>
                        </div>
                    </div>
                    
                    <div className="form-group" id="property-description-con">
                        <label for="property-description">Property Description</label>
                        <textarea id="property-description" name="property_description" required></textarea>
                    </div>
                    
                </form>
            )
        }
    }


    return(
        <>
            <a href="#" className="notification-holder"><img src={notification}></img></a>
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