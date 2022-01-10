var fAssignments = parseFloat(document.getElementById("assignments").value)
var fGroupProjects = parseFloat(document.getElementById("group_projects").value)
var fQuizzes = parseFloat(document.getElementById("quizzes").value)
var fExams = parseFloat(document.getElementById("exams").value)
var fIntex = parseFloat(document.getElementById("intex").value)

var fFinalGrade = (fAssignments * 0.55) + (fGroupProjects * 0.05) + (fQuizzes * 0.1) + (fExams * 0.2) + (fIntex * 0.1)

var sLetterGrade;

if (fFinalGrade >= 94) {
	sLetterGrade = "A"
}
else if (fFinalGrade >= 90) {
	sLetterGrade = "A-"
}
else if (fFinalGrade >= 87) {
	sLetterGrade = "B+"
}
else if (fFinalGrade >= 84) {
	sLetterGrade = "B"
}
else if (fFinalGrade >= 80) {
	sLetterGrade = "B-"
}
else if (fFinalGrade >= 77) {
	sLetterGrade = "C+"
}
else if (fFinalGrade >= 74) {
	sLetterGrade = "C"
}
else if (fFinalGrade >= 70) {
	sLetterGrade = "C-"
}
else if (fFinalGrade >= 67) {
	sLetterGrade = "D+"
}
else if (fFinalGrade >= 64) {
	sLetterGrade = "D"
}
else if (fFinalGrade >= 60) {
	sLetterGrade = "D-"
}
else {
	sLetterGrade = "E"
} 


document.getElementById("calculate").addEventListener("click", function () {
	alert("Your final grade is " + fFinalGrade + "% which is a(n) " + sLetterGrade + ".");
}) 

/* document.getElementById("calculate").addEventListener("click", function () {
	alert("It Works!");
}) */