const {
  Router
} = require("express");

const fs = require("fs");

const router = Router();

let map = [
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // [0, 1, 2, 3, 4, 5, 6, 7, 8],
];

for (let i = 0; i < 20; i++) {
  let x = []
  for (let j = 0; j < 20; j++) {
    x.push(j)
  }
  map.push(x)
}

let movers = [{
  mover_id: 0,
  position_x: 0,
  position_y: 0,
}, ];

let way = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [2, 3],
  [3, 3],
  [3, 2],
  [3, 1],
];
let way1 = [
  [2, 1],
  [2, 0],
  [1, 0],
];
let action = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [2, 3],
  [3, 3],
  [3, 2],
  [3, 1],
];
let action1 = [{
    position_x: 0,
    position_y: 1,
    task_status: 1
  },
  {
    position_x: 0,
    position_y: 2,
    task_status: 1
  },
  {
    position_x: 1,
    position_y: 2,
    task_status: 1
  },
  {
    position_x: 2,
    position_y: 2,
    task_status: 1
  },
  {
    position_x: 2,
    position_y: 2,
    task_status: 0
  },
];
let index = 0;
let num = true;
let point = 0;

router.get("/connect", (req, res) => {
  res.send({
    Floor: map,
  });
});

router.get("/movers", (req, res) => {
  res.send(movers);
});

router.get("/task", (req, res) => {
  if (req.body.target_x == 1 && req.body.target_y == 0) {
    res.send({
      motion_path: way1
    });
    console.log("1");
    point = 1;
  } else {
    res.send({
      motion_path: way
    });
    console.log("0");
    point = 0;
  }
  num = true;
  index = 0;
  console.log(req.body);
});

router.get("/status", (req, res) => {
  let start = false;
  let route;
  if (point == 0) {
    route = action1;
  } else {
    route = action1;
  }
  if (index < route.length) {
    res.send(route[index]);
    start = true;
  }
  if (start && num) {
    num = false;
    for (let i = 0; i < route.length; i++) {
      setTimeout(() => {
        index++;
        console.log(index);
      }, 1500 + i * 1500);
    }
  }
});

module.exports = router;