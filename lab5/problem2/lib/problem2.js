function readInput() {
    const list = [];
    while (true) {
      const input = prompt("Enter an  integer (a negative integer to quit):");
      const num = parseInt(input);
      if (isNaN(num)) {
        
      } else if (num < 0) {
        return list;
      } else {
        list.push(num);
      }
    }
  }
  
  function displayStats(list) {
    const average = list.length > 0 ? (list.reduce((acc, val) => acc + val, 0) / list.length).toFixed(2) : 0;
    const min = list.length > 0 ? Math.min(...list) : 0;
    const max = list.length > 0 ? Math.max(...list) : 0;
  
    const listString = list.join(", ");
    const statsString = `For the list ${listString}, the average is ${average}, the minimum is ${min}, and the maximum is ${max}.`;
  
    alert(statsString);
  }
  
  const list = readInput();
  displayStats(list);
  