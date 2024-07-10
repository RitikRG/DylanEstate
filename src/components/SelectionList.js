import { useState } from 'react';

const SelectionList = () => {
    const [selections, setSelections]=useState(
        {
            "features": [],
            "tiles": "None",
            "safety": [],
            "amenities": [],
            "photos": [],
            "property_for": "",
            "property_type": "",
            "built_up_area": "0",
            "carpet_area": "",
            "property_on_floor": "Ground",
            "total_floors": "None",
            "property_facing": "",
            "bathrooms_toilets": "None",
            "balcony": "None",
            "tenant_preference": "Not Given",
            "availability": "",
            "property_description": "",
            "building-society-name": "",
            "locality-area": "",
            "landmark-street-name": "",
            "city": "",
            "non_veg": "Not Given",
            "pets_allowed": "Not Given",
            "electricity": "",
            "water_supply": "",
            "furnishing": "None",
            "rent": "",
            "security": "",
            "maintainance-cost": "",
            "maintainance-period": "",
            "bhk_type":"",
            "property_age":""
    
      });

    const updateSelections = (newState) => {
        setSelections(newState);
    };

    return [selections, updateSelections];
};

export default SelectionList;
