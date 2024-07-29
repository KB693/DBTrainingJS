function capitalizeFirstLetter(sentence) {
    return sentence
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '); 
  }
  
  const sentence = "this is a test sentence.";
  const capitalizedSentence = capitalizeFirstLetter(sentence);
  
  console.log(capitalizedSentence); 
  