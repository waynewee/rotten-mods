const Mod = require('../../dist/src/models/mod').default

const nusModsData = require('../../nusModules.json') 

function populateMods(){

  return Mod.remove({})
  .then(() => {
    console.log("Populating modules")
    return Promise.all(
      nusModsData.map( (mod) => {
    
        const newMod = new Mod({
          code: mod.moduleCode,
          title: mod.title,
          acadYear: "19/20",
          semester: mod.semesterData? mod.semesterData.map( s => s.semester ) : [],
          description: mod.description,
          credit: mod.moduleCredit,
          workload: mod.workload && Array.isArray(mod.workload) ? mod.workload.reduce((acc, curr) =>  acc + curr , 0): undefined
        })
    
        return newMod.save();
      })
    )
  })
} 

module.exports = {
  populateMods
}