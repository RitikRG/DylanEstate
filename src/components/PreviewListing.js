import React, { useState } from "react";
import '../css/previewListingPage.css';

const PreviewListing=(selections)=>{

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
        </div>
    );
}

export default PreviewListing;