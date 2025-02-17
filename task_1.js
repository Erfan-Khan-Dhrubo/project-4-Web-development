function cashOut(money) {
  if (typeof money === "number") {
    if (money >= 0) {
      let cashOutCharge = money * (1.75 / 100);
      return cashOutCharge;
    } else {
      return "Invalid";
    }
  } else {
    return "Invalid";
  }
}

let a = cashOut(2000);
console.log(a);
