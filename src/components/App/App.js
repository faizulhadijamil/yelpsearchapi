import React from 'react';
import logo from './logo.svg';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

// const businessObj = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// const businessArray = [
//   businessObj,
//   businessObj,
//   businessObj,
//   businessObj,
//   businessObj,
//   businessObj,
// ];

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      businessArray:[]
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    console.log(`u are searching for ${term}, ${location} and ${sortBy}`)
    Yelp.searchYelp(term, location, sortBy).then((business)=>{
      this.setState({businessArray:business})
    })
  }

  render(){
    return (
      <div className="App">
        <h1>faizul test</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList dataList = {this.state.businessArray}/>
      </div>
    );
  }
}

export default App;
