function buildMatchesTable(numberOfTeams) {
  let pairs = [];
  let n = numberOfTeams;
  let arr = [];
  //create all possible pairs without repeating
  for (var i = 1; i <= n; i++) {
    for (var j = i + 1; j <= n; j++) {
      pairs.push([i, j]);
    }
  }

  //not working
  for (var i = 0; i < n - 1; i++) {
    if (!arr[i]) {
      arr.push(pairs[j]);
      pairs.splice(j, 1);
    }
    for (var j = 0; j < pairs.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        if (
          arr[k][0] !== pairs[j][0] &&
          arr[k][1] !== pairs[j][1]
        ) {
          arr.push(pairs[j]);
          pairs.splice(j, 1);
        }
      }
    }
  }

  console.log(arr);
}

buildMatchesTable(4);
