var months = {1: "January", 2: "February", 3: "March",4: "April",5: "May",6: "June",7: "July",8: "August",9: "September",10: "October",11: "November",12: "December"};
var date = new Date();
$(document).ready(function() {
    //init
    $today = date.getDate();
    $thismonth = date.getMonth();
    $thisyear = date.getFullYear();
    $('#currentyear').html(date.getFullYear());
    $('#currentmonth').html(months[date.getMonth() + 1]);
    days_generator(date.getMonth() + 1, date.getFullYear());
    if(date.getFullYear() == $thisyear && months[date.getMonth() + 1] == months[$thismonth + 1])
        $("#day" + date.getDate().toString()).addClass('bg-info');
    else
        $("#day" + date.getDate().toString()).removeClass('bg-info');
    operate();

    //Years
    $("#nextyear").click(function () {
        date.setFullYear(date.getFullYear() + 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentyear").html(date.getFullYear());
        if(date.getFullYear() == $thisyear && months[date.getMonth() + 1] == months[$thismonth + 1])
            $("#day" + date.getDate().toString()).addClass('bg-info');
        else
            $("#day" + date.getDate().toString()).removeClass('bg-info');
        operate();

    });
    $("#backyear").click(function () {
        date.setFullYear(date.getFullYear() - 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentyear").html(date.getFullYear());
        if(date.getFullYear() == $thisyear && months[date.getMonth() + 1] == months[$thismonth + 1])
            $("#day" + date.getDate().toString()).addClass('bg-info');
        else
            $("#day" + date.getDate().toString()).removeClass('bg-info');
        operate();

    });

    //Months
    $("#nextmonth").click(function () {
        date.setMonth(date.getMonth() + 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentmonth").html(months[date.getMonth() + 1]);
        $("#currentyear").html(date.getFullYear());
        if(date.getFullYear() == $thisyear && months[date.getMonth() + 1] == months[$thismonth + 1])
            $("#day" + date.getDate().toString()).addClass('bg-info');
        else
            $("#day" + date.getDate().toString()).removeClass('bg-info');
        operate();
    });
    $("#backmonth").click(function () {
        date.setMonth(date.getMonth() - 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentmonth").html(months[date.getMonth() + 1]);
        $("#currentyear").html(date.getFullYear());
        if(date.getFullYear() == $thisyear && months[date.getMonth() + 1] == months[$thismonth + 1])
            $("#day" + date.getDate().toString()).addClass('bg-info');
        else
            $("#day" + date.getDate().toString()).removeClass('bg-info');
        operate();
    });

});

function days_generator($month, $year)
{
    var week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    switch ($month) {
        case 1:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);

            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }

            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 2:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 3:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 4:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 5:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 6:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 7:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 8:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 9:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 10:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 11:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        case 12:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
        default:
            var date2 = new Date();
            date2.setFullYear($year);
            date2.setMonth($month - 1);
            date2.setDate(1);
            for (i = 0, j = date2.getDay(); i <= 6; i++, j++) {
                if (j > 6)
                    j = 0;
                $("#dayname" + (i + 1).toString()).html(week_days[j]);
            }
            $("#day1").html(1);
            date2.setDate(date2.getDate() + 1);
            i = 2;
            while (date2.getDate() != 1) {
                $("#day" + i.toString()).html(date2.getDate());
                date2.setDate(date2.getDate() + 1);
                i += 1;
            }
            while (i != 36) {
                $("#day" + i.toString()).html("");
                i++;
            }
            break;
    }
}

function operate(){
    $('td[id^="day"]').each(function(i, value) {
        $("#monthresult").html($("#currentmonth").text());
        $("#yearresult").html($("#currentyear").text());
        if($.isNumeric(value.innerHTML))
        {
            $(this).hover(function () {
                if ($.isNumeric($(this).text()))
                    $(this).addClass('active');
            }, function() {
                $(this).removeClass("active");
            });
            $(this).click(function () {
                if ($.isNumeric($(this).text())){
                    $(this).addClass('active');
                    $day = value.innerHTML;
                    $month = $("#currentmonth").text();
                    $year = $("#currentyear").text();
                    unactiveOthers($day);
                    //Calling get request
                    getajax($day, $month, $year);
                }
            });
        }

    });
}

function unactiveOthers($except)
{
    $('td[id^="day"]').each(function(i, value) {
        if($.isNumeric(value.innerHTML) && value.innerHTML != $except)
        {
            $(this).removeClass("active");
        }
    });
}