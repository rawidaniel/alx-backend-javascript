export default function updateStudentGradeByCity(arr, city, newGrade) {
  return arr
    .filter((ele) => ele.location === city)
    .map((ele) => {
      for (const { studentId, grade } of newGrade) {
        if (studentId === ele.id) return { ...ele, grade };
        return { ...ele, grade: 'N/A' };
      }
    });
}
