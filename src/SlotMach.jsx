import React from 'react';
import True from './True';
import False from './False';




const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄.';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

   let {x,y,z} = props;

    if ((props.x === props.y) && (props.x === props.z)) {
      <True/>
    }
    else {
       <False/>
    }

}

export default SlotM;
