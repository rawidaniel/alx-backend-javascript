const fs = require('fs');
const countStudents = function (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const eachData = data
      .split('\n')
      .slice(1)
      .filter((ele) => Boolean(ele) === true)
      .map((ele) => ele.replace('\r', ''));
    let [header] = data
      .split('\n')
      .slice(0, 1)
      .filter((ele) => Boolean(ele) === true)
      .map((ele) => ele.replace('\r', ''));
    header = header.split(',');
    const indxField = header.indexOf('field');
    const indxFirstName = header.indexOf('firstname');
    const filed = {};
    const firstName = {};
    eachData.forEach((ele) => {
      const data = ele.split(',');
      if (!filed[data[indxField]]) {
        filed[data[indxField]] = 1;
      } else {
        filed[data[indxField]] += 1;
      }
    });
    Object.keys(filed).forEach((fd) => {
      eachData.forEach((ele) => {
        firstName[fd] ||= '';
        firstName[fd] += ele.endsWith(fd)
          ? ele.split(',')[indxFirstName] + ' '
          : '';
      });
    });
    const totalNumber = Object.values(filed).reduce(
      (acc, num) => (acc += num),
      0
    );

    console.log(`Number of students: ${totalNumber}`);
    for (const [key, value] of Object.entries(firstName)) {
      const listName = value.split(' ').slice(0, -1);
      console.log(
        `Number of students in ${key}: ${
          listName.length
        }. List: ${listName.join(' ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
