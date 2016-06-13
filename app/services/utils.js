'use strict';

import _ from 'lodash';

export function convertToMinutes(timeInSeconds) {
  const secondsInMinute = 60;
  let minutes = Math.floor(timeInSeconds / secondsInMinute);

  return minutes > 1 ? minutes + 'min' : 'Due';
}

export function copyToCamelCase(array) {
  let camelCasedArray = [];

  array.forEach(obj => {
    let camelCasedObject = {};

    Object.keys(obj).forEach(key => {
      camelCasedObject[_.camelCase(key)] = obj[key];
    });
    camelCasedArray.push(camelCasedObject);
  });

  return camelCasedArray;
}