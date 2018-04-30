import React from 'react'
import './UserItem.css'


export const UserItem = (props) => {


    return (
        <div className="col s12">
            <div className="card horizontal black-text row" >
                <div className="commDiv">
                    <span className="textUser">{props.userInfo.name}</span>
                    <img src={props.userInfo.avatarUrl} alt="" className="circle " />
                </div>
                <div className="card-stacked ">
                    <div className="card-content">
                        <p>{props.userInfo.aboutShort}</p>
                        <p className='date'>Last post at:   
                        <span>{props.userInfo.getDate()}</span></p>

                    </div>

                </div>
            </div >
        </div>
    )
}