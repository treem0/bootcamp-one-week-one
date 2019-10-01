export const isYes = (userAnswer) => {
    if (userAnswer === 'yes' || userAnswer === 'y' || userAnswer === 'Yes' || userAnswer === 'Y') return true;
    return false;
};