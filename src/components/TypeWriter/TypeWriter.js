import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './type-writer.css';

const TypeWriter = ({ title, words }) => {
  const [text, setText] = useState('');
  const [isDeleting, setDeleting] = useState(false);

  const [wordIndex, setWordIndex] = useState(0);

  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    setTimeout(() => {
      const current = wordIndex % words.length;
      const fullTxt = words[current];
      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
        setTypeSpeed(75);
      } else {
        setText(fullTxt.substring(0, text.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setDeleting({ isDeleting: true }), 3000);
      } else if (isDeleting && text === '') {
        setDeleting(false);
        setWordIndex(wordIndex + 1);
      }
    }, typeSpeed);
  }, [text, isDeleting, wordIndex, typeSpeed]);

  return (
    <div className='type-writer'>
      <h1>{title}</h1>
      <h2>
        {text}
        <span className='cursor' />
      </h2>
    </div>
  );
};

TypeWriter.propTypes = {};

export default TypeWriter;
