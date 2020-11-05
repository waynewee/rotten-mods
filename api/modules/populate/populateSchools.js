const mongoose = require('mongoose')

const { mongoUri } = require('../../dist/config')

mongoose.connect(mongoUri)

const School = require('../../dist/src/models/school').default
const makeSchool = require('../../dist/src/makers/school-maker').default

async function populateSchools(){

  return School.remove({})
  .then(async () => {
    console.log("Populating schools")
    const promises = []
  
    const schools = [
      "National University of Singapore",
      "Singapore Institute of Management",
      "Singapore Management University",
      "Nanyang Technological University",
      "Singapore University of Technology and Design",
      "Singapore Institute of Technology",
      "Singapore University of Social Sciences",
      "Kaplan Higher Education Academy",
      "Management Development Institute of Singapore",
      "PSB Academy"
    ]
    
    for( let i = 0; i < schools.length; i++ ){
  
      const school = await makeSchool({
        name: schools[i],
      })

      const newSchool = new School(school)
    
      promises.push(newSchool.save())
    }
    return Promise.all(promises)

  })


}

module.exports = {
  populateSchools
}



