function addQuestions (obj) {
    for(key in obj) {
      obj[key].usersAnswer = null
    }
    return obj
  }
  
  addQuestions(questions)