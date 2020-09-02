import React, { useState } from 'react';
import './player.css';
import SearchBars from '../searchBar/searchBar';

function Player({ spotify }) {



    return (
        <div>
            <SearchBars spotify={ spotify } />
            {/* Form */}
            {/* Result */}
        </div>
        
    )
}

export default Player;