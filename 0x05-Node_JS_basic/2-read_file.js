const fs = require('fs');
const countStudents = function (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const eachData = data.split('\n').slice(1);
    const cs = eachData.filter((ele) => ele.includes('CS'));
    const swe = eachData.filter((ele) => ele.includes('SWE'));
    const listNameCs = cs.map((ele) => ele.split(',')[0]);
    const listNameswe = swe.map((ele) => ele.split(',')[0]);
    console.log(`Number of students: ${eachData.length}`);
    console.log(
      `Number of students in CS: ${cs.length}. List: ${listNameCs.join(', ')}`
    );
    console.log(
      `Number of students in CS: ${swe.length}. List: ${listNameswe.join(', ')}`
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
