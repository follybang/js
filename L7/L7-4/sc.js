const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

const getMessagesForBestStudents = (allStudList, studForRetake) =>
  allStudList.filter(name => !studForRetake.includes(name)).map(name => 'Good job, ' + name);

console.log(getMessagesForBestStudents(allStud, retakeStud));
