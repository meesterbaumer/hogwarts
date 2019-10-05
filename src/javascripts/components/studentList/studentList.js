import utilities from '../../helpers/utilities';
import './studentList.scss';
import studentData from '../../helpers/data/studentData';

const createStudentList = () => {
  const students = studentData.getStudents();
  let domString = '<ul class="student-list">';
  for (let i = 0; i < students.length; i += 1) {
    domString += `<h2>${students[i].name}</h2>`;
  }
  domString += 'students';
  domString += '</ul>';

  utilities.printToDom('student-container', domString);
};

export default { createStudentList };
