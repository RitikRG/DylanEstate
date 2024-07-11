import React, { useState } from "react";
import notification from '../assets/notification.svg';
import GoogleMapComponent from "./GoogleMapComponent";

import '../css/listYourProperty.css';
import '../css/propertyDetails.css';
import '../css/locationDetails.css';
import '../css/featuresDetails.css';
import '../css/priceDetails.css';
import '../css/propertyPhotos.css';
import '../css/modal.css';
import '../css/confirmationPage.css';
import '../css/previewListingPage.css';
import SelectionList from "./SelectionList";
import ExploreNeighbourhood from "./ExploreNeighbourhood";


const ListYourProperty =()=>{

    const [curTab, setCurTab] = useState(1);

    const [selections, setSelections]=SelectionList();
    
    const [showMaintainance, setShowMaintainance] = useState('hide');

    const updateSelection=(e, selections)=>{
        selections[e.target.name]= e.target.value;
        return selections;
    }

    const handleSelections=(e)=>{
        setSelections(updateSelection(e,selections));
    }

    const updateCheckboxSelection=(e, selections)=>{
        let prevVal = selections[e.target.name];
        selections[e.target.name]= [...prevVal, e.target.parentNode];
        return selections;
    }

    const handleCheckboxSelection=(e)=>{
        // console.log(e.target.parentNode);
        if(e.target.checked){
            setSelections(updateCheckboxSelection(e,selections));
        }
    }

    const updatePhotoSelection=(e, selections)=>{
        let prevVal = selections[e.target.name];
        selections[e.target.name]= [...prevVal, ...Array.from(e.target.files)];
        const previewAreaUl=document.getElementById('preview-area-ul');
        Array.from(e.target.files).forEach(element => {
            previewAreaUl.innerHTML+=`
                <li>
                    <img src=${URL.createObjectURL(element)} className="preview-image"/>
                </li>`;
        });
        return selections;
    }

    const handlePhotos = (e) => {
        setSelections(updatePhotoSelection(e,selections));
    };

    const setNavClass =(curTab, tabNum)=>{
        if(curTab==tabNum){
            return 'active-tab';
        }else if(curTab<tabNum){
            return 'non-active-tab';
        }else{
            return 'completed-tab';
        }
    }

    const [formSectionClass, setFormSectionClass]=useState(['','sub-form','hide','hide','hide','hide'])
    
    const updateFormSection=(formSectionClass)=>{
        console.log(curTab);
        for(let i=1;i<6;i++){
            if(i==curTab+1){
                formSectionClass[i]='sub-form';
            }else{
                formSectionClass[i]='hide';
            }
        }
        return formSectionClass;
    }
    const handleNext=()=>{
        setCurTab(curTab+1);
        setFormSectionClass(updateFormSection(formSectionClass));
        // console.log(formSectionClass);
    }
    const handleNavClick=(e)=>{
        let id = e.target.id;
        let tab;
        switch(id){
            case 'nav-1':
                setCurTab(1);
                tab=1;
                break;
            case 'nav-2':
                setCurTab(2);
                tab=2;
                break;
            case 'nav-3':
                setCurTab(3);
                tab=3;
                break;
            case 'nav-4':
                setCurTab(4);
                tab=4;
                break;
            case 'nav-5':
                setCurTab(5);
                tab=5;
                break;
        };

        let newFormSectionClass=[];
        for(let i=1;i<6;i++){
            if(i==tab){
                newFormSectionClass[i]='sub-form';
            }else{
                newFormSectionClass[i]='hide';
            }
        }
        setFormSectionClass(newFormSectionClass)
        // console.log(formSectionClass);
    }
    const [propTypeSelectionClass, setpropTypeSelectionClass]=useState(['hide','hide'])
    const handlePropChange=(e)=>{
        if(e.target.value=='Residential'){
            setpropTypeSelectionClass(['button-group','hide']);
        }else if(e.target.value=='Commercial'){
            setpropTypeSelectionClass(['hide','button-group']);
        }else{
            setpropTypeSelectionClass(['hide','hide'])
        }
    }

    const maintainanceCostContainer=(e)=>{
        if(e.target.value=='extra'){
            setShowMaintainance('form-group');
        }else{
            setShowMaintainance('hide');
        }
    }

    const printSelection=()=>{
        console.log(selections);
        console.log(forSale);
    }

    const [overlayVisible, setOverlayVisible] = useState('hide');

    const openOverlay = () => {
        setOverlayVisible('modal-overlay');
    };

    const closeOverlay=(e)=>{
        if(e.target.className!='modal-content'){
            setOverlayVisible('hide');
        };
    }

    const [containerSymbol, setContainerSymbol] = useState('listPropertyContainer');
    const finalSubmit=()=>{
        setContainerSymbol('hide');
        setOverlayVisible('hide');
        setConfirmationPage('confirmation-page');
        console.log(selections);
    }

    const [confirmationPage, setConfirmationPage] = useState('hide');

    const editListing=()=>{
        setContainerSymbol('listPropertyContainer');
        setOverlayVisible('hide');
        setConfirmationPage('hide');
    }
    const [previewPage, setPreviewPage] = useState('hide');
    
    const amenitiesContainer = document.getElementById('property-amenities-container');
    const showPreview=()=>{
        setPreviewPage('');
        setConfirmationPage('hide');
        const amenitiesList = selections['amenities'];
        amenitiesList.forEach(element=>{amenitiesContainer.appendChild(element)});
    } 
    const [forSale,setForSale]=useState(false);
    const handleSale=(e)=>{
        setForSale(true);
        handleSelections(e);
    }

    const showPreviewPage =()=>{
        console.log(selections);
    }

    const [currentImage, setCurrentImage] = useState(0);
    const images =[];
    Array.from(selections['photos']).forEach(element=>{
        images.push(URL.createObjectURL(element));
    });

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return(
        <>
            <a href="#" className="notification-holder" onClick={printSelection}><img src={notification}></img></a>
            <div className={containerSymbol}>
                <div className="lp-nav">
                    <p className={setNavClass(curTab,1)} onClick={handleNavClick} id='nav-1'>PROPERTY DETAILS</p>
                    <p className={setNavClass(curTab,2)} onClick={handleNavClick} id='nav-2'>LOCATION DETAILS</p>
                    <p className={setNavClass(curTab,3)} onClick={handleNavClick} id='nav-3'>FEATURES & AMENITIES</p>
                    <p className={setNavClass(curTab,4)} onClick={handleNavClick} id='nav-4'>PRICE DETAILS</p>
                    <p className={setNavClass(curTab,5)} onClick={handleNavClick} id='nav-5'>PROPERTY IMAGES</p>
                </div>
                <div className="lp-form">
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <div className={formSectionClass[1]} id='property-form'>
                            <div className="form-group"  id="property_for">
                                <label><span className="required">*</span>Property For:</label>
                                <div className="radio-group">
                                    <div><input type="radio" name="property_for" value="Rent" id="Rent" onInput={handleSelections} /><label for='Rent'> Rent</label></div>
                                    <div><input type="radio" name="property_for" value="Sale" id="Sale" onInput={handleSale}/><label for='Sale'> Sale</label></div>
                                </div>
                                
                            </div>
                            
                            <div className="form-group" id="property_type">
                                <label><span className="required">*</span>Property Type:</label>
                                <div className="radio-group">
                                    <div><input type="radio" name="property_type" value="Residential" id="Residential" onChange={handlePropChange}/><label for='Residential'>Residential</label> </div>
                                    <div><input type="radio" name="property_type" value="Commercial" id="Commercial"  onChange={handlePropChange}/> <label for='Commercial'>Commercial</label></div>
                                    <div><input type="radio" name="property_type" value="Land/Plot" id="Land/Plot" onInput={handleSelections} onChange={handlePropChange}/> <label for='Land/Plot'>Land / Plot</label></div>
                                </div>
                                <div>
                                    {/* If residential */}
                                    <div className={propTypeSelectionClass[0]} style={{marginTop:'20px'}}>
                                        <input type="radio" name="property_type" value="Flat/Apartment" id="flat-or-apartment" onInput={handleSelections} /><label for="flat-or-apartment">Flat / Apartment</label> 
                                        <input type="radio" name="property_type" value="House/Villa" id="house-or-villa" onInput={handleSelections} /><label for="house-or-villa"> House / Villa</label>
                                    </div>
                                    {/* If Commercial */}
                                    <div className={propTypeSelectionClass[1]} style={{marginTop:'20px'}}>
                                        <input type="radio" name="property_type" value="Office Space" id="office-space" onInput={handleSelections}/>
                                        <label for="office-space">Office Space</label>
                                        <input type="radio" name="property_type" value="Co-working" id="co-working" onInput={handleSelections}/>
                                        <label for="co-working">Co-working</label>
                                        <input type="radio" name="property_type" value="Restaurant/Cafe" id="restaurant-cafe" onInput={handleSelections}/>
                                        <label for="restaurant-cafe">Restaurant/Cafe</label>
                                        <input type="radio" name="property_type" value="Shop/Showroom" id="shop-showroom" onInput={handleSelections}/>
                                        <label for="shop-showroom">Shop/Showroom</label>
                                        <input type="radio" name="property_type" value="Industrial Bldg." id="industrial-bldg" onInput={handleSelections}/>
                                        <label for="industrial-bldg">Industrial Bldg.</label>
                                        <input type="radio" name="property_type" value="Industrial Shed" id="industrial-shed" onInput={handleSelections}/>
                                        <label for="industrial-shed">Industrial Shed</label>
                                        <input type="radio" name="property_type" value="Warehouse/Godown" id="warehouse-godown" onInput={handleSelections}/>
                                        <label for="warehouse-godown">Warehouse/Godown</label>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="form-group" id="built-up-area">
                                <label for="built-up-area">Built up Area<span className="required">*</span></label>
                                <input type="number" id="built-up-area" name="built_up_area" placeholder="Sq. Ft." onInput={handleSelections}/> 
                            </div>
                            
                            <div className="form-group" id="carpet-area-con">
                                <label for="carpet-area">Carpet Area<span className="required">*</span></label>
                                <input type="number" id="carpet-area" name="carpet_area" placeholder="Sq. Ft." onInput={handleSelections}/> 
                            </div>
                            
                            <div className="form-group" id="property-on-floor-con">
                                <label for="property-on-floor">Property on Floor<span className="required">*</span></label>
                                <input type="text" id="property-on-floor" name="property_on_floor" onInput={handleSelections}/>
                            </div>
                            
                            <div className="form-group" id="total-floors-con">
                                <label for="total-floors">Total Floors <span className="required">*</span></label>
                                <input type="number" id="total-floors" name="total_floors" onInput={handleSelections}/>
                            </div>
                            
                            <div className="form-group" id="property-facing-con">
                                <label for="property-facing">Property Facing <span className="required">*</span></label>
                                <select id="property-facing" name="property_facing" onInput={handleSelections}>
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
                                    <input type="radio" name="property_age" value="Less than 1 Year" id="less-than-one"onInput={handleSelections}/><label for="less-than-one" >Less than 1 Year</label> 
                                    <input type="radio" name="property_age" value="1-3 Years" id="one-to-three" onInput={handleSelections}/><label for="one-to-three" > 1-3 Years</label>
                                    <input type="radio" name="property_age" value="3-5 Years" id="three-to-five" onInput={handleSelections}/><label for="three-to-five"> 3-5 Years</label>
                                    <input type="radio" name="property_age" value="5-10 Years" id="five-to-ten" onInput={handleSelections}/><label for="five-to-ten"> 5-10 Years</label>
                                    <input type="radio" name="property_age" value="Greater than 10 Years" id="ten-plus" onInput={handleSelections}/><label for="ten-plus"> Greater than 10 Years</label>
                                </div>
                                
                            </div>
                            
                            <div className="form-group" id="bhk_type">
                                <label><span className="required">*</span>BHK Type:</label>
                                <div className="button-group">
                                    <input type="radio" name="bhk_type" value="1 RK" id="one-rk" onInput={handleSelections}/><label for="one-rk" >1 RK</label> 
                                    <input type="radio" name="bhk_type" value="1 BHK" id="one-bhk" onInput={handleSelections}/><label for="one-bhk" > 1 BHK</label>
                                    <input type="radio" name="bhk_type" value="2 BHK" id="two-bhk" onInput={handleSelections}/><label for="two-bhk" > 2 BHK</label>
                                    <input type="radio" name="bhk_type" value="3 BHK" id="three-bhk" onInput={handleSelections}/><label for="three-bhk" > 3 BHK</label>
                                    <input type="radio" name="bhk_type" value="4 BHK" id="four-bhk" onInput={handleSelections}/><label for="four-bhk" > 4 BHK</label>
                                    <input type="radio" name="bhk_type" value="5+ BHK" id="five-bhk" onInput={handleSelections}/><label for="five-bhk"> 5+ BHK</label>
                                </div>
                            </div>
                            
                            <div className="form-group" id="bathrooms_toilets">
                                <label><span className="required">*</span>Bathrooms/ Toilets:</label>
                                <div className="button-group">
                                    <input type="radio" name="bathrooms_toilets" value="1" id="bathroom-1" onInput={handleSelections}/>
                                    <label for="bathroom-1">1</label>
                                    <input type="radio" name="bathrooms_toilets" value="2" id="bathroom-2" onInput={handleSelections}/>
                                    <label for="bathroom-2">2</label>
                                    <input type="radio" name="bathrooms_toilets" value="3" id="bathroom-3" onInput={handleSelections}/>
                                    <label for="bathroom-3">3</label>
                                    <input type="radio" name="bathrooms_toilets" value="4" id="bathroom-4" onInput={handleSelections}/>
                                    <label for="bathroom-4">4</label>
                                    <input type="radio" name="bathrooms_toilets" value="5" id="bathroom-5" onInput={handleSelections}/>
                                    <label for="bathroom-5">5</label>
                                    <input type="radio" name="bathrooms_toilets" value="6+" id="bathroom-6" onInput={handleSelections}/>
                                    <label for="bathroom-6">6+</label>
                    </div>
                            </div>
                            
                            <div className="form-group" id="balcony">
                                <label><span className="required">*</span>Balcony:</label>
                                <div className="button-group">
                                    <input type="radio" name="balcony" value="0" id="balcony-0" onInput={handleSelections}/>
                                    <label for="balcony-0">0</label>
                                    <input type="radio" name="balcony" value="1" id="balcony-1" onInput={handleSelections}/>
                                    <label for="balcony-1">1</label>
                                    <input type="radio" name="balcony" value="2" id="balcony-2" onInput={handleSelections}/>
                                    <label for="balcony-2">2</label>
                                    <input type="radio" name="balcony" value="3" id="balcony-3" onInput={handleSelections}/>
                                    <label for="balcony-3">3</label>
                                    <input type="radio" name="balcony" value="4+" id="balcony-4" onInput={handleSelections}/>
                                    <label for="balcony-4">4+</label>
                                </div>
                            </div>
                            
                            <div className="form-group" id="tenant_preference">
                                <label>Tenant Preference:</label>
                                <div className="button-group">
                                    <input type="radio" name="tenant_preference" value="Any" id="tenant-any" onInput={handleSelections}/>
                                    <label for="tenant-any">Any</label>
                                    <input type="radio" name="tenant_preference" value="Family" id="tenant-family" onInput={handleSelections}/>
                                    <label for="tenant-family">Family</label>
                                    <input type="radio" name="tenant_preference" value="Bachelor (Man)" id="tenant-bachelor-man" onInput={handleSelections}/>
                                    <label for="tenant-bachelor-man">Bachelor (Man)</label>
                                    <input type="radio" name="tenant_preference" value="Bachelor (Women)" id="tenant-bachelor-women" onInput={handleSelections}/>
                                    <label for="tenant-bachelor-women">Bachelor (Women)</label>
                                </div>
                            </div>
                            
                            <div className="form-group" id="availability">
                                <label>Availability:</label>
                                <div className="button-group">
                                    <input type="radio" name="availability" value="Immediate" id="avail-immediate" onInput={handleSelections}/>
                                    <label for="avail-immediate">Immediate</label>
                                    <input type="radio" name="availability" value="within 15 days" id="avail-15-days" onInput={handleSelections}/>
                                    <label for="avail-15-days">within 15 days</label>
                                    <input type="radio" name="availability" value="within 1 month" id="avail-1-month" onInput={handleSelections}/>
                                    <label for="avail-1-month">within 1 month</label>
                                    <input type="radio" name="availability" value="within 2 months" id="avail-2-months" onInput={handleSelections}/>
                                    <label for="avail-2-months">within 2 months</label>
                                </div>
                            </div>
                            
                            <div className="form-group" id="property-description-con">
                                <label for="property-description">Property Description</label>
                                <textarea id="property-description" name="property_description" onInput={handleSelections}></textarea>
                            </div>
                            
                    </div>

                    {/* Location Details */}
                    <div className={formSectionClass[2]} id="location-details">
                            <div class="form-group" id="building/society-name-con">
                                <label for="building-society-name">Building / Society Name<span class="required">*</span></label>
                                <input type="text" id="building-society-name" name="building-society-name" placeholder="Enter Apartment Name" onInput={handleSelections}/>
                            </div>

                            <div class="form-group" id="locality-area-con">
                                <label for="locality-area">Locality / Area<span class="required">*</span></label>
                                <input type="text" id="locality-area" name="locality-area" placeholder="Eg: sheetal nagar" onInput={handleSelections}/>
                            </div>

                            <div class="form-group" id="landmark-street-name-con">
                                <label for="landmark-street-name">Landmark / Street Name</label>
                                <input type="text" id="landmark-street-name" name="landmark-street-name" placeholder="Prominent Landmark" onInput={handleSelections}/>
                            </div>

                            <div class="form-group" id="city-con">
                                <label for="city">City</label>
                                <select id="city" name="city" onInput={handleSelections}>
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

                    {/* Features and Amenities*/}
                    <div className={formSectionClass[3]} id="features-form">
                            <label>General Features</label>
                            <div className="form-group" id="non-veg">
                                <label><span className="required">*</span>Non- Veg:</label>
                                <div className="radio-group">
                                    <div><input type="radio" name="non_veg" value="Allowed" id="non-veg-allowed" onInput={handleSelections}/><label for="non-veg-allowed"> Allowed</label></div>
                                    <div><input type="radio" name="non_veg" value="Not Allowed" id="non-veg-not-allowed" onInput={handleSelections}/><label for="non-veg-not-allowed"> Not Allowed</label></div>
                                </div>
                            </div>

                            <div className="form-group" id="pets-allowed">
                                <label><span className="required">*</span>Pets Allowed:</label>
                                <div className="radio-group">
                                    <div><input type="radio" name="pets_allowed" value="Yes" id="pets-yes" onInput={handleSelections}/><label for="pets-yes"> Yes</label></div>
                                    <div><input type="radio" name="pets_allowed" value="No" id="pets-no" onInput={handleSelections}/><label for="pets-no"> No</label></div>
                                </div>
                            </div>

                            <div className="form-group" id="electricity">
                                <label><span className="required">*</span>Electricity:</label>
                                <div className="radio-group">
                                    <div><input type="radio" name="electricity" value="Rare/No Powercut" id="electricity-rare" onInput={handleSelections}/><label for="electricity-rare"> Rare/No Powercut</label></div>
                                    <div><input type="radio" name="electricity" value="Frequent Powercut" id="electricity-frequent" onInput={handleSelections}/><label for="electricity-frequent"> Frequent Powercut</label></div>
                                </div>
                            </div>

                            <div className="form-group" id="water-supply">
                                <label><span className="required">*</span>Water Supply:</label>
                                    <div className="radio-group">
                                    <div><input type="radio" name="water_supply" value="Municipal Corporation (BMC)" id="water-bmc" onInput={handleSelections}/><label for="water-bmc"> Municipal Corporation (BMC)</label></div>
                                    <div><input type="radio" name="water_supply" value="Borewell" id="water-borewell" onInput={handleSelections}/><label for="water-borewell"> Borewell</label></div>
                                    <div><input type="radio" name="water_supply" value="Both" id="water-both" onInput={handleSelections}/><label for="water-both"> Both</label></div>
                                </div>
                            </div>

                            <hr></hr>

                            <div className="form-group" id="furnishing">
                                <label><span className="required">*</span>Furnishing:</label>
                                <div className="button-group">
                                    <div><input type="radio" name="furnishing" value="Fully Furnished" id="fully-furnished" onInput={handleSelections}/><label for="fully-furnished"> Fully Furnished</label></div>
                                    <div><input type="radio" name="furnishing" value="Semi Furnished" id="semi-furnished" onInput={handleSelections}/><label for="semi-furnished"> Semi Furnished</label></div>
                                    <div><input type="radio" name="furnishing" value="Unfurnished" id="unfurnished" onInput={handleSelections}/><label for="unfurnished"> Unfurnished</label></div>
                                </div>
                            </div>

                            <hr></hr>

                            <div className="form-group" id="additional-features">
                                <label>Additional Features:</label>
                                <div className="button-group">
                                    <div><input type="checkbox" name="features" value="Air Conditioning" id="air-conditioning" onInput={handleCheckboxSelection}/><label for="air-conditioning"> Air Conditioning</label></div>
                                    <div><input type="checkbox" name="features" value="Ceiling Fans" id="ceiling-fans" onInput={handleCheckboxSelection}/><label for="ceiling-fans"> Ceiling Fans</label></div>
                                    <div><input type="checkbox" name="features" value="Refrigerator" id="refrigerator" onInput={handleCheckboxSelection}/><label for="refrigerator"> Refrigerator</label></div>
                                    <div><input type="checkbox" name="features" value="Washing machine" id="washing-machine" onInput={handleCheckboxSelection}/><label for="washing-machine"> Washing machine</label></div>
                                    <div><input type="checkbox" name="features" value="Microwave" id="microwave" onInput={handleCheckboxSelection}/><label for="microwave"> Microwave</label></div>
                                    <div><input type="checkbox" name="features" value="Oven" id="oven" onInput={handleCheckboxSelection}/><label for="oven"> Oven</label></div>
                                </div>
                            </div>

                            <hr></hr>

                            <div className="form-group" id="tiles">
                                <label>Tiles:</label>
                                <div className="button-group">
                                    <div><input type="radio" name="tiles" value="Normal White Tiles" id="normal-tiles" onInput={handleSelections}/><label for="normal-tiles"> Normal White Tiles</label></div>
                                    <div><input type="radio" name="tiles" value="Marble" id="marble" onInput={handleSelections}/><label for="marble" > Marble</label></div>
                                    <div><input type="radio" name="tiles" value="Vitrified Tiles" id="vitrified-tiles" onInput={handleSelections}/><label for="vitrified-tiles"> Vitrified Tiles</label></div>
                                </div>
                            </div>

                            <hr></hr>

                            <div className="form-group" id="safety">
                                <label><span className="required">*</span>Safety:</label>
                                <div className="button-group">
                                    <div><input type="checkbox" name="safety" value="24/7 Security personnel (Gated Security)" id="gated-security" onInput={handleCheckboxSelection}/><label for="gated-security"> 24/7 Security personnel (Gated Security)</label></div>
                                    <div><input type="checkbox" name="safety" value="Security Systems- CCTV" id="cctv" onInput={handleCheckboxSelection}/><label for="cctv"> Security Systems- CCTV</label></div>
                                </div>
                            </div>

                            <hr></hr>

                            <div class="amenities-grid">
                                <h2>Society Amenities</h2>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/security-guard.png" alt="24/7 Security"/>
                                    <label for="security_24_7"> 24/7 Security</label>
                                    <input type="checkbox" name="amenities" value="security_24_7" id="security_24_7" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/wallmount-camera.png" alt="CCTV Camera"/>
                                    <label for="cctv_camera"> CCTV Camera</label>
                                    <input type="checkbox" name="amenities" value="cctv_camera" id="cctv_camera" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-lift-building-and-construction-flatart-icons-outline-flatarticons.png" alt="Lift"/>
                                    <label for="lift"> Lift</label>
                                    <input type="checkbox" name="amenities" value="lift" id="lift" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/car--v1.png" alt="Reserved Parking"/>
                                    <label for="reserved_parking"> Reserved Parking</label>
                                    <input type="checkbox" name="amenities" value="reserved_parking" id="reserved_parking" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/pastel-glyph/64/water.png" alt="Regular Water Supply"/>
                                    <label for="regular_water_supply"> Regular water supply</label>
                                    <input type="checkbox" name="amenities" value="regular_water_supply" id="regular_water_supply" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-power-cord-energy-dreamstale-lineal-dreamstale.png" alt="Power Backup Partial"/>
                                    <label for="power_backup_partial"> Power Back up-Partial</label>
                                    <input type="checkbox" name="amenities" value="power_backup_partial" id="power_backup_partial" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-power-cord-energy-dreamstale-lineal-dreamstale.png" alt="Power Backup Full"/>
                                    <label for="power_backup_full"> Power Back up-Full</label>
                                    <input type="checkbox" name="amenities" value="power_backup_full" id="power_backup_full" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/staff.png" alt="Maintenance Staff"/>
                                    <label for="maintenance_staff"> Maintenance staff</label>
                                    <input type="checkbox" name="amenities" value="maintenance_staff" id="maintenance_staff" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/windows/32/tree.png" alt="Garden Park"/>
                                    <label for="garden_park"> Garden/ Park</label>
                                    <input type="checkbox" name="amenities" value="garden_park" id="garden_park" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/external-others-pike-picture/50/external-attraction-water-park-attraction-others-pike-picture-32.png" alt="Kids Play Area"/>
                                    <label for="kids_play_area"> Kids Play area</label>
                                    <input type="checkbox" name="amenities" value="kids_play_area" id="kids_play_area" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/windows/32/cycling-road.png" alt="Sport"/>
                                    <label for="sport"> Sport</label>
                                    <input type="checkbox" name="amenities" value="sport" id="sport" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/external-gym-hotel-nawicon-detailed-outline-nawicon.png" alt="Property Gym"/>
                                    <label for="property_gym"> Property Gym</label>
                                    <input type="checkbox" name="amenities" value="property_gym" id="property_gym" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/carbon-copy/100/garage-closed.png" alt="Community Hall"/>
                                    <label for="community_hall"> Community Hall</label>
                                    <input type="checkbox" name="amenities" value="community_hall" id="community_hall" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/shop--v1.png" alt="Shopping Center"/>
                                    <label for="shopping_center"> Shopping center</label>
                                    <input type="checkbox" name="amenities" value="shopping_center" id="shopping_center" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/carbon-copy/100/garage-closed.png" alt="Club House"/>
                                    <label for="club_house"> Club House</label>
                                    <input type="checkbox" name="amenities" value="club_house" id="club_house" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/lap-pool.png" alt="Swimming Pool"/>
                                    <label for="swimming_pool"> Swimming pool</label>
                                    <input type="checkbox" name="amenities" value="swimming_pool" id="swimming_pool" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/subwoofer.png" alt="Intercom"/>
                                    <label for="intercom"> Intercom</label>
                                    <input type="checkbox" name="amenities" value="intercom" id="intercom" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/pastel-glyph/64/fire-element.png" alt="Fire Safety"/>
                                    <label for="fire_safety"> Fire Safety</label>
                                    <input type="checkbox" name="amenities" value="fire_safety" id="fire_safety" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/carbon-copy/100/garage-closed.png" alt="Club House 2"/>
                                    <label for="club_house_2"> Club House</label>
                                    <input type="checkbox" name="amenities" value="club_house_2" id="club_house_2" onInput={handleCheckboxSelection}/>
                                </div>
                                <div class="amenity-item">
                                    <img src="https://img.icons8.com/ios/50/lap-pool.png" alt="Swimming Pool 2"/>
                                    <label for="swimming_pool_2"> Swimming pool</label>
                                    <input type="checkbox" name="amenities" value="swimming_pool_2" id="swimming_pool_2" onInput={handleCheckboxSelection}/>
                                </div>
                            </div>

                            <hr></hr>

                    </div>

                    {/* Price Details */}
                    <div className={formSectionClass[4]} id="price-details">
                        {forSale?<>
                            <div className="form-group" id="rent-con">
                                <label for="rent">Sale Price<span class="required">*</span></label>
                                <input type="text" id="rent" name="rent" placeholder="₹" onInput={handleSelections}/>
                            </div>
                            <div className="form-group" id="maintainance-con">
                                <label for="maintainance">Maintenance<span class="required">*</span></label>
                                <select id="maintainance" name="maintainance" onChange={maintainanceCostContainer}>
                                    <option>None</option>
                                    <option value='extra'>Extra Maintenance</option>
                                </select>
                            </div>

                            <div className={showMaintainance} id="maintainance-cost-con">
                                <label for="maintainance-cost">Maintainance Cost</label>
                                <input type="text" id="maintainance-cost" name="maintainance-cost" placeholder="₹" onInput={handleSelections}/>
                                <select id="maintainance-period" name="maintainance-period" onInput={handleSelections}>
                                    <option>Monthly</option>
                                    <option>Quaterly</option>
                                    <option>Annually</option>
                                </select>
                            </div>
                        
                        </>:
                        <>
                            <div className="form-group" id="rent-con">
                                <label for="rent">Rent<span class="required">*</span></label>
                                <input type="text" id="rent" name="rent" placeholder="₹/Month" onInput={handleSelections}/>
                            </div>

                            <div className="form-group" id="security-con">
                                <label for="security">Security<span class="required">*</span></label>
                                <input type="text" id="security" name="security" placeholder="₹/Month" onInput={handleSelections}/>
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
                                <input type="text" id="maintainance-cost" name="maintainance-cost" placeholder="₹" onInput={handleSelections}/>
                                <select id="maintainance-period" name="maintainance-period" onInput={handleSelections}>
                                    <option>Monthly</option>
                                    <option>Quaterly</option>
                                    <option>Annually</option>
                                </select>
                            </div>
                        </>}
                

                            
                            <div className="additional-pricing-detail-con">
                                <label for="additional-pricing-detail">Additional Pricing details to convey to agent?</label>
                                <textarea rows={10} id="additional-pricing-detail" name="additional-pricing-detail" placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us." onInput={handleSelections}/>
                                
                            </div>
                    </div>

                    {/* Property photos */}
                    <div className={formSectionClass[5]} id="property-photos">
                        <div className="prop-photo-title">Add Photos / videos to attract more tenants!</div>
                        <div className="prop-photo-subtitle">
                            Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
                            balcony, location map, neighborhood, etc.
                        </div>
                        <div className="upload-area">
                            <input type="file" id="fileInput" name="photos" multiple accept="image/*,video/*" style={{display:"none"}} onInput={handlePhotos}/>
                            <button type="button" className="upload-icon" onClick={() => document.getElementById('fileInput').click()}><img src="https://img.icons8.com/ios/50/camera--v3.png"/></button>
                            <button type="button" className="upload-button btn" onClick={() => document.getElementById('fileInput').click()}>+ Add Photos Now</button>
                        </div>
                        <div className="preview-area">
                            <h2>Preview:</h2>
                            <ul id="preview-area-ul"></ul>
                        </div>
                    </div>

                    {/* form footer */}
                    <div className="lp-footer">
                        <p className="help-text">Need Help? <strong>Call 9999999999</strong> </p>
                        {curTab>=5?<button className="btn"  onClick={openOverlay} type="Submit">SAVE & POST</button>:<button className="btn" onClick={handleNext}>Next</button>}
                    </div>
                </form>
                </div>
            </div>
            <div className={overlayVisible} onClick={closeOverlay}>
                <div className="modal-content">
                    <h2>POST PROPERTY ON DYLAN ESTATE? <span className="required">*</span></h2>
                    <button className={"modal-button"} onClick={finalSubmit}>Continue</button>
                    <p>By continuing you agree to our <a href="/terms">Terms and Conditions & Privacy Policy</a></p>
                </div>
            </div>
            <div className={confirmationPage}>
                <h2 className="confirmation-title">Thank you for listing your property with us,</h2>
                <p className="confirmation-message">
                    Your listing will be reviewed and will go live within 24 hours.
                </p>
                <p className="confirmation-message">
                    We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference.
                </p>
                <p className="confirmation-signature">-Dylan Estates</p>
                <div className="confirmation-button-container">
                    <button className="btn" onClick={editListing}>Edit Property Listing</button>
                    <button className="btn" onClick={showPreview}>Preview Property Listing</button>
                </div>
            </div>
            <div className={previewPage}>
                <div className="preview-property-details">
                    <div className="preview-property-container">
                        <h1>{selections['bhk_type']} {selections['property_type']} For {selections['property_for']} in {selections['building-society-name']} ({selections['built_up_area']} Sq.ft.)</h1>
                        <p><img src="https://img.icons8.com/ios-filled/50/000000/marker.png" />{selections['building-society-name']} {selections["locality-area"]}, near {selections["landmark-street-name"]}</p>
                        <div className="carousel">
                            <button className="carousel-button prev-button" onClick={prevImage}>
                            &lt;
                            </button>
                            <img src={images[currentImage]} alt="Property" className="carousel-image" />
                            <button className="carousel-button next-button" onClick={nextImage}>
                            &gt;
                            </button>
                        </div>

                        {/* Property Overview */}
                        <div className="property-overview">
                            <div className="property-overview-heading">
                                <h2>Property Overview</h2>
                                <p className="society-name">Society: {selections['building-society-name']}</p>
                            </div>
                            <div className="overview-grid">
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/bed.png" alt="bedrooms icon" />
                                    <div>
                                        <span>{selections['bhk_type']}</span>
                                        <p>Bedrooms</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/cotton/64/shower-and-tub--v1.png" alt="bathrooms icon" />
                                    <div>
                                        <span>{selections['bathrooms_toilets']}</span>
                                        <p>Bathrooms</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/metro/26/area-chart.png" alt="sq ft icon" />
                                    <div>
                                        <span>{selections['built_up_area']}</span>
                                        <p>Sq. Ft.</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/fluency-systems-regular/48/skyscrapers.png" alt="floor icon" />
                                    <div>
                                        <span>{selections['property_on_floor']}</span>
                                        <p>Property on Floor</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/fluency-systems-regular/48/skyscrapers.png" alt="total floors icon" />
                                    <div>
                                        <span>{selections['total_floors']}</span>
                                        <p>Total Floors</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/compass--v1.png" alt="facing icon" />
                                    <div>
                                        <span>{selections['property_facing']}</span>
                                        <p>Facing</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/balcony.png" alt="balcony icon" />
                                    <div>
                                        <span>{selections['balcony']}</span>
                                        <p>Balcony</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/badges/48/sofa.png" alt="furnishing icon" />
                                    <div>
                                        <span>{selections['furnishing']}</span>
                                        <p>Furnishing</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/windows/32/family--v1.png" alt="tenant preference icon" />
                                    <div>
                                        <span>{selections['tenant_preference']}</span>
                                        <p>Tenant Preference</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-tile-building-and-construction-flatart-icons-outline-flatarticons-1.png" alt="flooring icon" />
                                    <div>
                                        <span>{selections['tiles']}</span>
                                        <p>Flooring</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios-filled/50/signing-a-document.png" alt="availability icon" />
                                    <div>
                                        <span>{selections['availability']}</span>
                                        <p>Availability</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/pastel-glyph/64/water.png" alt="water supply icon" />
                                    <div>
                                        <span>{selections['water_supply']}</span>
                                        <p>Water Supply</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/carbon-copy/100/dog-footprint.png" alt="pets allowed icon" />
                                    <div>
                                        <span>{selections['pets_allowed']}</span>
                                        <p>Pets Allowed</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/soup-plate.png" alt="non-veg icon" />
                                    <div>
                                        <span>{selections['non_veg']}</span>
                                        <p>Non-Veg</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/electro-devices.png" alt="electricity status icon" />
                                    <div>
                                        <span>{selections['electricity']}</span>
                                        <p>Electricity Status</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/age.png" alt="property age icon" />
                                    <div>
                                        <span>{selections['property_age']}</span>
                                        <p>Property Age</p>
                                    </div>
                                </div>
                                    <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/building.png" alt="property type icon" />
                                    <div>
                                        <span>{selections['property_type']}</span>
                                        <p>Property Type</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <img src="https://img.icons8.com/ios/50/security-guard.png"  alt="gated security icon" />
                                    <div>
                                        <span>{selections['safety'].includes('24/7 Security personnel (Gated Security)')?"Yes":"No"}</span>
                                        <p>Gated Security</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="property-amenities">
                            <h2>Amenities</h2>
                            <div id="property-amenities-container">
                                
                            </div>
                        </div>

                        {/* Descriprion */}
                        <div className="property-preview-description">
                            <h2>Description</h2>
                            <p>{selections['property_description']}</p>
                        </div>

                    </div>
                
                    <div className="property-info">
                        <div className="rent-details">
                            {selections['property_for']=="Rent"?<><div className="rent"><p>₹ {selections['rent']} / Month</p><p>(Rent-Negotiable)</p></div>
                                <div className="deposit">₹ {selections['security']} (Deposit)</div></>:<div className="sale"><p>₹ {selections['rent']}</p><p>(Sale Price)</p></div>}
                        
                        </div>
                        <div className="inquiry-form">
                        <h2>Send an Inquiry for this property?</h2>
                        <p>Contact Person: Melvin Lasrado</p>
                        <p>
                            <i className="fas fa-phone"></i> +91-9999999999
                        </p>
                        <form>
                            <div className="preview-property-form-group">
                            <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div className="preview-property-form-group">
                            <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="preview-property-form-group">
                            <input type="tel" name="phone" placeholder="+91 999-999-9999" />
                            </div>
                            <div className="preview-property-form-group">
                            <textarea
                                name="message"
                                placeholder={`I would like more information about ${selections['building-society-name']}, ${selections["locality-area"]}`}
                            ></textarea>
                            </div>
                            <button type="submit" className="btn">
                                SEND INQUIRY
                            </button>
                        </form>
                        </div>
                    </div>

                    {/* Explore Neighbourhood */}
                    <div className="explore-neighbourhood">
                        {ExploreNeighbourhood(selections)};
                    </div>

                    {/* Review Section */}
                    <div className="ratings-reviews">
                            <h2>Ratings & Reviews</h2>
                            <div class="reviews-container">
                            <div class="review-card">
                                <div class="review-header">
                                    <img src="https://img.icons8.com/fluency-systems-filled/48/user.png" alt="user avatar"/>
                                    <div class="review-user-info">
                                        <h3>Aishwarya Malik</h3>
                                        <p>Tenant (8 months)</p>
                                    </div>
                                    <div class="review-rating">
                                        <span>4.5</span>
                                        <img src="https://img.icons8.com/ios-glyphs/30/star--v1.png" alt="star"/>
                                    </div>
                                </div>
                                <div class="review-content">
                                <h4>Good Society</h4>
                                <p>The garden view is mesmerizing, the exposure of natural light is good. Easy access to stores, markets and schools.</p>
                                </div>
                            </div>
                            <div class="review-card">
                                <div class="review-header">
                                <img src="https://img.icons8.com/fluency-systems-filled/48/user.png" alt="user avatar"/>
                                <div class="review-user-info">
                                    <h3>Rajendra Prasad</h3>
                                    <p>Owner (10+ years)</p>
                                </div>
                                <div class="review-rating">
                                    <span>4.5</span>
                                    <img src="https://img.icons8.com/ios-glyphs/30/star--v1.png" alt="star"/>
                                </div>
                                </div>
                                <div class="review-content">
                                <h4>Good Society & Apartment</h4>
                                <p>With its thoughtfully designed apartments, power backup, and 24×7 security, it offers a secure and worry-free living experience. Easy access to stores, markets and schools....</p>
                                <a href="#" class="show-more">Show more</a>
                                </div>
                            </div>
                            </div>
                            <button class="btn">Write a Review</button>
                    </div>

                    {/* Similar Property */}
                    <div class="similar-properties">
                        <h2>Similar Properties in {selections['locality-area']}</h2>
                        <div className="properties-container">
                            <div className="property-card">
                                <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Property Image"/>
                                <div class="property-info">
                                <h3>Modern & Luxury 2BHK Flat For Rent</h3>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/place-marker.png" alt="Location icon"/>{selections['locality-area']},{selections['city']}</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/rupee.png" alt="Price icon"/> 60.50 Lac</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/area-chart.png" alt="Area icon"/> 1850 Sq. ft.</p>
                                </div>
                            </div>
                            <div className="property-card">
                                <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Property Image"/>
                                <div class="property-info">
                                <h3>Modern & Luxury 2BHK Flat For Rent</h3>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/place-marker.png" alt="Location icon"/>{selections['locality-area']},{selections['city']}</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/rupee.png" alt="Price icon"/> 60.50 Lac</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/area-chart.png" alt="Area icon"/> 1850 Sq. ft.</p>
                                </div>
                            </div>
                            <div className="property-card">
                                <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Property Image"/>
                                <div class="property-info">
                                <h3>Modern & Luxury 2BHK Flat For Rent</h3>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/place-marker.png" alt="Location icon"/>{selections['locality-area']},{selections['city']}</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/rupee.png" alt="Price icon"/> 60.50 Lac</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/area-chart.png" alt="Area icon"/> 1850 Sq. ft.</p>
                                </div>
                            </div>
                            <div className="property-card">
                                <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Property Image"/>
                                <div class="property-info">
                                <h3>Modern & Luxury 2BHK Flat For Rent</h3>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/place-marker.png" alt="Location icon"/>{selections['locality-area']},{selections['city']}</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/rupee.png" alt="Price icon"/> 60.50 Lac</p>
                                <p><img src="https://img.icons8.com/ios-filled/20/000000/area-chart.png" alt="Area icon"/> 1850 Sq. ft.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="about-section">
                        <h2>About {selections['locality-area']}</h2>
                            <div className="about-content">
                                <p>Spread over {selections['carpet_area']} sqft. this home is an ideal place to live in. Access to bus station & medical stores is very easy & convenient from this house.</p>
                                <p>If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house. With PVR Cinemas - {selections['locality-area']}, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic.</p>
                                <p>Never miss out on lifestyle as Rassaz Mall......</p>
                                <a href="#" className="show-more">Show more</a>
                            </div>
                        <button className="btn">Write a Review</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ListYourProperty;