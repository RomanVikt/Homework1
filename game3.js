function game3() {
    let textUser = prompt("Введите текст");
    let textGame = textUser.split('').reverse().join('');
    alert(textGame);    
    }