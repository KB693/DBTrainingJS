function findLongestString(arr) {
    return arr.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, "");
  }
  
  const strings = ["apple", "watermelon", "cherry", "date", "grape"];
  const longestString = findLongestString(strings);
  
  console.log(longestString); 