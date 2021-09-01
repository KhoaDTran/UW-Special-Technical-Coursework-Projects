'use strict';

/* global CanvasJS:writable*/

// Manipulates the element with id chart_display to watch for am event changing
// and displaying the correct chart, either table or graph depending on the choice
// selected on the select choices
document.getElementById('chart_display').addEventListener('change', function () {
  if (this.value === "graph") {
    document.getElementById('hidden_graph').style.display = 'block';
    document.getElementById('hidden_table').style.display = 'none';
  } else if (this.value === "table") {
    document.getElementById('hidden_table').style.display = 'block';
    document.getElementById('hidden_graph').style.display = 'none';
  } else if (this.value === "choose") {
    document.getElementById('hidden_table').style.display = 'none';
    document.getElementById('hidden_graph').style.display = 'none';
  }
});

// Displays the line chart of the solid waste generated in WA through canvasJS
// and data that was acquired online. This was the only avaliable data on waste
// generated, and canvasJS allows rendering of the chart on the div with the id
// of chartContainer
window.onload = function () {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: "Solid Waste Generated (pounds/person/day) in WA"
      },
      data: [{
        type: "line",
            indexLabelFontSize: 16,
        dataPoints: [
          { x: 2000, y: 10.24 },
          { x: 2001, y: 10.75},
          { x: 2002, y: 11.19 },
          { x: 2003, y: 11.41 },
          { x: 2004, y: 13.61 },
          { x: 2005, y: 15.32 },
          { x: 2006, y: 14.72 },
          { x: 2007, y: 14.51 },
          { x: 2008, y: 13.26 },
          { x: 2009, y: 12.42 },
          { x: 2010, y: 13.44 },
          { x: 2011, y: 12.91 },
          { x: 2012, y: 12.77 },
          { x: 2013, y: 13.55 }
        ]
      }]
    });
    chart.render();
}

// Displays the data table
$(function(){
  $("#datatable").dataTable();
})
