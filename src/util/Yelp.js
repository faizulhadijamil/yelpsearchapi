const apiKey = 'W36MlUTNSvpBbMumZlvWL8kjQdWdw2SQaZBkDqT-cPdZTF4IG3epRVZ_-q3WRaKF7hiHv1dHlXirnX_famF42AyeB2Ry9UTdVLufyF9o3wVAzF3E7pgZE3SLJ5ytXnYx';

const yelp = {
    searchYelp(term, location, sortBy){
        // to disable the cors
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response)=>{
            console.log('theresponse: ', response);
            return response.json();
        }).then((jsonResponse)=>{
            console.log('jsonResponse: ', jsonResponse);
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map((business)=>{
                    return{
                        id:business.id,
                        imageSrc:business.image_url,
                        name:business.name,
                        address:business.location.address1,
                        city:business.location.city,
                        state:business.location.state,
                        zipCode:business.location.zip_code,
                        // category: business.categories[0].isEmpty()?'none':business.categories[0].title,
                        category:'restaurant',
                        rating: business.rating,
                        reviewCount:business.reviewCount
                    }
                });
            }
        });
    }
}

export default yelp