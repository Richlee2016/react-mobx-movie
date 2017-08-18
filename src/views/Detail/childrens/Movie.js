import React from "react";

export default class Movie extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {match} = this.props;
        return (
            <div className="detail-movie">
               movie:{match.params.id} 
            </div>
        )
    }
}