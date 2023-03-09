console.log("This script is running");

const loopSteps = 10;
const loopStepMultiplier = 0.1;

async function GetAdvice()
{
    console.log("Button Clicked");

    const resultElement = await document.getElementById('result');
    
    resultElement.textContent = "Getting your advice...";

    let advice = ["", "", "", "", "", "", "", "", "", ""];

    for(let step = 0; step < loopSteps; step++)
    {
        advice[step] = await fetch("https://api.adviceslip.com/advice");
    }

    for(let step = 0; step < loopSteps; step++)
    {
        
        resultElement.textContent = advice[step].slip.advice;

        /*
        await setTimeout(() => {
            console.log(`loop step ${step}`);
            console.log(advice[step]);
        }, step * loopStepMultiplier * 1000);*/
    }
}