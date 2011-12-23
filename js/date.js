function newYearIn()
{
    var days=" дней "
    var now = new Date();
    var newYear = new Date("Jan,01,2012,00:00:00");
    var totalRemains = (newYear.getTime()-now.getTime());
    if (totalRemains>1)
    {
        var RemainsSec=(parseInt(totalRemains/1000));
          var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));
        if (
            RemainsFullDays==2 ||
            RemainsFullDays==3 ||
            RemainsFullDays==4 ||
            RemainsFullDays==22 ||
            RemainsFullDays==23 ||
            RemainsFullDays==24 ||
            RemainsFullDays==32 ||
            RemainsFullDays==33 ||
            RemainsFullDays==34
            ) {
            days=" дня "
        }
        if (
            RemainsFullDays==1 ||
            RemainsFullDays==21 ||
            RemainsFullDays==31 
            ) {
            days=" день "
        }
          var secInLastDay=RemainsSec-RemainsFullDays*24*3600;
          var RemainsFullHours=(parseInt(secInLastDay/3600));
          if (RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};
          var secInLastHour=secInLastDay-RemainsFullHours*3600;
          var RemainsMinutes=(parseInt(secInLastHour/60));
          if (RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};
          var lastSec=secInLastHour-RemainsMinutes*60;
          if (lastSec<10){lastSec="0"+lastSec};
        document.getElementById('newyear').innerHTML = "<p style='font-size:22px;'>До Нового Года осталось: "+RemainsFullDays+days+RemainsFullHours+":"+RemainsMinutes+":"+lastSec+"</p>";
          setTimeout("newYearIn()",10);
    } 
      else {document.getElementById("newyear").innerHTML = "C НОВЫМ ГОДОМ !!!";}
}
newYearIn();