import React from 'react';

import './WhoWeAre.css';

class WhoWeAre extends React.Component {

    render() {
        return(
            <div className = "WhoWeAre">
            <p className = "WhoWeAreHeading"> Who We Are </p>
               <p className = "WhoWeAreNames"> Becca, Beth, Dogacan, and Erce </p>
                <p className = "WhoWeAreText1">
                We are 4 college students trying to maintain a lifestyle that promotes health, happiness, and overall well-being. 
                Studying Computer Science is time consuming and often mentally exhausting. Incorporating exercise and nutrition into 
                our daily lives is tough, not to mention creating workout and food plans to best suit us. 
                </p>
                <p className = "WhoWeAreText2">
                This led us to the idea of InShape. We wanted a simple way to achieve an active lifestyle and healthy body. Our goal is to inspire those 
                who struggle to find time to dedicate to themselves to put themselves and a healthy lifestyle first! 
                </p>
            </div>
        )
    }
}

export default WhoWeAre;