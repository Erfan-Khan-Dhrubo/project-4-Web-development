function validEmail(email) {
  if (typeof email === "string") {
    if (
      email[0] === "." ||
      email[0] === "-" ||
      email[0] === "_" ||
      email[0] === "+" ||
      email[0] === "@"
    ) {
      return false;
    }
    if (email.includes("@") == false) {
      return false;
    }
    if (email.includes(" ")) {
      return false;
    }
    if (email.slice(-4) !== ".com") {
      return false;
    }
    return true;
  } else {
    return "Invalid";
  }
}

let a = validEmail(7);
console.log(a);
