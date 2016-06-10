'use strict';

export default function getBusTimes() {
  const busTimesEndpoint = 'https://api.tfl.gov.uk/StopPoint/490006196F/Arrivals';
  const tflAuth = '?app_id=1ca97399&app_key=4b99b3621b6c8f7cd6c1a2d3431b022f';

  return new Promise(
    function (resolve, reject) {
      fetch(busTimesEndpoint + tflAuth)
        .then(response => {
          response.json()
            .then(data => {
              resolve(data);
            });
        }).catch(error => reject(error));
    }
  );
}