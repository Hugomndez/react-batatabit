import { useState, useEffect } from 'react';

const Date = () => {
  const [date, setDate] = useState('');

  const showDate = () => {
    const event = new Date();
    const options = { dateStyle: 'short' };
    // @ts-ignore
    const date = event.toLocaleString('en', options);
    return;
  };

  useEffect(() => {
    showDate();
    console.log(date);
  }, []);

  return <span>{date}</span>;
};

export default Date;
