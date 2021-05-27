import React from 'react';


function True(props){
    return (
            <>
                <div className='slot_inner'>
                    <h1> {props.x} {props.y} {props.z} </h1>
                    <h1> This is Matching. </h1>
                    <hr />
                </div>
            </>
        )
}

export default True;