var months = {1: "January", 2: "February", 3: "March",4: "April",5: "May",6: "June",7: "July",8: "August",9: "September",10: "October",11: "November",12: "December"};
var date = new Date();
$(document).ready(function() {
    //init
    $('#currentyear').html(date.getFullYear());
    $('#currentmonth').html(months[date.getMonth() + 1]);
    days_generator(date.getMonth() + 1, date.getFullYear());
    operate();

    //Years
    $("#nextyear").click(function () {
        date.setFullYear(date.getFullYear() + 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentyear").html(date.getFullYear());
        operate();
    });
    $("#backyear").click(function () {
        date.setFullYear(date.getFullYear() - 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentyear").html(date.getFullYear());
        operate();
    });

    //Months
    $("#nextmonth").click(function () {
        date.setMonth(date.getMonth() + 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentmonth").html(months[date.getMonth() + 1]);
        $("#currentyear").html(date.getFullYear());
        operate();
    });
    $("#backmonth").click(function () {
        date.setMonth(date.getMonth() - 1);
        days_generator(date.getMonth() + 1, date.getFullYear());
        $("#currentmonth").html(months[date.getMonth() + 1]);
        $("#currentyear").html(date.getFullYear());
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
					$(this).addClass('active');
					$("#dayresult").html(value.innerHTML);
					$day = value.innerHTML;
					$month = $("#currentmonth").text();
					$year = $("#currentyear").text();
                    //Calling get request
                    getajax($day,$month,$year);
				}, function() {
			    	$(this).removeClass("active");
			  	});
			  	}
			  	else{
			  		$(this).hover(function () {
					$(this).removeClass("active");
					});
			  	}
			});
    }
