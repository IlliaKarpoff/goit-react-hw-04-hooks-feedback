import React from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import propTypes from 'prop-types';

export default function Statistics(props) {
  const names = Object.keys(props);
  return (
    <Section title={'Statistics'}>
      {props.total > 0 ? (
        <ul>
          {names.map(name => (
            <li key={name}>
              {name}: {props[name]}
            </li>
          ))}
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </Section>
  );
}

Statistics.propTypes = {
  stats: propTypes.arrayOf(propTypes.array),
  total: propTypes.number.isRequired,
  positivePersentage: propTypes.number,
};