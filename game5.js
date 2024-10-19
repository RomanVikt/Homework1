function game5() {

    let userSelection = prompt('Ваш выбор(камень,ножницы,бумага):'); // Выбор игрока

    let num = Math.floor(Math.random() * 3);
    let choice = ['камень', 'ножницы', 'бумага'];
    let pcSelection = choice[num] // Выбор компьютера

    let upUserSelection = userSelection.toUpperCase(); // Сделал буквы по больше для 
    let upPcSelection = pcSelection.toUpperCase();   //   удобства просмотра

    alert(`Ваш выбор: ${upUserSelection} <> Выбор компьютера: ${upPcSelection}`); 

        if (userSelection === pcSelection) {
            alert('Ничья!');}
            else if (
                (userSelection === 'камень' && pcSelection === 'ножницы') ||
                (userSelection === 'ножницы' && pcSelection === 'бумага') ||
                (userSelection === 'бумага' && pcSelection === 'камень')) {
                    alert('Вы победили!😁');} else {
                        alert('Компьютер победил!');}
}
