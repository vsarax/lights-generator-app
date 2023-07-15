import React from 'react';
import IconMinus from './icons/IconMinus';
import IconPlus from './icons/IconPlus';
import Text from './Text';

import styles from './Counter.module.css'

const Counter = (props) => {

    return (
        <div className={styles.wrapper}>
          <Text>{props.count} {props.item}</Text>
          <nav>
            <IconMinus className={styles.icon} onClick={props.onDecrement} />
            <IconPlus className={styles.icon} onClick={props.onIncrement} />
          </nav>
        </div>
      );

};

export default Counter;