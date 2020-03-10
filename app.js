const start = Number(prompt("Enter the starting integer"));
const end = Number(prompt("Enter the ending integer"));
const step = Number(prompt("Enter the step"));


function addEntry(start, end, step) {
    var arr = [];
  /*  if (step === 0) {
        console.log("Invalid integer input, please reload and try again");
    }*/
    if (end < start) {
        step = -step;
    }
    /*if (typeof start == "string") {
        throw TypeError("Invalid integer input, please reload and try again")
    }*/
        while (step > 0 ? end >= start : end <= start) {
            arr.push(start);
            start += step;
    }
    return arr;
}

function sumArray(arr) {
    console.log(
        [].reduce((a, b) => a + b)
    );
}





const outputDiv = document.getElementById('output')
outputDiv.innerHTML = addEntry(start, end, step)

const outputDiv2 = document.getElementById('output2')
outputDiv2.innerHTML = sumArray(arr)
