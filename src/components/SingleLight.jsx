import LightOffUrl from '/images/light-turned-off.svg'
import LightYellowUrl from '/images/light-yellow.svg'

import { useState } from 'react';

const SingleLight = () => {

    const [isOff, setOff] = useState(true);

    const imgSrc = isOff ? LightOffUrl : LightYellowUrl;

    const handleToggle = () => {
        setOff(!isOff);
    }

    return (
        <img onClick = {handleToggle} src = {imgSrc} alt = 'Single light'/>
    )

};

export default SingleLight;