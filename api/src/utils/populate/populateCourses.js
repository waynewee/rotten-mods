const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Course = require('../../../dist/src/models/course').default

function populateCourse(){

  return Course.remove({})
  .then(() => {

    console.log("Populating courses")
    const promises = []
    
  
    const courses = [
      "Computer Science",
      "Business",
      "Political Science",
      "Economics",
      "Chemistry",
      "Physics",
      "Nursing",
      "Dentistry"
    ]
    
    for( let i = 0; i < courses.length; i++ ){
  
      const newCourse = new Course({
        name: courses[i]
      })
    
      promises.push(newCourse.save())
    }
    return Promise.all(promises)
  })

}

module.exports = {
  populateCourse
}



