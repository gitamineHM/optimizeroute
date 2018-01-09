# Optimizeroute

Traveling Salesman optimisation Problem

This is a simple API that computes an optimized itinerary solving the [Traveling Salesman Problem](https://developers.google.com/optimization/routing/tsp/tsp).
This API does not have any mean of authentication.

This API offers the following endpoint : 

### POST /routeOptimizer

- This method consumes the list of tasks, with their durations and coordinates, and return a **schedule**, that takes into account both the travel time between those points and the duration of the task at each point.
- The method returns the most efficient route, that accounts for **driving time**
- The task schedule returned also take the **home coordinates** into account. *Example : If the first task is 30minutes away, and the departureTime is set to 09:00am, the first task should be scheduled at 09:30*

**Input :**

```javascript
{
   // Time at which we're leaving home
   "departureTime": "1508756400",
   "home": {
      "lat": 48.83310530000001,
      "lng": 2.333563799999979
   },
   "tasks":[
      {
         "id":1,
         "lat":48.8623348,
         "lng":2.3447356000000354,
         "duration":45 // Duration of the task, in minutes
      },
      {
        "id":2,
        "lat":48.879251,
        "lng":2.282264899999973,
        "duration": 60
      },
      {
        "id": 3,
        "lat": 48.7251521,
        "lng": 2.259899799999971,
        "duration": 30
      },
      {
        "id": 4,
        "lat": 48.83477,
        "lng": 2.370769999999993,
        "duration": 90
      }
   ]
}
```

**Output :**
```javascript
{
  "totalTime": 425, // Total time from leaving home to returning home

  // Array of tasks
  "schedule": [
    {
      "id": 1, // id of the task
      "startsAt": 1508756400, // UNIX timestamp of the starting time
      "endsAt": 1508756400, // UNIX timestamp of the ending time
      "lat":48.8623348,
      "lng":2.3447356000000354,
    },
    // .. etc ..
  ]
}
```

# Solutions

  ## solution A
       => We use google Directions API to get optimized node order, then reorder them and add duration of tasks

  ## solution B
        => We can use Google Directions Matrix to get distance between all nodes
        => compute algorithm to resolve TSP

  ## solution update
        => Use recursive function to take into account estimated future traffic into account.

**Dev Environnement**

-Node Js
-Atom Editor
-Code Linting : JsLint pluging for atom

**Testing Environnement**

I have set up Environnement for TDD : test driven developpement

-PostMan : to help build and test Restful API
-nodemon : Nodejs server auto-reload  and watching file changes
-mocha,chai,chaiHttp : testing API and functions
-istambul : testing coverage

To test developement => do npm test


**List of steps**

  _ Endpoint that takes a list of tasks and their locations and return optimal schedule minimizing driving timeout
    _ Take list of location and get optimal road minimizing time using google Directions API [ DRIVING , OPTIMIZE ]
    _ Since the travel is optimal and trafic is not taken into account, we could just add tasks duration.

**Optimisation**

  _ In order to get google Direction API optimise and recognize waypoint, it should take STOPs location not just any location 
    => use ROAD API to convert location to nearest road location
    _ For the tests, I've used location waypoints.
    _ Google Directions API return as result nearest road location to waypoints.
