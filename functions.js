var Param = require('./Param')
var request = require('request');

function API_JSON_TO_GOOGLE_JSON(input)
{
  var output = {
      origin: input.home.lat + ',' + input.home.lng ,
      mode:'DRIVING',
      waypoints: [],
      // departure_time: parseInt(new Date / 1000) ,
      departure_time : input.departureTime,
      traffic_model: 'optimistic',
      unitSystem : 'METRIC' ,
      optimizeWaypoints : true,
      language : 'fr',
      key : Param.Google_API_KEY
    };

  // Round trip enabled or origin different than destination
  if (input.destination) { output.destination = input.destination.lat  + ',' +  input.destination.lng ;}
  else { output.destination = output.origin; }

  // generate waypoints
  if(input.tasks)
  for (var i= 0, len = input.tasks.length; i < len; i++) { //faster than foreach loop
  output.waypoints.push(input.tasks[i].lat  + ',' + input.tasks[i].lng);
  }
  return output;

}


//compute total distance
function computeTotalDistance(result){
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000;
  return total
};

//compute total direction
function computeTotalDuration(result){
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].duration.value;
  }
  return total

};

// compute trafic direction
function computeTraficDuration(result){

  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].duration_in_traffic.value;
  }
  // console.log(total)
  return total
};

function computeTotalTasksDuration(tab){
  var sum = 0 ;
  for (var i = 0; i < tab.length; i++) {
    sum += tab[i]
  }
  return sum
};

//Transform Google JSON To encoded Query Parameters
function Encode_Query_String(obj) {
  var result = "";
  var arr = "";
  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      if (Array.isArray(obj[p])) {
           if (obj.optimizeWaypoints)
           { arr = p + "=optimize:true|"; }
           else { arr = p + "="; }

           for (var d in obj[p] )
           arr += obj[p][d] + "|"

           result += arr + "&"
          } else {
            result += p + "=" + obj[p] + "&";
          }
    }
  }
  return encodeURI(result)
};

//Optimise through google direction directive
function OPTIMIZE(input){
  //console.log(input)
  return new Promise(function (resolve, reject) {
      var x =  Encode_Query_String(API_JSON_TO_GOOGLE_JSON(input))
      // console.log(x)
      request.get(Param.Google_Directions_API + x, function (err, res, body) {
        if (err) {
          reject(err);
        }
        else {
        var JSON_Output = JSON.parse(body)
        if(JSON_Output.status == 'OK')
        {
           // console.log(JSON_Output);
           // console.log(JSON_Output.routes[0])
          resolve(JSON_Output)
        }
        else reject(JSON_Output.status);
        // console.dir(JSON.parse(body)
      }
      });
  });
}

//Transform Google JSON To encoded Query Parameters
function Optimize_To_API(input) {
  return new Promise(function (resolve, reject) {
  var output = {}
  var schedule = []
  var h;
  var time = input.departureTime; //stores last task endtime or initial departuretime
  var tasks_duration = [] ; //stores ordered tasks duration (s)
  var travel_trafic =  [] ; //store realtime trafic duration (s)

  OPTIMIZE(input).then(function (j) {
  var legs = j.routes[0].legs
  //console.log(legs)
  var optimal_order = j.routes[0].waypoint_order;
  // console.log(optimal_order)
  if (input.tasks)
  for(var i = 0 ; i< input.tasks.length ; i++)  {

  tasks_duration.push(input.tasks[optimal_order[i]].duration*60)

  if(input.futur && input.futur==true) //stores trafic information
  {
   Predict_futur_trafic(legs[i].start_location.lat,legs[i].start_location.lng,legs[i].end_location.lat,legs[i].end_location.lng,+time)
  .then((res) =>  { travel_trafic.push(res.trafictime) })
  }

  schedule.push({
  id : i + 1 ,
  lat : legs[i].end_location.lat , //Nearest road to inital waypoint
  lng : legs[i].end_location.lng , //Nearest road to inital waypoint
  startsAt : +time + +legs[i].duration.value ,
  endsAt : +time + legs[i].duration.value + tasks_duration[i]
  })
  time = schedule[i].endsAt
  }

  output.schedule = schedule;

  if(input.futur && input.futur==true)
  output.totalTime = +computeTotalDuration(j) + +computeTotalTasksDuration(tasks_duration)

  if (!input.tasks) output.trafictime = computeTraficDuration(j);

  resolve(output)
}).catch(function (err) {
  reject(err);
});
});
}

////////////////////////////////////BONUS/////////////////////////////////////////////////////////////////////
//function returning futur trafic time between two points using the same function (recursivity)
function Predict_futur_trafic(lat1,lng1,lat2,lng2,Departure) {
return new Promise(function (resolve, reject) {
Optimize_To_API({departureTime: Departure, home:{ lat : lat1, lng : lng1 }, destination : {lat : lat2, lng : lng2 }, })
    .then((res) => resolve(res))
    .catch((err) => reject(err))
  })
}

module.exports = {
  Predict_futur_trafic :Predict_futur_trafic,
  Optimize_To_API : Optimize_To_API,
  Encode_Query_String :Encode_Query_String,
  OPTIMIZE : OPTIMIZE,
  computeTotalDuration : computeTotalDuration,
  computeTraficDuration : computeTraficDuration,
  computeTotalDistance : computeTotalDistance,
  API_JSON_TO_GOOGLE_JSON : API_JSON_TO_GOOGLE_JSON
}
