
$(function () {

    let numValueX = undefined
    let numValueY = undefined
    let numValueR = undefined

    function isNumber(s) {

window.onload = function() {
    console.log('sadasdsa');

    let numValueX = undefined;
    let numValueY= undefined;
    let numValueR = undefined;

    let x_btns = document.querySelectorAll('.x-buttons input');
    let r_labels = document.querySelectorAll('.rbox-label');
    let sr_btns = document.querySelectorAll('.sub-res-buttons input');

    function isNumber(s){

        if (s === 0) return true;
        return (!isNaN(parseFloat(s)) && s);
    }

    function checkX() {

        if (numValueX === undefined) {
            $('.x-buttons input').addClass('button-error')
            $('.x-buttons input').removeClass('button-clicked')
            return false;
        } else {
            $('.x-buttons input').removeClass('button-error')

        if (numValueX === undefined){
            x_btns.forEach(element => element.classList.add('button-error'));
            x_btns.forEach(element => element.classList.remove('button-clicked'));
            return false;
        } else {
            x_btns.forEach(element => element.classList.remove('button-error'));

            return true;
        }
    }


    $('.x-buttons input').click(function () {
        numValueX = $(this).val();
        $('.x-buttons input').removeClass('button-clicked')
        $(this).addClass('button-clicked')
    });

    function checkY() {
        const Y_MIN = -5;
        const Y_MAX = 5;
        let value = $('#y-textinput').val();
        let fieldValueY = value.trim();
        fieldValueY = value.replace(',', '.');
        numValueY = parseFloat(fieldValueY)
        if (numValueY === +fieldValueY && isNumber(numValueY)) {
            if (numValueY > Y_MIN && numValueY < Y_MAX) {
                $('#y-textinput').removeClass('text-error')
                return true;
            } else {
                $('#y-textinput').addClass('text-error')
                return false;
            }
        } else {
            $('#y-textinput').addClass('text-error')

    x_btns.forEach(element => element.addEventListener('click', function clickX(event) {
        numValueX = event.srcElement.value;
        x_btns.forEach(element => element.classList.remove('button-clicked'));
        event.srcElement.classList.add('button-clicked');
    }));

    function checkY(){
        const Y_MIN = -5;
        const Y_MAX = 5;
        let value = document.getElementById('y-textinput').value;
        let fieldValueY;
        fieldValueY = value.replace(',', '.');
        numValueY = parseFloat(fieldValueY);
        if (numValueY === +fieldValueY && isNumber(numValueY)) {
            if (numValueY>Y_MIN && numValueY<Y_MAX){
                document.getElementById('y-textinput').classList.remove('text-error');
                return true;
            } else{
                document.getElementById('y-textinput').classList.add('text-error');
                return false;
            }
        } else{
            document.getElementById('y-textinput').classList.add('text-error');

            return false;
        }
    }



    function checkR() {


        if ($('.r-radio').is(':checked')) {
            if ($('#1').is(':checked')) numValueR = $('#1').val();
            if ($('#2').is(':checked')) numValueR = $('#2').val();
            if ($('#3').is(':checked')) numValueR = $('#3').val();
            if ($('#4').is(':checked')) numValueR = $('#4').val();
            if ($('#5').is(':checked')) numValueR = $('#5').val();
            $('.rbox-label').removeClass('radio-error')
            return true;
        } else {
            $('.rbox-label').addClass('radio-error')

    function checkR(){
        if (document.getElementById('1').checked || document.getElementById('2').checked || document.getElementById('3').checked ||
            document.getElementById('4').checked || document.getElementById('5').checked){
            if (document.getElementById('1').checked) numValueR= document.getElementById('1').value;
            if (document.getElementById('2').checked) numValueR = document.getElementById('2').value;
            if (document.getElementById('3').checked) numValueR = document.getElementById('3').value;
            if (document.getElementById('4').checked) numValueR = document.getElementById('4').value;
            if (document.getElementById('5').checked) numValueR = document.getElementById('5').value;
            r_labels.forEach(element => element.classList.remove('radio-error'));
            return true;
        } else {
            r_labels.forEach(element => element.classList.add('radio-error'));

            return false;
        }

    }


    $('#input-form').on('submit', function (event) {
        event.preventDefault();
        if (!(checkX() & checkY() & checkR())) return;
        $.ajax({
            url: 'main.php',
            type: 'POST',
            dataType: 'json',
            data: {
                x: numValueX,
                y: numValueY,
                r: numValueR,
                time: new Date().getTimezoneOffset()
            },
            beforeSend: function () {
                $('.sub-res-buttons input').attr('disabled', 'disabled');
            },
            success: function (data) {
                $('.sub-res-buttons input').attr('disabled', false);
                if (data.isValid) {
                    let newRow = '<tr>';
                    newRow += '<td>' + data.x + '</td>>';
                    newRow += '<td>' + data.y + '</td>>';
                    newRow += '<td>' + data.r + '</td>>';
                    newRow += '<td>' + data.currentTime + '</td>>';
                    newRow += '<td>' + data.execTime + '</td>>';
                    newRow += '<td>' + data.result + '</td>>';
                    $('#result-content-table').append(newRow);
                }
            }
        });
    });

    $('#input-form').on('reset', function (event) {
        numValueX = undefined;
        numValueY = undefined;
        numValueR = undefined;
        $('#y-textinput').removeClass('text-error')
        $('.x-buttons input').removeClass('button-error')
        $('.rbox-label').removeClass('radio-error')
        $('.x-buttons input').removeClass('button-clicked')
    });


});






    document.getElementById('input-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if(!(checkX() && checkY() && checkR())) return;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'main.php');
        xhr.responseType = 'json';
        let body = `{\"x\":${numValueX},\"y\":${numValueY},\"r\":${numValueR},\"time\":${new Date().getTimezoneOffset()}}`;
        xhr.send(body);
        console.log(body)

        xhr.onload = () => {
            if (xhr.status === 200) {
                let data = xhr.response;
                if (data.isValid) {
                    let table = document.getElementById('result-content-table');
                    let row = table.insertRow();
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    let cell6 = row.insertCell(5);
                    cell1.innerHTML = data.x;
                    cell2.innerHTML = data.y;
                    cell3.innerHTML = data.r;
                    cell4.innerHTML = data.currentTime;
                    cell5.innerHTML = data.execTime;
                    cell6.innerHTML = data.result;
                }
                }
            }
    });

    document.getElementById('input-form').addEventListener('reset', function(event){
        numValueX = undefined;
        numValueY = undefined;
        numValueR = undefined;
        document.getElementById('y-textinput').classList.remove('text-error');
        x_btns.forEach(element => element.classList.remove('button-error'));
        x_btns.forEach(element => element.classList.remove('button-clicked'));
        r_labels.forEach(element => element.classList.remove('radio-error'));
    });
}

