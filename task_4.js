function isBestFriend(f1, f2) {
  if (typeof f1 === "object" && typeof f2 === "object") {
    if (Array.isArray(f1) === false && Array.isArray(f2) === false) {
      if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Invalid";
    }
  } else {
    return "Invalid";
  }
}

let a = isBestFriend(
  { name: "hashem", roll: 1, bestFriend: 2 },
  { name: "kashem", roll: 2, bestFriend: 1 }
);
console.log(a);
