const fs = require('fs');

module.exports.saveLocalData = function(file, key, dataArray) {
  let seconds = 20;
  setInterval(() => {
    let newData = JSON.stringify({ [key]: dataArray })
    fs.writeFile(file, newData, error => { if(error) throw error; });
  }, seconds * 1000)
};
