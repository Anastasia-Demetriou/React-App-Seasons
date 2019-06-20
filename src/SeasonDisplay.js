import './SeasonDisplay.css';
import React from 'react'; 

const seasonConfig ={
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "brrr it's chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    //if the month is great then 2(jan(0) feb (1) mar(2)) and less then 9 
    if (month > 2 && month < 9 ) {
        //tenary if it's in the northern hemisphere (late greater then 0) 
        //then if returns true display summer if not return false and return winter
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
     <div className={`season-display ${season}`}>
         <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );
}; 

export default SeasonDisplay;