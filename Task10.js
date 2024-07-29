function calculateTotalScore(objects) {
    let totalScore = 0;
    objects.forEach(obj => {
      if (typeof obj.score === 'number') {
        totalScore += obj.score;
      }
    });
    return totalScore;
  }
  

  const scores = [
    { name: 'A', score: 10 },
    { name: 'B', score: 20 },
    { name: 'C', score: 30 },
    { name: 'D', score: 40 }
  ];
  
  const total = calculateTotalScore(scores);
  
  console.log(total);
  