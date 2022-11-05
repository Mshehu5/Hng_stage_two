const enumobject = require("./calculationsOperation");

function getEnumType(words) {
  const lent = words.split(" ");
  let enumType = Object.keys(enumobject);
  let enumvalue;
  lent.forEach((word) => {
    switch (word) {
      case "addition":
        {
          enumvalue = enumType[0];
        }
        break;
      case "plus":
        {
          enumvalue = enumType[0];
        }
        break;
      case "sum":
        {
          enumvalue = enumType[0];
        }
        break;
      case "add":
        {
          enumvalue = enumType[0];
        }
        break;
      case "summation":
        {
          enumvalue = enumType[0];
        }
        break;
      case "subtraction":
        {
          enumvalue = enumType[1];
        }
        break;
      case "subtract":
        {
          enumvalue = enumType[1];
        }
        break;
      case "difference":
        {
          enumvalue = enumType[1];
        }
        break;
      case "minus":
        {
          enumvalue = enumType[1];
        }
        break;
      case "multiplication":
        {
          enumvalue = enumType[2];
        }
        break;
      case "multiply":
        {
          enumvalue = enumType[2];
        }
        break;
      case "product":
        {
          enumvalue = enumType[2];
        }
        break;
      case "times":
        {
          enumvalue = enumType[2];
        }
        break;
    }
  });
  return enumvalue;
}

module.exports = {
  getEnumType,
};
