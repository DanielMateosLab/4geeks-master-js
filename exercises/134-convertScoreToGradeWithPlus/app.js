function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return "INVALID SCORE" 
    if (score >= 90) return "A"
    if (score >= 80) return "B"
    if (score >= 70) return "C"
    if (score >= 60) return "D"
    return "F"
}

function convertScoreToGradeWithPlusAndMinus(score) {
    let grade = convertScoreToGrade(score)

    if (grade !== "INVALID SCORE" && grade !== "F") {
        const firstDigit = +score.toString().split("").pop()
        console.log(firstDigit)

        if (firstDigit <= 2) grade = grade.concat("-")
        if (firstDigit >= 8) grade = grade.concat("+")
    }

    return grade
}
