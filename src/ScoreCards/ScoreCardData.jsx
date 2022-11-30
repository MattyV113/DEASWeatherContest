import React from 'react';

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

const ScoreCardData = {
  title: `Submit for ${date}`,
};

export default ScoreCardData;
