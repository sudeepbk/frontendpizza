export const add = function (newIteam) {
  var newOrderList = [];

  if (localStorage.getItem("OrderedList") === "null") {
    newOrderList.push(newIteam);
    localStorage.setItem("OrderedList", JSON.stringify(newOrderList));
  } else {
    var oldOrderList = JSON.parse(localStorage.getItem("OrderedList"));

    oldOrderList.push(newIteam);
    localStorage.setItem("OrderedList", JSON.stringify(oldOrderList));
  }
};

export const remove = function (indexNumber) {
  var oldOrderList = JSON.parse(localStorage.getItem("OrderedList"));
  var newOrderList = [];

  oldOrderList.forEach((element, i) => {
    if (indexNumber !== i) {
      newOrderList.push(element);
    }
  });

  localStorage.setItem("OrderedList", JSON.stringify(newOrderList));
};

export default { add, remove };
