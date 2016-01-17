function checkOp(op) {
    return (true && (op == '+' || op == '-' || op == '/' || op == '*'));
}
function checkNum(num) {
    return (num * 0 === 0);
}

function askOp(msg) {
    var op, ball8 = true;
    while (ball8) {
        op = prompt(msg.inputOp);
        ball8 = !checkOp(op);
        if (ball8) alert(msg.errorOp + msg.tryAgain);
        else if (+op === 0) alert(msg.zeroOpQ + msg.erroeNum);
    }
    return op;
}
function askNum(msg) {
    var num, ball8 = true;
    while (ball8) {
        num = prompt(msg.inputNum);
        ball8 = !checkNum(num);
        if (ball8) alert(msg.errorNum + msg.tryAgain);
    }
    return num;
}

function promptCalc() {
    var ops = null, expr = '', ball8 = true,
        msg = {
            'inputOp' : 'Введите оператор. ',
            'errorOp' : 'Можно вводить только один из операторов: *, +, -, /. ',
            'tryAgain' : 'Попробуйте ещё раз. ',
            'inputOpQ' : 'Сколько будет арифметических операций в вашем выражении? ',
            'inputNum' : 'Введите число. ',
            'errorNum' : 'Введите нормальное число. ',
            'zeroOpQ' : 'Вы не сможете построить вырежения без операторов! ',
            'expr' : 'Полученное выражение: ',
            'exprResult' : 'Результат вычисления: ',
            'restart' : 'Хотите пересчитать все по-новой? '
        };

    while (ball8) {
        ops = prompt(msg.inputOpQ);
        ball8 = !checkNum(ops);
        if (ball8) alert(msg.errorNum + msg.tryAgain);
        else if (+ops === 0) {
            alert(msg.zeroOpQ + msg.errorNum);
            ball8 = false;
        }
    }

    ops++;
    for (var i = 0; i < ops; i++) {
        expr += askNum(msg);
        if (i+1 < ops) expr += askOp(msg);
    }

    alert(msg.expr + expr);
    alert(msg.exprResult + eval(expr));

    if (confirm(msg.restart))
        promptCalc();
}

promptCalc();