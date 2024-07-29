function getPassingStudents(students) {
    return students.filter(student => student.score >= 60);
  }
  
  const students = [
    { name: 'Ankit', score: 58 },
    { name: 'Dev', score: 72 },
    { name: 'Geeta', score: 85 },
    { name: 'David', score: 49 },
    { name: 'Eva', score: 91 }
  ];
  
  const passingStudents = getPassingStudents(students);
  console.log(passingStudents);
 
  