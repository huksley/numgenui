import React from 'react';
import GeneratedNumber from './GeneratedNumber';

const GeneratedNumbers = props => {
  const numbers = props.numbers;
  const fragments = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const el = (
      <GeneratedNumber
        key={'number' + i}
        index={i + 1}
        primary={number.primary}
        secondary={number.secondary}
      />
    );
    fragments.push(el);
  }
  return fragments;
}

export default GeneratedNumbers;
