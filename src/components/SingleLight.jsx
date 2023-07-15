import LightOffUrl from '/images/light-turned-off.svg'
import LightYellowUrl from '/images/light-yellow.svg'
import LightBlueUrl from '/images/light-blue.svg'
import LightGreenUrl from '/images/light-green.svg'
import LightOragneUrl from '/images/light-orange.svg'
import LightPinkUrl from '/images/light-pink.svg'
import LightRedUrl from '/images/light-red.svg'

import { useState } from 'react';

const lights = [
    LightYellowUrl,
    LightBlueUrl,
    LightGreenUrl,
    LightOragneUrl,
    LightPinkUrl,
    LightRedUrl,
];

const SingleLight = () => {

    const [isOff, setOff] = useState(true);

    const getRandomLight = () => {
        return Math.floor(Math.random() * lights.length);
    };

    const randomLight = getRandomLight();

    const imgSrc = isOff ? LightOffUrl : lights[randomLight];

    const handleToggle = () => {
        setOff(!isOff);
    }

    return (
        <img onClick = {handleToggle} src = {imgSrc} alt = 'Single light'/>
    )

};

export default SingleLight;