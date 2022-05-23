import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import './HeaderSecondary.css';

function HeaderSecondary() {
    return (
        <div className="headerSecondary">
            <RoomIcon className="headerSecondary_roomIcon"></RoomIcon>
            <span>Select a location to see product availability</span>
        </div>
    )
}

export default HeaderSecondary
