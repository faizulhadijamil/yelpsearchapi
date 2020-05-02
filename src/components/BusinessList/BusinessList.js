import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {

    render(){
        return(
            <div className="BusinessList">
               {
                   this.props.dataList.map((data)=>{
                        return <Business key={data.id} businessObj = {data}/>
                   })
               }
            </div>
        )
    }
}

export default BusinessList;