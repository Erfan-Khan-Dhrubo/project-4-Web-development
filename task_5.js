function calculateWatchTime(times) {
  let totalSecond = 0;
  for (let i of times) {
    if (typeof i === "number") {
      totalSecond += i;
    } else {
      return "Invalid";
    }
  }
  const hr = parseInt(totalSecond / 3600);
  const min = parseInt((totalSecond - hr * 3600) / 60);
  const sec = totalSecond % 60;
  let time = {
    hour: hr,
    minute: min,
    second: sec,
  };
  return time;
}

let a = calculateWatchTime([]);
console.log(a);
