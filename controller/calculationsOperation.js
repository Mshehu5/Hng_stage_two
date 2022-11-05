function addition(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const enumobj = Object.freeze({
  addition: addition,
  subtraction: subtract,
  multiplication: multiply,
});

function calops(req) {
  const words = req.body.operation_type;
  const lent = words.split(" ");
  const lentO = lent.length;
  const cent = words.split(" ");
  const x = Number(req.body.x);
  const y = Number(req.body.y);
  const wordNum = [];
  let ans;
  if (lentO > 1 && (!x || !y)) {
    lent.forEach((word) => {
      let numed = Number(word);
      if (!isNaN(numed)) {
        wordNum.push(numed);
      }
    });
    cent.forEach((word) => {
      switch (word) {
        case "addition":
          {
            ans = enumobj.addition(wordNum[0], wordNum[1]);
          }
          break;
        case "plus":
          {
            ans = enumobj.addition(wordNum[0], wordNum[1]);
          }
          break;
        case "sum":
          {
            ans = enumobj.addition(wordNum[0], wordNum[1]);
          }
          break;
        case "add":
          {
            ans = enumobj.addition(wordNum[0], wordNum[1]);
          }
          break;
        case "summation":
          {
            ans = enumobj.addition(wordNum[0], wordNum[1]);
          }
          break;
        case "subtraction":
          {
            ans = enumobj.subtraction(wordNum[0], wordNum[1]);
          }
          break;
        case "subtract":
          {
            ans = enumobj.subtraction(wordNum[0], wordNum[1]);
          }
          break;
        case "difference":
          {
            ans = enumobj.subtraction(wordNum[0], wordNum[1]);
          }
          break;
        case "minus":
          {
            ans = enumobj.subtraction(wordNum[0], wordNum[1]);
          }
          break;
        case "multiplication":
          {
            ans = enumobj.multiplication(wordNum[0], wordNum[1]);
          }
          break;
        case "multiply":
          {
            ans = enumobj.multiplication(wordNum[0], wordNum[1]);
          }
          break;
        case "product":
          {
            ans = enumobj.multiplication(wordNum[0], wordNum[1]);
          }
          break;
        case "times":
          {
            enumobj.multiplication(wordNum[0], wordNum[1]);
          }
          break;
      }
    });
    console.log(wordNum);
  } else if (lentO > 1) {
    lent.forEach((word) => {
      let numed = Number(word);
      if (!isNaN(numed)) {
        wordNum.push(numed);
      }
    });
    cent.forEach((word) => {
      switch (word) {
        case "addition":
          {
            ans = enumobj.addition(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "plus":
          {
            ans = enumobj.addition(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "sum":
          {
            ans = enumobj.addition(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "add":
          {
            ans = enumobj.addition(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "summation":
          {
            ans = enumobj.addition(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "subtraction":
          {
            ans = enumobj.subtraction(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "subtract":
          {
            ans = enumobj.subtraction(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "difference":
          {
            ans = enumobj.subtraction(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "minus":
          {
            ans = enumobj.subtraction(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "multiplication":
          {
            ans = enumobj.multiplication(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "multiply":
          {
            ans = enumobj.multiplication(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "product":
          {
            ans = enumobj.multiplication(wordNum[0] || x, wordNum[1] || y);
          }
          break;
        case "times":
          {
            enumobj.multiplication(wordNum[0] || x, wordNum[1] || y);
          }
          break;
      }
    });
    console.log(wordNum);
  } else {
    cent.forEach((word) => {
      switch (word) {
        case "addition":
          {
            ans = enumobj.addition(x, y);
          }
          break;
        case "plus":
          {
            ans = enumobj.addition(x, y);
          }
          break;
        case "sum":
          {
            ans = enumobj.addition(x, y);
          }
          break;
        case "add":
          {
            ans = enumobj.addition(x, y);
          }
          break;
        case "summation":
          {
            ans = enumobj.addition(x, y);
          }
          break;
        case "subtraction":
          {
            ans = enumobj.subtraction(x, y);
          }
          break;
        case "subtract":
          {
            ans = enumobj.subtraction(x, y);
          }
          break;
        case "difference":
          {
            ans = enumobj.subtraction(x, y);
          }
          break;
        case "minus":
          {
            ans = enumobj.subtraction(x, y);
          }
          break;
        case "multiplication":
          {
            ans = enumobj.multiplication(x, y);
          }
          break;
        case "multiply":
          {
            ans = enumobj.multiplication(x, y);
          }
          break;
        case "product":
          {
            ans = enumobj.multiplication(x, y);
          }
          break;
        case "times":
          {
            ans = enumobj.multiplication(x, y);
          }
          break;
      }
    });
  }
  return ans;
}

module.exports = {
  enumobj,
  calops,
};
