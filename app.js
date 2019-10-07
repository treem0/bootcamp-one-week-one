import { isYes } from './is-yes.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    alert('Welcome to my quiz!');
    const myConfirmation = confirm('do you want to take my quiz?');
    console.log(myConfirmation);
    const userName = prompt('What is your name?');
    const userAnswer = prompt(userName + ', am I 28 years old? (yes/no)');
    const lowercaseUserAnswer = userAnswer.toLowerCase();
    const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();
    const userIsCorrect = isYes(trimmedLowercaseUserAnswer);
    const userAnswer1 = prompt(userName + ', have I been to Ireland? (yes/no)');
    const lowercaseUserAnswer1 = userAnswer1.toLowerCase();
    const trimmedLowercaseUserAnswer1 = lowercaseUserAnswer1.trim();
    const userIsCorrect1 = isYes(trimmedLowercaseUserAnswer1);

    const userAnswer2 = prompt(userName + ', do I like to snowboard? (yes/no)');
    const lowercaseUserAnswer2 = userAnswer2.toLowerCase();
    const trimmedLowercaseUserAnswer2 = lowercaseUserAnswer2.trim();
    const userIsCorrect2 = isYes(trimmedLowercaseUserAnswer2);

    alert('You have completed the quiz!');

    if (userIsCorrect && userIsCorrect1 && userIsCorrect2) {
        document.getElementById('results-go-here').textContent = 'Okay ' + userName + ' you got 3 out of three!';
    } else if (userIsCorrect && userIsCorrect1 && !userIsCorrect2 || userIsCorrect && !userIsCorrect1 && userIsCorrect2 || !userIsCorrect && userIsCorrect1 && userIsCorrect2) {
        document.getElementById('results-go-here').textContent = 'Okay ' + userName + ' you got 2 out of three!';
    } else if (userIsCorrect && !userIsCorrect1 && !userIsCorrect2 || !userIsCorrect && userIsCorrect1 && !userIsCorrect2 || !userIsCorrect && !userIsCorrect1 && userIsCorrect2) {
        document.getElementById('results-go-here').textContent = 'Okay ' + userName + ' you got 1 out of three!';
    } else if (!userIsCorrect && !userIsCorrect1 && !userIsCorrect2) {
        document.getElementById('results-go-here').textContent = 'Okay ' + userName + ' you got 0 out of three!';
    }  

   
};
