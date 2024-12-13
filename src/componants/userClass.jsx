

import React from 'react'



class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            count:0,
        }
    
        console.log(props);
         
    }
    render(){
        const {count}=this.state
        const{name}=this.props
        return(
            <div className="user-card">
                <h2>count:{count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    });
                }}>count increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: Kerala</h3>

            </div>
        );
    }
}


export default UserClass;