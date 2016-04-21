$.post("/portal/controllers/apis/api/testAPI.jag", function (dataSet) {

var data=JSON.parse(dataSet);
dataBind(data);
});

function dataBind(data)
{
/***X-axis Labels**/
var xLabel=[];
for(var i in data)
{
xLabel[i]=data[i].monthName;
}
/***Y-Axis Labels ***/
var yPoint=[];
for(var i in data)
{
yPoint[i]=data[i].pageViewCount;
}
/***Bind Data With The Graph ***/
  var points = {
        labels: xLabel,
        datasets: [
            {

                label: "Blogger Audience",
                fillColor: "rgba(255,204,255,0.2)",
                strokeColor: "rgba(88,24,96,1)",
                pointColor: "rgba(88,24,96,1)",
                pointStrokeColor: "#ffccff",
                pointHighlightFill: "#ffccff",
                pointHighlightStroke: "rgba(88,24,96,1)",
                data: yPoint
            }]
};
 $('#chartContainer').append('<canvas id="canvas"></canvas>');
    var ctx = document.getElementById("canvas").getContext("2d");

    var lineChart = new Chart(ctx).Line(points, {
        responsive: true,
        scaleLabel: "    <%=value%>",
        datasetFill: false,
        legendBlockSize: 10,
        legend: true,
        graphMin: 0,
        yAxisMinimumInterval: 1,
        yAxisLabel: "Page View Count",
        graphTitle: "Blogger Audience",
        graphTitleFontFamily: "'Arial'",
        graphTitleFontSize: 14,
        graphTitleFontStyle: "bold",
        graphTitleFontColor: "#666",
        annotateDisplay: true,
    });

}
