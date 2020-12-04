import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';
const shortid = require("shortid");

export default function Stars(props) {
    const { count } = props;
    if (1 > count || count > 5) return null;
    const arr = [];
    for (let i = 0; i <= (count - 1); i++) {
        arr.push(i);
    };
    const output = arr.map((item) =>
    ({id: shortid.generate(), value: item }));

    return (
        <ul>
            {output.map((star) => {
                return <Star key={star.id}/>
            })}
        </ul>
    )
};

Stars.defaultProps = {
    count: 0
};

Stars.propTypes = {
    count: PropTypes.number
};
