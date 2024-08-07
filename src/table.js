var data = [
  {
    Manhattan: "eye",
    Brooklyn: "friend",
    Queens: "eye",
    Bronx: "guy",
    "Staten Island": "contact",
  },
  {
    Manhattan: "guy",
    Brooklyn: "eye",
    Queens: "time",
    Bronx: "train",
    "Staten Island": "guy",
  },
  {
    Manhattan: "train",
    Brooklyn: "woman",
    Queens: "smile",
    Bronx: "kit",
    "Staten Island": "woman",
  },
  {
    Manhattan: "time",
    Brooklyn: "train",
    Queens: "contact",
    Bronx: "hair",
    "Staten Island": "door",
  },
  {
    Manhattan: "shirt",
    Brooklyn: "shirt",
    Queens: "train",
    Bronx: "tee",
    "Staten Island": "beard",
  },
  {
    Manhattan: "friend",
    Brooklyn: "t",
    Queens: "work",
    Bronx: "morning",
    "Staten Island": "bike",
  },
  {
    Manhattan: "hair",
    Brooklyn: "time",
    Queens: "man",
    Bronx: "message",
    "Staten Island": "approach",
  },
  {
    Manhattan: "number",
    Brooklyn: "night",
    Queens: "connection",
    Bronx: "park",
    "Staten Island": "pm",
  },
  {
    Manhattan: "dress",
    Brooklyn: "guy",
    Queens: "beat",
    Bronx: "nail",
    "Staten Island": "time",
  },
  {
    Manhattan: "short",
    Brooklyn: "hair",
    Queens: "number",
    Bronx: "month",
    "Staten Island": "dress",
  },
];

function tabulate(data, columns) {
  var table = d3
    .select(".tables__container")
    .append("table")
    .attr("class", "min-w-full divide-y divide-gray-200");
  //   var table = d3.select("#data-table");
  var thead = table.append("thead").attr("class", "bg-gray-50");
  var tbody = table
    .append("tbody")
    .attr("class", "bg-white divide-y divide-gray-200");

  // append the header row
  thead
    .append("tr")
    .selectAll("th")
    .data(columns)
    .enter()
    .append("th")
    .attr(
      "class",
      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    )
    .text(function (column) {
      return column;
    });

  // create a row for each object in the data
  var rows = tbody.selectAll("tr").data(data).enter().append("tr");

  // create a cell in each row for each column
  var cells = rows
    .selectAll("td")
    .data(function (row) {
      return columns.map(function (column) {
        return { column: column, value: row[column] };
      });
    })
    .enter()
    .append("td")
    .attr(
      "class",
      "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
    )
    .text(function (d) {
      return d.value;
    });

  return table;
}

// render the tables
tabulate(data, ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]); // 2 column table
