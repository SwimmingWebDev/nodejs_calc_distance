const mathHelpers = require("./mathHelpers");
const fs = require("fs");
const process = require("process");

const userInput = process.argv.slice(2);
let convertInputToNum = [];

//check userInput
const validInput = (arr, callback) => {
  if (arr.length != 4) {
    return callback(new Error("Must provide valid input"), null);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(Number(arr[i]))) {
        return callback(new Error("Must provide numbers"), null);
      } else {
        convertInputToNum.push(Number(arr[i]));
      }
    }
    const result = `Valid Input: ${convertInputToNum}`;
    callback(null, result);

    const inputX1 = convertInputToNum[0];
    const inputY1 = convertInputToNum[1];
    const inputX2 = convertInputToNum[2];
    const inputY2 = convertInputToNum[3];

    return processInput(inputX1, inputY1, inputX2, inputY2);
  }
};

// get distance
const processInput = (x1, y1, x2, y2) => {
  const values = `${x1},${y1},${x2},${y2}`;

  fs.mkdir("dataPoints", (err) => {
    if (err) {
      return console.log(err);
    }
    fs.writeFile("./dataPoints/points.txt", values, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("Content saved");

      const calcDistance = mathHelpers.distance(x1, y1, x2, y2);

      fs.appendFile("./dataPoints/points.txt", `\n${calcDistance}`, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log(
          `The distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${calcDistance}.`
        );
      });
    });
  });
};

validInput(userInput, (err, result) => {
  if (err) {
    return console.log(err);
  } else {
    return console.log(result);
  }
});
