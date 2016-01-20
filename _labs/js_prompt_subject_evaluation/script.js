showTableMarks('алгебра', 'биология', 'математика', 'химия');

function showTableMarks() {
    var i = 0, active = '', passed = 0, marks = [], passPoint = 60,
        subj = [].slice.call(arguments, 0),
        table = document.createElement('table'),
        msg = {
            'inputMark': 'Сколько баллов вы набрали по предмету: ',
            'errorMark': 'Не врите. честно напишите, сколько вы получили баллов по предмету. ',
            'tryAgain': 'А теперь попробуйте ещё раз! '
        },
        len = subj.length;

    while(i < len) {
        marks[i] = askMark(msg, subj[i]);
        i++;
    }

    document.body.appendChild(table);
    table.innerHTML = '<th>#</th><th>Предмет</th><th>Оценка</th>';

    for (i = 0; i < len; i++) {
        if (marks[i] > passPoint) {
            passed++;
            active = ' class="active"';
        }
        table.innerHTML += '<tr ' + active + '><td>' + (i+1) + '</td><td>' + subj[i] + '</td><td>' + marks[i] + '</td></tr>';
        active = '';
    }

    table.innerHTML += ('<tr class="summary"><td colspan="3">Предметов сдано: ' + passed + ', не сдано: ' + (len - passed) + '</td></tr>');
}

function askMark(msg, subject)  {
    var mark = null, flag = true;
    while(flag) {
        mark = prompt(msg.inputMark + subject + '?').trim();
        switch (true) {
            case (mark == 'default' || mark === null):
                return 0;
            case (inRange(mark, 0, 100)):
                return +mark;
            default:
                alert(msg.errorMark + msg.tryAgain);
        }
    }
}

function isNum(num) {
    return (num * 0 === 0);
}

function inRange(num, from, to) {
    return (isNum(num) && from <= num && num <= to);
}