const n: number = 9;
function matrix(n: number) {
    let res = new Array(n).fill().map(() => new Array(n).fill("")) // создаем пустой массив массивов
    let i = 1;
    let startX = 0, endX = n - 1;       // ограничители координат для оси Х
    let startY = 0, endY = n - 1;       // ограничители координат для оси Y

    while(startX <= endX && startY <= endY) {
        // цикл для заполнения слева направо:
        for(let j=startX; j<=endX; j++) {
            res[startY][j] = i;
            i++;
        }
        startY++; //верхнюю строчку вычеркиваем
        
        // цикл для заполнения сверху вниз:
        for(let j=startY; j<=endY; j++) {
            res[j][endX] = i;
            i++;
        }
        endX--; //правый столбик вычеркиваем
        
        // цикл для заполнения справа налево:
        for(let j=endX; j>=startX; j--) {
        res[endY][j] = i;
        i++;
        }
        endY--; //нижнюю строчку вычеркиваем

        // цикл для заполнения снизу вверх:
        for(let j=endY; j>=startY; j--) {
            res[j][startX] = i;
            i++;
        }
        startX++; //правый столбик вычеркиваем




    }

    return res;
} 

console.log(matrix(n)); 