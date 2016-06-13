'use strict';

export function getBusTimes() {
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

export function conectToHub(updateFunction) {
  $.connection.hub.logging = true;
  $.connection.hub.url = "https://push-api.tfl.gov.uk/signalr/hubs/signalr";

  var hub = $.connection.predictionsRoomHub;
  hub.client.showPredictions = updateFunction.bind(this);

  $.connection.hub.start()
    .done(function () {
      var lineRooms = [{ "stationName": "National Maritime Museum", "NaptanId": "490006196F" }];

      hub.server.addLineRooms(lineRooms)
        .done(function () {
          console.info("Hub connection success");
          return;
        })
        .fail(function (error) {
          console.error("Hub connection error: " + error);
          return;
        });
    });
}