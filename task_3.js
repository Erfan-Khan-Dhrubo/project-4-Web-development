function electionResult(votes) {
  if (Array.isArray(votes) == true) {
    let mango = 0;
    let banana = 0;
    for (let i of votes) {
      if (i === "mango") {
        mango += 1;
      } else if (i == "banana") {
        banana += 1;
      }
    }

    if (mango > banana) {
      return "Mango";
    } else if (banana > mango) {
      return "Banana";
    } else {
      return "Draw";
    }
  } else {
    return "Invalid";
  }
}

let a = electionResult(["mango", "BananA", "na vote", "na vote"]);
console.log(a);
