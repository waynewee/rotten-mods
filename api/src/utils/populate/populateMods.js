const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Mod = require('../../../dist/src/models/Mod').default

const nusModsData = require('../nusModules.json') 

function populateMods(){
  return Promise.all(
    nusModsData.map( (mod) => {
  
      const workload = mod.Workload.split("-").reduce((acc, curr) => acc += parseInt(curr),0) 
  
      const newMod = new Mod({
        code: mod.ModuleCode,
        title: mod.ModuleTitle,
        acadYear: mod.AcadYear,
        semester: mod.SemesterName,
        faculty: mod.Faculty,
        department: mod.Department,
        description: mod.description,
        crossModule: mod.CrossModule,
        credit: mod.ModuleCredit,
        workload: isNaN(workload)?undefined:workload
      })
  
      return newMod.save();
    })
  )
} 

module.exports = {
  populateMods
}