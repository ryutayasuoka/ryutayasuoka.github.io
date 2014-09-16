$(document).ready(function(){

    var date_obj = {
        year : "",
        month : "",
        date : "",
        start_day : "", //0:Sun 6:Sat
        last_date : ""
    };

    //init
    initialize();

    //event
    $('table.calendar td').not('.empty').click(function(){
        date_obj['date'] = $(this).children('p.date').html();
        var _date_string = generateDateString(date_obj.year,date_obj.month,date_obj.date);
        $('input[name=check-in]').val(_date_string);
        settingCheckOut();
    });
    $('input[name=stay-num]').change(function(){
        settingCheckOut();
    });
    $('.calendar-select select').change(function(){
        var _value = $(this).val().split("-");
        date_obj = {
            year : _value[0],
            month : _value[1],
            date : "1",
            start_day : new Date(_value[0],parseInt(_value[1])-1,1).getDay(),
            last_date : new Date(_value[0],parseInt(_value[1]),0).getDate().toString()
        }
        generateCalendar();
        $('table.calendar td').not('.empty').click(function(){
            date_obj['date'] = $(this).children('p.date').html();
            var _date_string = generateDateString(date_obj.year,date_obj.month,date_obj.date);
            $('input[name=check-in]').val(_date_string);
            settingCheckOut();
        });
    });
    $('.prev').click(function(){
        if(date_obj.month == "1"){
            var _prev_date = new Date(parseInt(date_obj.year)-1,11,1);
            date_obj = {
                year : _prev_date.getFullYear().toString(),
                month : "12",
                date : "1",
                start_day : new Date(_prev_date.getFullYear(),11,1).getDay(),
                last_date : new Date(_prev_date.getFullYear(), 12,0).getDate().toString()
            }
        }else{
            var _prev_date = new Date(date_obj.year,parseInt(date_obj.month)-2,1);
            date_obj = {
                year : _prev_date.getFullYear().toString(),
                month : (_prev_date.getMonth()+1).toString(),
                date : "1",
                start_day : _prev_date.getDay(),
                last_date : new Date(_prev_date.getFullYear(), _prev_date.getMonth()+1,0).getDate().toString()
            };
        }
        generateCalendar();
        $('table.calendar td').not('.empty').click(function(){
            date_obj['date'] = $(this).children('p.date').html();
            var _date_string = generateDateString(date_obj.year,date_obj.month,date_obj.date);
            $('input[name=check-in]').val(_date_string);
            settingCheckOut();
        });
    });
    $('.next').click(function(){
        if(date_obj.month == "12"){
            var _next_date = new Date(parseInt(date_obj.year)+1,0,1);
            date_obj = {
                year : _next_date.getFullYear().toString(),
                month : "1",
                date : "1",
                start_day : new Date(_next_date.getFullYear(),0,1).getDay(),
                last_date : new Date(_next_date.getFullYear(), 1,0).getDate().toString()
            }
        }else{
            var _next_date = new Date(date_obj.year,date_obj.month,1);
            date_obj = {
                year : _next_date.getFullYear().toString(),
                month : (_next_date.getMonth()+1).toString(),
                date : "1",
                start_day : _next_date.getDay(),
                last_date : new Date(_next_date.getFullYear(), _next_date.getMonth()+1,0).getDate().toString()
            };
        }
        generateCalendar();
        $('table.calendar td').not('.empty').click(function(){
            date_obj['date'] = $(this).children('p.date').html();
            var _date_string = generateDateString(date_obj.year,date_obj.month,date_obj.date);
            $('input[name=check-in]').val(_date_string);
            settingCheckOut();
        });
    });

    //function
    function generateBody(){

        var _string = "";
        var _td_count = 0;
        var _date = 1;

        _string += '<tr class="body">';
        for(i=0; i<date_obj.start_day; i++){
            _string += '<td class="empty"></td>';
            _td_count++;
        }
        for(i=date_obj.start_day; i<=6-date_obj.start_day; i++){
            _string += '<td>' +
            '<p class="date">'+_date+'</p>'+
            '<p class="is-available">○</p>'+
            '<p class="price">30000円</p>'+
            '</td>';
            _date++;
            _td_count++;
        }
        if((_td_count % 7) == 0){
            _string += '</tr>';
        }
        for(i=_date;i<=date_obj.last_date;i++){
            if((_td_count % 7) == 0){
                _string += '<tr class="body">';
            }
            _string += '<td>' +
            '<p class="date">'+i+'</p>'+
            '<p class="is-available">○</p>'+
            '<p class="price">30000円</p>'+
            '</td>';
            if((_td_count % 7) == 6){
                _string += '</tr>';
            }
            _td_count++;
        }
        for(i=_td_count % 7;i!=0 && i <= 6;i++){
            _string += '<td class="empty"></td>';
            _td_count++;
        }
        if((_td_count % 7) != 6){
            _string += '</tr>';
        }
        return _string;
    }

    function generateDateString(select_year,select_month,select_date){
        if(select_month.length == 1){
            select_month = "0"+select_month;
        }
        if(select_date.length == 1){
            select_date = "0"+select_date;
        }
        return select_year+"-"+select_month+"-"+select_date;
    }

    function settingCheckOut(){
        var _stay_num = $('input[name=stay-num]').val();
        var _stay_date_string = $('input[name=check-in]').val();
        var _stay_datetime = new Date(_stay_date_string).getTime();
        var _addSec = _stay_num * 86400000;//日数 * 1日のミリ秒数
        var _targetSec = _stay_datetime + _addSec;
        var _stay_date = new Date(_targetSec);
        _stay_date_string = generateDateString(
            _stay_date.getFullYear().toString(),
            (_stay_date.getMonth()+1).toString(),
            _stay_date.getDate().toString()
            );
        $('input[name=check-out]').val(_stay_date_string);
    }

    function generateCalendar(){

        //remove <tr class="body">.
        $('tr.body').remove();
        //generate body
        var table_string = generateBody();
        //add body
        $('tr.head').after(table_string);

        generateSelectBox();
    }

    function generateSelectBox(){
        var _dom_select = $('.calendar-select select');
        var _int_month = parseInt(date_obj.month);
        var _string = "";
        if(parseInt(date_obj.month) <= 5){
            for(i=0;i<6-_int_month;i++){
                _string += '<option value="'+(parseInt(date_obj.year)-1)+'-'+(_int_month+7+i)+'">'+(parseInt(date_obj.year)-1)+'年'+(_int_month+7+i)+'月'+'</option>';
            }
            for(i=1;i<_int_month;i++){
                _string += '<option value="'+date_obj.year+'-'+i+'">'+date_obj.year+'年'+i+'月'+'</option>';
            }
            _string += '<option value="'+date_obj.year+'-'+date_obj.month+'" selected>'+date_obj.year+'年'+date_obj.month+'月'+'</option>';
            for(i=1;i<6;i++){
                _string += '<option value="'+date_obj.year+'-'+(_int_month+i)+'">'+date_obj.year+'年'+(_int_month+i)+'月'+'</option>';
            }
        }else if(parseInt(date_obj.month) >= 8){
            for(i=1;i<6;i++){
                _string += '<option value="'+date_obj.year+'-'+(_int_month-6+i)+'">'+date_obj.year+'年'+(_int_month-6+i)+'月'+'</option>';
            }
            _string += '<option value="'+date_obj.year+'-'+date_obj.month+'" selected>'+date_obj.year+'年'+date_obj.month+'月'+'</option>';
            for(i=0;i<12-_int_month;i++){
                _string += '<option value="'+date_obj.year+'-'+(_int_month+1+i)+'">'+date_obj.year+'年'+(_int_month+1+i)+'月'+'</option>';
            }
            for(i=0;i<_int_month-7;i++){
                _string += '<option value="'+(parseInt(date_obj.year)+1)+'-'+(i+1)+'">'+(parseInt(date_obj.year)+1)+'年'+(i+1)+'月'+'</option>';
            }
        }else{
            for(i=1;i<6;i++){
                _string += '<option value="'+date_obj.year+'-'+(_int_month-6+i)+'">'+date_obj.year+'年'+(_int_month-6+i)+'月'+'</option>';
            }
            _string += '<option value="'+date_obj.year+'-'+date_obj.month+'" selected>'+date_obj.year+'年'+date_obj.month+'月'+'</option>';
            for(i=1;i<6;i++){
                _string += '<option value="'+date_obj.year+'-'+(_int_month+i)+'">'+date_obj.year+'年'+(_int_month+i)+'月'+'</option>';
            }        }
        _dom_select.children('option').remove();
        _dom_select.append(_string);
    }

    function initialize(){
        var _date = new Date(Date.now());

        date_obj = {
            year : _date.getFullYear().toString(),
            month : (_date.getMonth()+1).toString(),
            date : _date.getDate().toString(),
            start_day : new Date(_date.getFullYear(),_date.getMonth(),1).getDay(),
            last_date : new Date(_date.getFullYear(),_date.getMonth()+1,0).getDate().toString()
        };
        generateCalendar();
        var _date_string = generateDateString(
            date_obj.year,
            date_obj.month,
            date_obj.date
            );
        $('input[name=check-in]').val(_date_string);
        $('input[name=check-out]').val(_date_string);
    }
});