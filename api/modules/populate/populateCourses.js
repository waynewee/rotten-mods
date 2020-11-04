const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')

mongoose.connect(mongoUri)

const Course = require('../../dist/src/models/course').default
const makeCourse = require('../../dist/src/makers/course-maker').default

async function populateCourse(){

  return Course.remove({})
  .then(async () => {

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
  
      const course = await makeCourse({
        name: courses[i]
      })

      const newCourse = new Course(course)
    
      promises.push(newCourse.save())
    }
    return Promise.all(promises)
  })

}

module.exports = {
  populateCourse
}



