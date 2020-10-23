const Mod = require('../../../dist/src/models/mod').default

const nusModsData = require('../nusModules.json') 

function populateMods(){

  return Mod.remove({})
  .then(() => {
    console.log("Populating modules")
    return Promise.all(
      nusModsData.map( (mod) => {
    
        const newMod = new Mod({
          code: mod.ModuleCode,
          title: mod.ModuleTitle,
          acadYear: "19/20",
          semester: mod.Semesters,
          description: mod.description,
          credit: mod.Credit,
          workload: mod.Workload
        })
    
        return newMod.save();
      })
    )
  })
} 

module.exports = {
  populateMods
}