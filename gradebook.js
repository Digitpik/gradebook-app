// STEP 1: Calculate the average of the test scores
function getAverage(scores) {
  let totalSum = 0;
  
  for (let i = 0; i < scores.length; i++) {
    totalSum += scores[i];
  }
  
  return totalSum / scores.length;
}

// STEP 2: Convert numerical score to an alphabetical letter grade
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// STEP 3: Check if the score corresponds to a passing grade (Not 'F')
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// STEP 4: Compose the final reporting text dashboard for the student
function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores);
  let grade = getGrade(studentScore);
  
  let message = "Class average: " + average + ". Your grade: " + grade + ". ";
  
  if (hasPassingGrade(studentScore)) {
    return message + "You passed the course.";
  } else {
    return message + "You failed the course.";
  }
}
