function computeBMI(height, heightUnits, weight, weightUnits){
    if (heightUnits == 'inches') height = height / 0.393700787; //convert height from inches to cm
    if (weightUnits == 'lb') weight = weight / 2.20462;  //convert weight in kilograms
    let bmi = weight / Math.pow(height / 100, 2)
    let result = "";
    if (bmi < 18.5) result = "Underweight"
    else if (bmi <= 25) result = "Normal"
    else if (bmi <= 30) result = "Overweight"
    else result = "Obese"
    return [bmi.toFixed(2), result]
}

function recomputeBmi(){
    let heightElement = document.getElementById("height");
    let weightElement = document.getElementById("weight");
    if (!heightElement.value) return
    else if (!weightElement.value) return
    else {
        let height = heightElement.value;
        let weight = weightElement.value;
        let heightUnits = document.querySelector('input[name="heightUnits"]:checked').value;
        let weightUnits = document.querySelector('input[name="weightUnits"]:checked').value;
        let [bmi, result] = computeBMI(height, heightUnits, weight, weightUnits);
        let e = document.getElementById("bmiValue");
        let r = document.getElementById("bmiResult");
        e.innerHTML = bmi;
        e.className = result.toLowerCase();
        r.innerHTML = result;
        r.className = result.toLowerCase();
    }
}

function heightChanged() {recomputeBmi()}

function weightChanged() {recomputeBmi();}

function heightUnitsChanged() {recomputeBmi();}

function weightUnitsChanged() {recomputeBmi();}
