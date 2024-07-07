console.log("main.js is connected");
function hideNote() {
  d3.select("#brooklyn").style("opacity", 0.5);
  d3.select("#manhattan").style("opacity", 0.5);
  d3.select("#longestPost").style("opacity", 0.5);
  d3.select("#queens").style("opacity", 0.5);
  d3.select("#bronx").style("opacity", 0.5);
  d3.select("#statenisland").style("opacity", 0.5);
}

/* Scrollytelling code goes under here */
hideNote();

d3.select("#step-one").on("stepout", function (e) {
  console.log("back");
  if (e.detail.direction === "up") {
    console.log("up");
    // undo the changes from step one
    hideNote();
  }
});

d3.select("#step-one").on("stepin", function (e) {
  console.log("Got to step one");
  // undo changes from step two?

  // // do changes for step one
  d3.select("#brooklyn").classed("hidden", true);

  d3.select("#manhattan").classed("hidden", false);
  d3.select("#manhattan").style("opacity", 1);
  d3.select("#longestPost").style("opacity", 1);

  d3.select("#queens").classed("hidden", true);
  d3.select("#bronx").classed("hidden", true);
  d3.select("#statenisland").classed("hidden", true);
});

d3.select("#step-two").on("stepin", function (e) {
  // // undo changes from step one?

  // do changes for step two
  console.log("Got to step two");
  d3.select("#manhattan").classed("hidden", true);
  d3.select("#longestPost").classed("hidden", true);

  d3.select("#brooklyn").classed("hidden", false);
  d3.select("#brooklyn").style("opacity", 1);

  d3.select("#queens").classed("hidden", true);
  d3.select("#bronx").classed("hidden", true);
  d3.select("#statenisland").classed("hidden", true);
  // d3.selectAll("[data-name='africa'] path").style("stroke", "black");
});

d3.select("#step-three").on("stepin", function (e) {
  // undo changes from step two
  d3.select("#manhattan").classed("hidden", true);
  d3.select("#longestPost").classed("hidden", true);

  d3.select("#brooklyn").classed("hidden", true);

  d3.select("#queens").classed("hidden", false);
  d3.select("#queens").style("opacity", 1);

  d3.select("#bronx").classed("hidden", true);
  d3.select("#statenisland").classed("hidden", true);
});

d3.select("#step-four").on("stepin", function (e) {
  // undo changes from step two
  d3.select("#manhattan").classed("hidden", true);
  d3.select("#longestPost").classed("hidden", true);

  d3.select("#brooklyn").classed("hidden", true);

  d3.select("#queens").classed("hidden", true);

  d3.select("#bronx").classed("hidden", false);
  d3.select("#bronx").style("opacity", 1);

  d3.select("#statenisland").classed("hidden", true);
});

d3.select("#step-five").on("stepin", function (e) {
  // undo changes from step two
  d3.select("#manhattan").classed("hidden", true);
  d3.select("#longestPost").classed("hidden", true);

  d3.select("#brooklyn").classed("hidden", true);
  d3.select("#queens").classed("hidden", true);
  d3.select("#bronx").classed("hidden", true);

  d3.select("#statenisland").classed("hidden", false);
  d3.select("#statenisland").style("opacity", 1);
});

d3.select("#noun-step-one").on("stepout", function (e) {
  console.log("back");
  if (e.detail.direction === "up") {
    console.log("up");
    // undo the changes from step one
    hideNote();
  }
});

function removeHighlight() {
  console.log("remove highlight");
  d3.selectAll("td").classed("highlight", false);
}

d3.select("#noun-step-one").on("stepin", function (e) {
  // highlight all the similarity across five boroughs
  console.log("This is noun step1");
  d3.selectAll("td").each(function (d) {
    if (
      d &&
      ((d.column === "Manhattan" && d.value === "time") ||
        (d.column === "Brooklyn" && d.value === "time") ||
        (d.column === "Queens" && d.value === "time") ||
        (d.column === "Bronx" && d.value === "morning") ||
        (d.column === "Staten Island" && d.value === "time"))
    ) {
      d3.select(this).classed("highlight", true);
    }
  });
});

d3.select("#noun-step-two").on("stepin", function (e) {
  // // undo changes from step one
  removeHighlight();

  // do changes for step two
  console.log("This is noun step2");
  d3.selectAll("td").each(function (d) {
    if (
      d &&
      ((d.column === "Manhattan" && d.value === "train") ||
        (d.column === "Manhattan" && d.value === "eye") ||
        (d.column === "Brooklyn" && d.value === "train") ||
        (d.column === "Brooklyn" && d.value === "eye") ||
        (d.column === "Queens" && d.value === "train") ||
        (d.column === "Queens" && d.value === "eye"))
    ) {
      d3.select(this).classed("highlight", true);
    }
  });
});

d3.select("#noun-step-three").on("stepin", function (e) {
  // // undo changes from step one
  removeHighlight();

  // do changes for step two
  console.log("This is noun step2");
  d3.selectAll("td").each(function (d) {
    if (d && d.column === "Queens" && d.value === "smile") {
      d3.select(this).classed("highlight", true);
    }
  });
});

d3.select("#noun-step-four").on("stepin", function (e) {
  // // undo changes from step one
  removeHighlight();

  // do changes for step two
  console.log("This is noun step2");
  d3.selectAll("td").each(function (d) {
    if (d && d.column === "Bronx" && d.value === "nail") {
      d3.select(this).classed("highlight", true);
    }
  });
});

d3.select("#noun-step-five").on("stepin", function (e) {
  // // undo changes from step one
  removeHighlight();

  // do changes for step two
  console.log("This is noun step2");
  d3.selectAll("td").each(function (d) {
    if (
      (d && d.column === "Staten Island" && d.value === "bike") ||
      (d && d.column === "Staten Island" && d.value === "beard")
    ) {
      d3.select(this).classed("highlight", true);
    }
  });
});
