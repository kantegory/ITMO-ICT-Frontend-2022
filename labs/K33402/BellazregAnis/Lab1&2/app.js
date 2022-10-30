$(function () {

    let numValueX = undefined
    let numValueY = undefined
    let numValueR = undefined

    function isNumber(s) {
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





