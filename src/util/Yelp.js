require("dotenv").config();

const apiKey = process.env.REACT_APP_YELP_API_KEY;
const limit = 21;

const Yelp = {
  search(term, location, sortBy, offset) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${limit}&offset=${offset ||
        ""}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        if (jsonResponse && jsonResponse.businesses) {
          return {
            total: jsonResponse.total,
            businessList: jsonResponse.businesses.map(business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
              };
            })
          };
        }
      });
  }
};

export default Yelp;
