
document.addEventListener("DOMContentLoaded", () => {
//arithmetic calculator
document.getElementById('arithmetic-form').addEventListener('submit',function(event){
    event.preventDefault();
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    const  operator = document.querySelector('input[name ="operator"]:checked').value;

    let result;
    if(operator ==="/" && number2==0){
        alert("not divisible by zero");
        return;
    }

    switch(operator){
        case "+" : result = number1 + number2; break;
        case "-" : result = number1-number2 ; break;
        case "*" : result = number1*number2 ; break;
        case "/" : result = number1/number2; break;

    }
    alert("Result : "+ result);
});
   

//caclulating the factorial of number 
document.getElementById("factorial-form").addEventListener("submit",function(event){
    event.preventDefault();
    const num = parseInt(document.getElementById("factorial-input").value);
    let factorial = 1;
    for(let i =num; i>1;i--){
        factorial*= i;
    }
    alert(`Factorial of ${num} is: ${factorial}`);
});



//calculating fibonacci 
document.getElementById("fibonacci-form").addEventListener('submit',function(event){
    event.preventDefault();
    const n= parseInt(document.getElementById('fibonacci-input').value);
    function fibonacci(num){
        if(num<=1) return num;
        return fibonacci(num-1) + fibonacci(num-2);
    }
    alert(`Fibonacci(${n}) is: ${fibonacci(n)}`);
});

//calculationg the max minimun and range
document.getElementById("min-max-form").addEventListener("submit",function(event){
    event.preventDefault();
    const nums = [
        parseFloat(document.getElementById("numA").value),
        parseFloat(document.getElementById("numB").value),
        parseFloat(document.getElementById("numC").value)
    ];
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const range = max - min;

    alert(`Max: ${max}, Min: ${min}, Range: ${range}`);
});

 // mailing list
 document.getElementById("mailing-form").addEventListener("submit",function(event){
    event.preventDefault();
    const fname = document.getElementById("first-name").value;
    const lname = document.getElementById("last-name").value;
    const mail = document.getElementById("email").value;
    const zipcode = document.getElementById("zip").value;

    const newEntry = `<p>${fname} ${lname} - ${mail} - ZIP: ${zipcode}</p>`;
    document.getElementById("mailing-list").innerHTML += newEntry;
     });
    });