var userInput;
var userName;
userInput = 5;
userInput = 'Ro';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Whoops, Something went wrong!', 500);
