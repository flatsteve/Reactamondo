'use strict';

export function convertToMinutes(timeInSeconds) {
  const secondsInMinute = 60;
  let minutes = Math.floor(timeInSeconds / secondsInMinute);

  return minutes > 0 ? minutes + 'min' : 'Due';
}