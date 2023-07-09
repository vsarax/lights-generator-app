import React, { useState } from 'react';
import IconMinus from './icons/IconMinus';
import IconPlus from './icons/IconPlus';
import Text from './Text';

import styles from './Counter.module.css'

const Counter = (props) => {

    const [value, setValue] = useState(props.count);

    const onMinusHandleClick = () => {
        if( value <= 0) {
            return;
        }
        setValue(value - 1);
    }

    const onPlusHandleClick = () => {
        setValue(value + 1);
    }

    return (
        <div className={styles.wrapper}>
          <Text>{value} {props.item}</Text>
          <nav>
            <IconMinus className={styles.icon} onClick={onMinusHandleClick} />
            <IconPlus className={styles.icon} onClick={onPlusHandleClick} />
          </nav>
        </div>
      );

};

export default Counter;