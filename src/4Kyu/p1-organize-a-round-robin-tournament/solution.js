function buildMatchesTable(numberOfTeams) {
  let numOfMatchesPerRound = numberOfTeams / 2;
  let arr = Array.from({ length: numberOfTeams }, (_, i) => i + 1);

  var result = arr.flatMap((v, i) =>
    arr.slice(i + 1).map((w) => (v + "" + w).split(""))
  );

  let matches = [result[0]];
  result.shift();
  while (true) {
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < numOfMatchesPerRound; j++) {
            for (let k = 0; k < 2; k++) {
                if (matches[i][j] === result[i][j]) {}
            }
        }
    }
  }

  console.log(result)
}

buildMatchesTable(4);
