import React from 'react';
import './Business.css';

// const businessObj = {
//     imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// };


class Business extends React.Component {

    render(){
        const {businessObj} = this.props;
        
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={businessObj.imageSrc} alt=''/>
                </div>
                <h2>{businessObj.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{businessObj.address}</p>
                        <p>{businessObj.city}</p>
                        <p>{businessObj.state}</p>
                        <p>{businessObj.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{businessObj.category}</h3>
                        <h3 className="rating">{businessObj.rating}</h3>
                        <p>{businessObj.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;
