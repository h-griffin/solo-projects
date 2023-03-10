let weight = document.getElementById('weight');
let wUnit = document.getElementById('wUnit');
let age = document.getElementById('age');
let activityLVL = document.getElementById('activityLVL');
let breedSize = document.getElementById('breedSize');
let hAge = document.getElementById('hAge');
let hMCAL = document.getElementById('hMCAL');
let hProtein = document.getElementById('hProtein');
let hExercise = document.getElementById('hExercise');

let calResult = document.getElementById('calResult');

calResult.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the form from submitting

    // calculate the values and update the result section
    let weightValue = Number(weight.value);
    let wUnitValue = wUnit.value;
    let ageValue = age.value;
    let activityLVLValue = activityLVL.value;
    let breedSizeValue = breedSize.value;

    if (wUnitValue == 'pound') {
        weightValue = weightValue * 0.453592;
    }

    if (weightValue >= 45 && weightValue <= 1000) {
        weight.style.border = '2px solid #888';
    } else {
        weight.style.border = '2px solid red';
        alert('Weights under 100 Lbs (45 KG) or Over 2,200 Lbs (1000 KG) are not allowed');
        hAge.innerText = 'X';
        hExercise.innerText = 'Y';
        hMCAL.innerText = 'Z';
        hProtein.innerText = 'N%';
        return false;
    }

    let proteinNeeds = 0;

    age.style.border = '2px solid #888';
    activityLVL.style.border = '2px solid #888';

    if (ageValue === 'Yearling') {
        if (activityLVLValue === 'training') {
            age.style.border = '2px solid red';
            activityLVL.style.border = '2px solid red';
            alert('Yearlings are not recommended for training');
            hAge.innerText = 'X';
            hExercise.innerText = 'Y';
            hMCAL.innerText = 'Z';
            hProtein.innerText = 'N%';
            return false;
        } else if (breedSizeValue === 'small') {
            // YEARLING SMALL
            hMCAL.innerText = `${(weightValue * 0.055).toFixed(2)} - ${(weightValue * 0.063).toFixed(2)}`;
            proteinNeeds = 2.88;
        } else if (breedSizeValue === 'large') {
            // YEARLING LARGE
            hMCAL.innerText = `${(weightValue * 0.055).toFixed(2)} - ${(weightValue * 0.063).toFixed(2)}`;
            proteinNeeds = 2.88;
        } else {
            alert('Invalid Yearling breed size value');
            return false;
        }

        // update results for Yearling
        hExercise.innerText = 'not in training';
        hAge.innerText = ageValue;
        hProtein.innerText = `${(proteinNeeds * weightValue).toFixed(2)} g per day`;
        
    } else if (ageValue === '2 year old') {
        if (activityLVLValue === 'none') {
            // 2 YEAR OLD NOT IN TRAINING
            hExercise.innerText = 'not in training';
            hMCAL.innerText = `${(weightValue * 0.042).toFixed(2)}`;
            proteinNeeds = 1.8;
        } else if (activityLVLValue === 'training') {
            // 2 YEAR OLD IN TRAINING
            // Do nothing, 2 year olds can be in training
            hExercise.innerText = 'in training';
            hMCAL.innerText = `${(weightValue * 0.055).toFixed(2)}`;
            proteinNeeds = 2.3;
        } else {
            alert('Invalid 2 Year Old activity/training value');
            return false;
        }

        // update results for 2 Year Old
        hAge.innerText = ageValue;
        hProtein.innerText = `${(proteinNeeds * weightValue).toFixed(2)} g per day`;

        // ===> breed size for 2 year olds? 
    
    } else if (ageValue === '3 year old' || ageValue === '4 year old') {
        if (breedSizeValue === 'small') {
            // 3-4 YEAR OLD SMALL
            hMCAL.innerText = `${(weightValue * 0.033).toFixed(2)} - ${(weightValue * 0.042).toFixed(2)}`;
            let proteinNeedsLower = weightValue * 1.3;
            let proteinNeedsUpper = weightValue * 1.6;
            proteinNeeds = `${proteinNeedsLower.toFixed(2)} - ${proteinNeedsUpper.toFixed(2)}`;
        } else if (breedSizeValue === 'large'){
            // 3-4 YEAR OLD LARGE
            hMCAL.innerText = `${(weightValue * 0.033).toFixed(2)} - ${(weightValue * 0.042).toFixed(2)}`;
            let proteinNeedsLower = weightValue * 1.3;
            let proteinNeedsUpper = weightValue * 1.6;
            proteinNeeds = `${proteinNeedsLower.toFixed(2)} - ${proteinNeedsUpper.toFixed(2)}`;
        } else {
            alert('Invalid 3-4 Year Old breed size value');
            return false;
        }

        if (activityLVLValue === 'none') {
            // 3-4 YEAR OLD NOT IN TRAINING
            hExercise.innerText = 'not in training';
        } else if (activityLVLValue === 'training') {
            // 3-4 YEAR OLD IN TRAINING
            hExercise.innerText = 'in training';
            let proteinNeedsLower = weightValue * 1.3;
            let proteinNeedsUpper = weightValue * 1.6;
            proteinNeeds = `${proteinNeedsLower.toFixed(2)} - ${proteinNeedsUpper.toFixed(2)}`;
            if (breedSizeValue === 'small') {
                // 3-4 YEAR OLD IN TRAINING SMALL
                hMCAL.innerText = `${(weightValue * 0.055).toFixed(2)}`;
            } else if (breedSizeValue === 'large')  {
                // 3-4 YEAR OLD IN TRAINING LARGE
                hMCAL.innerText = `${(weightValue * 0.042).toFixed(2)}`;
            } else {
                alert('Invalid 3-4 Year Old Training breed size value');
                return false;
            }
        } else {
            alert('Invalid 3-4 Year Old activity/training value');
            return false;
        }

        // update results for 3-4 Year Old
        hAge.innerText = ageValue;
        hProtein.innerText = `${proteinNeeds} g per day`;
    
    } else {
        alert('Invalid age value');
        return false;
    }
});