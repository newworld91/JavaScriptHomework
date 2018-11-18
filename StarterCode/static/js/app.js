// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var fbutton = d3.select('#filter-btn');
var dateinput = d3.select('#datetime');
dateinput.on("change",time);
function rendertemplate(){
tableData.forEach(function(newdata)
{
    var row = tbody.append("tr");
    Object.entries(newdata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
})
})
}


function time()
{
    var inputtext = document.getElementById('datetime').value;
    var datafilter = tableData.filter(function(newdata)
    {
        return newdata.datetime === inputtext;     
    })
    datafilter.forEach(function(filterdata){
    var row = tbody.append("tr");
    Object.entries(filterdata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
})
})
    
}

