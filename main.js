const example = [
  ["A","A","A"],
  ["A","A","A"],
  ["B","A","A"]
];


const whereIsWaldo = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const row = [];
  const col = [];
  const waldo = [];
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === "A") {
        row.push(i);
        col.push(j);
      }
    }
  }
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === "B") {
        waldo.push(i+1);
        waldo.push(j+1);
      }  
    }
  }
  return waldo;
  
  
}

console.log(whereIsWaldo(example))
// should output [3,1]

