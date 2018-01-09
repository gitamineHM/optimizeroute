module.exports =  {

  input_data_1 : {
   // Time at which we're leaving home
   "departureTime": "1516431600",
   "home": {
      "lat": 48.865878,
      "lng": 2.3558864
   },
   "tasks":[
      {
        "id":1,
        "lat":48.862765,
        "lng":2.337974,
        "duration": 60
      },
      {
         "id":2,
         "lat":48.8680368,
         "lng":2.3412603,
         "duration":45 // Duration of the task, in minutes
      },
      {
        "id": 3,
        "lat": 48.863510,
        "lng": 2.332457,
        "duration": 30
      }
   ]
},

input_data_2 : {
 "futur" : true,
 "departureTime": "1516431600",
 "home": {
    "lat": 48.865878,
    "lng": 2.3558864
 },
 "tasks":[
    {
      "id":1,
      "lat":48.862765,
      "lng":2.337974,
      "duration": 60
    },
    {
       "id":2,
       "lat":48.8680368,
       "lng":2.3412603,
       "duration":45 // Duration of the task, in minutes
    },
    {
      "id": 3,
      "lat": 48.863510,
      "lng": 2.332457,
      "duration": 30
    }
 ]
},

input_data_3 : // test Predict_futur_trafic
{ departureTime: 1613243521,
  home: { lat: 48.865878, lng: 2.3558864 },
  destination: { lat: 48.8627003, lng: 2.3382061 }
},

output_data_1 : {
  schedule:
   [ { id: 0,
       lat: 48.8680879,
       lng: 2.3410382,
       startsAt: 1508757111,
       endsAt: 1508759811 },
     { id: 1,
       lat: 48.8636066,
       lng: 2.3325267,
       startsAt: 1508760114,
       endsAt: 1508761914 },
     { id: 2,
       lat: 48.8627003,
       lng: 2.3382061,
       startsAt: 1508762135,
       endsAt: 1508765735 } ],
  totalTime: 28 },

output_data_2 : {
  geocoded_waypoints:
   [ { geocoder_status: 'OK',
       place_id: 'EiQxIFJ1ZSBWYXVjYW5zb24sIDc1MDAzIFBhcmlzLCBGcmFuY2U',
       types: [Array] },
     { geocoder_status: 'OK',
       place_id: 'EisxOC0yMCBSdWUgZGUgbGEgQmFucXVlLCA3NTAwMiBQYXJpcywgRnJhbmNl',
       types: [Array] },
     { geocoder_status: 'OK',
       place_id: 'EiYxOTIgUnVlIGRlIFJpdm9saSwgNzUwMDEgUGFyaXMsIEZyYW5jZQ',
       types: [Array] },
     { geocoder_status: 'OK',
       place_id: 'ChIJobDmaiRu5kcR9ayStoKtS3M',
       types: [Array] },
     { geocoder_status: 'OK',
       place_id: 'EiQxIFJ1ZSBWYXVjYW5zb24sIDc1MDAzIFBhcmlzLCBGcmFuY2U',
       types: [Array] } ],
  routes:
   [ { bounds: [Object],
       copyrights: 'Map data ©2017 Google',
       legs: [Array],
       overview_polyline: [Object],
       summary: 'Boulevard de Sébastopol',
       warnings: [],
       waypoint_order: [Array] } ],
  status: 'OK' },

  output_data_3: {
      origin: '48.865878,2.3558864',
      mode: 'DRIVING',
      waypoints:
       [ '48.862765,2.337974',
         '48.8680368,2.3412603',
         '48.86351,2.332457' ],
      departure_time: '1516431600',
      traffic_model: 'optimistic',
      unitSystem: 'METRIC',
      optimizeWaypoints: true,
      language: 'fr',
      key: 'AIzaSyBzJdThegqmtnySacm1trUkhomjfsJLYvw',
      destination: '48.865878,2.3558864'
  },

  output_data_4 : 'origin=48.865878,2.3558864&mode=DRIVING&waypoints=optimize:true%7C48.862765,2.337974%7C48.8680368,2.3412603%7C48.86351,2.332457%7C&departure_time=1516431600&traffic_model=optimistic&unitSystem=METRIC&optimizeWaypoints=true&language=fr&key=AIzaSyBzJdThegqmtnySacm1trUkhomjfsJLYvw&destination=48.865878,2.3558864&'
  ,
  output_data_5 :{
   "geocoded_waypoints":[
      {
         "geocoder_status":"OK",
         "place_id":"EiQxIFJ1ZSBWYXVjYW5zb24sIDc1MDAzIFBhcmlzLCBGcmFuY2U",
         "types":[
            "street_address"
         ]
      },
      {
         "geocoder_status":"OK",
         "place_id":"ChIJobDmaiRu5kcR9ayStoKtS3M",
         "types":[
            "street_address"
         ]
      }
   ],
   "routes":[
      {
         "bounds":{
            "northeast":{
               "lat":48.8660176,
               "lng":2.3569115
            },
            "southwest":{
               "lat":48.8625044,
               "lng":2.3374841
            }
         },
         "copyrights":"Données cartographiques ©2017 Google",
         "legs":[
            {
               "distance":{
                  "text":"1,9 km",
                  "value":1877
               },
               "duration":{
                  "text":"11 minutes",
                  "value":661
               },
               "duration_in_traffic":{
                  "text":"9 minutes",
                  "value":550
               },
               "end_address":"3 Rue des Bons Enfants, 75001 Paris, France",
               "end_location":{
                  "lat":48.8627003,
                  "lng":2.3382061
               },
               "start_address":"1 Rue Vaucanson, 75003 Paris, France",
               "start_location":{
                  "lat":48.865878,
                  "lng":2.3558864
               },
               "steps":[
                  {
                     "distance":{
                        "text":"17 m",
                        "value":17
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":4
                     },
                     "end_location":{
                        "lat":48.8660176,
                        "lng":2.3559758
                     },
                     "html_instructions":"Prendre la direction <b>nord-est</b> sur <b>Rue Vaucanson</b> vers <b>Rue Conté</b>",
                     "polyline":{
                        "points":"wbgiHickM[Q"
                     },
                     "start_location":{
                        "lat":48.865878,
                        "lng":2.3558864
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"70 m",
                        "value":70
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":49
                     },
                     "end_location":{
                        "lat":48.8657659,
                        "lng":2.3568509
                     },
                     "html_instructions":"Prendre <b>à droite</b> sur <b>Rue Conté</b>",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"scgiH{ckMVqAX{A"
                     },
                     "start_location":{
                        "lat":48.8660176,
                        "lng":2.3559758
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"14 m",
                        "value":14
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":30
                     },
                     "end_location":{
                        "lat":48.8656451,
                        "lng":2.3569115
                     },
                     "html_instructions":"Prendre <b>à droite</b> sur <b>Rue Montgolfier</b>",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"abgiHiikMVK"
                     },
                     "start_location":{
                        "lat":48.8657659,
                        "lng":2.3568509
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0,6 km",
                        "value":606
                     },
                     "duration":{
                        "text":"3 minutes",
                        "value":198
                     },
                     "end_location":{
                        "lat":48.8638505,
                        "lng":2.3490983
                     },
                     "html_instructions":"Prendre <b>à droite</b> sur <b>Rue de Turbigo</b>",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"iagiHuikMRzANhAPlANbAb@rCDVb@bDL~@v@|FXlBTvABRPnATzAPvAJv@H`@HZ"
                     },
                     "start_location":{
                        "lat":48.8656451,
                        "lng":2.3569115
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0,5 km",
                        "value":469
                     },
                     "duration":{
                        "text":"3 minutes",
                        "value":158
                     },
                     "end_location":{
                        "lat":48.8653016,
                        "lng":2.3430716
                     },
                     "html_instructions":"Prendre <b>à droite</b> sur <b>Rue Étienne Marcel</b>",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"avfiH{xiMIf@YlBa@nCk@zDaA`GIp@Id@_@dCUtAE\\]~B"
                     },
                     "start_location":{
                        "lat":48.8638505,
                        "lng":2.3490983
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0,1 km",
                        "value":104
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":30
                     },
                     "end_location":{
                        "lat":48.8644151,
                        "lng":2.3426217
                     },
                     "html_instructions":"Prendre <b>à gauche</b> sur <b>Rue du Louvre</b>",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"c_giHeshMrAf@zAp@"
                     },
                     "start_location":{
                        "lat":48.8653016,
                        "lng":2.3430716
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"67 m",
                        "value":67
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":19
                     },
                     "end_location":{
                        "lat":48.8640919,
                        "lng":2.3418669
                     },
                     "html_instructions":"Prendre <b>à droite</b> sur <b>Rue Coq Héron</b>",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"syfiHkphM@D?D?@?@?B?@@@?@?@@B?@DLf@hALZ"
                     },
                     "start_location":{
                        "lat":48.8644151,
                        "lng":2.3426217
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0,1 km",
                        "value":132
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":34
                     },
                     "end_location":{
                        "lat":48.8633943,
                        "lng":2.3404537
                     },
                     "html_instructions":"Continuer sur <b>Rue du Bouloi</b>",
                     "polyline":{
                        "points":"qwfiHukhMCJd@jADJj@vAXp@FLFJLR"
                     },
                     "start_location":{
                        "lat":48.8640919,
                        "lng":2.3418669
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0,2 km",
                        "value":177
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":56
                     },
                     "end_location":{
                        "lat":48.8639224,
                        "lng":2.3381678
                     },
                     "html_instructions":"Prendre <b>à droite</b> sur <b>Rue du Colonel Driant</b>",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"esfiHybhMCHCPIn@Mz@m@~D[~B"
                     },
                     "start_location":{
                        "lat":48.8633943,
                        "lng":2.3404537
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0,1 km",
                        "value":147
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":56
                     },
                     "end_location":{
                        "lat":48.86268279999999,
                        "lng":2.3374841
                     },
                     "html_instructions":"Prendre <b>à gauche</b> sur <b>Rue de Valois</b>",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"ovfiHqtgMTLXNbAb@bCfA"
                     },
                     "start_location":{
                        "lat":48.8639224,
                        "lng":2.3381678
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"52 m",
                        "value":52
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":17
                     },
                     "end_location":{
                        "lat":48.8625044,
                        "lng":2.3381443
                     },
                     "html_instructions":"Prendre <b>à gauche</b> sur <b>Rue Saint Honoré</b>",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"wnfiHgpgMb@cC"
                     },
                     "start_location":{
                        "lat":48.86268279999999,
                        "lng":2.3374841
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"22 m",
                        "value":22
                     },
                     "duration":{
                        "text":"1 minute",
                        "value":10
                     },
                     "end_location":{
                        "lat":48.8627003,
                        "lng":2.3382061
                     },
                     "html_instructions":"Prendre <b>à gauche</b> sur <b>Rue des Bons Enfants</b>",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"smfiHktgMMCEAC?ICEA?A"
                     },
                     "start_location":{
                        "lat":48.8625044,
                        "lng":2.3381443
                     },
                     "travel_mode":"DRIVING"
                  }
               ],
               "traffic_speed_entry":{

               },
               "via_waypoint":{

               }
            }
         ],
         "overview_polyline":{
            "points":"wbgiHickM[QVqAX{AVKb@dD`@pCzAnKjBvMdAzHR|@c@tCyC~ReA~G]~BrAf@zAp@@D?F?D@Fn@|ALZCJj@vAtAbDLRCHM`A{@zF[~BTL|Ar@bCfAb@cCSEMCEC"
         },
         "summary":"Rue de Turbigo et Rue Étienne Marcel",
         "warnings":{

         },
         "waypoint_order":{

         }
      }
   ],
   "status":"OK"
}

}
