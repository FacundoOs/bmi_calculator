const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(weighInput.value, heightInput.value)
    let displayResultsElements = `<h1> Your BMI value is: ${results}</h1>´
}