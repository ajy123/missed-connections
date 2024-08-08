console.log("main.js is connected");
function hideNote() {
  d3.select("#manhattan_post").style("opacity", 0.5);
  d3.select("#brooklyn_post").style("opacity", 0.5);
  d3.select("#bronx_post").style("opacity", 0.5);
  d3.select("#queens_post").style("opacity", 0.5);
  d3.select("#statenIsland_post").style("opacity", 0.5);

  d3.select("#manhattan_12pm").style("opacity", 0.5);
  d3.select("#manhattan_9am").style("opacity", 0.5);
  d3.select("#manhattan_12am").style("opacity", 0.5);
  d3.select("#brooklyn_3am").style("opacity", 0.5);
  d3.select("#statenIsland_6pm").style("opacity", 0.5);
}

function setVisibility(selector, hidden) {
  d3.select(selector)
    .classed("hidden", hidden)
    .style("opacity", hidden ? 0.2 : 1);
}

function removeHighlight() {
  d3.selectAll("td").classed("highlight", false);
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
  const elements = {
    "#manhattan_post": false,
    "#manhattan_12pm": false,
    "#manhattan_9am": false,
    "#manhattan_12am": false,
    "#brooklyn_3am": true,
    "#statenIsland_6pm": true,
    "#brooklyn_post": true,
    "#queens_post": true,
    "#bronx_post": true,
    "#statenIsland_post": true,
  };
  for (const [selector, hidden] of Object.entries(elements)) {
    setVisibility(selector, hidden);
  }
});

// mnahattan post example
d3.select("#step-two").on("stepin", function (e) {
  // undo changes from step one
  // do changes for step two
  d3.select("#manhattan_12pm").style("opacity", 1);
  d3.select("#manhattan_9am").style("opacity", 0.2);
  d3.select("#manhattan_12am").style("opacity", 0.2);
  d3.select("#statenIsland_6pm").style("opacity", 0);

  d3.select("#manhattan_post").style("opacity", 0.2);
});

d3.select("#step-three").on("stepin", function (e) {
  // undo changes from step two
  // do changes for step three
  const elements = {
    "#manhattan_post": true,
    "#manhattan_12pm": true,
    "#manhattan_9am": true,
    "#manhattan_12am": true,
    "#brooklyn_3am": false,
    "#statenIsland_6pm": true,
    "#brooklyn_post": true,
    "#queens_post": true,
    "#bronx_post": true,
    "#statenIsland_post": true,
  };
  for (const [selector, hidden] of Object.entries(elements)) {
    setVisibility(selector, hidden);
  }
});

d3.select("#step-four").on("stepin", function (e) {
  const elements = {
    "#manhattan_post": true,
    "#manhattan_12pm": true,
    "#manhattan_9am": true,
    "#manhattan_12am": true,
    "#brooklyn_3am": true,
    "#statenIsland_6pm": false,
    "#brooklyn_post": true,
    "#queens_post": true,
    "#bronx_post": true,
    "#statenIsland_post": true,
  };
  for (const [selector, hidden] of Object.entries(elements)) {
    setVisibility(selector, hidden);
  }
});

d3.select("#noun-step-one").on("stepout", function (e) {
  console.log("back");
  if (e.detail.direction === "up") {
    console.log("up");
    // undo the changes from step one
    removeHighlight();
  }
});

d3.select("#noun-step-one").on("stepin", function (e) {
  // highlight all the similarity across five boroughs
  d3.selectAll("td").each(function (d) {
    if (
      (d.column === "Manhattan" && d.value === "time") ||
      (d.column === "Brooklyn" && d.value === "time") ||
      (d.column === "Queens" && d.value === "time") ||
      // (d.column === "Bronx" && d.value === "morning") ||
      (d.column === "Staten Island" && d.value === "time")
    ) {
      d3.select(this).classed("highlight", true).text(`⌚ time`);
    }

    if (d.column === "Bronx" && d.value === "morning") {
      d3.select(this).classed("highlight", true).text(`☀️ morning`);
    }
  });
});

d3.select("#noun-step-two").on("stepin", function (e) {
  // // undo changes from step one
  removeHighlight();

  // do changes for step two
  d3.selectAll("td").each(function (d) {
    if (
      (d.column === "Manhattan" && d.value === "time") ||
      (d.column === "Brooklyn" && d.value === "time") ||
      (d.column === "Queens" && d.value === "time") ||
      (d.column === "Staten Island" && d.value === "time")
    ) {
      d3.select(this).classed("highlight", false).text(`time`);
    }

    if (d.column === "Bronx" && d.value === "morning") {
      d3.select(this).classed("highlight", false).text(`morning`);
    }

    if (
      (d.column === "Manhattan" && d.value === "train") ||
      (d.column === "Brooklyn" && d.value === "train") ||
      (d.column === "Queens" && d.value === "train")
    ) {
      d3.select(this).classed("highlight", true).text(`🚆 train`);
    }

    if (
      (d.column === "Manhattan" && d.value === "eye") ||
      (d.column === "Brooklyn" && d.value === "eye") ||
      (d.column === "Queens" && d.value === "eye")
    ) {
      d3.select(this).classed("highlight", true).text(`👀 eye`);
    }
  });
});

d3.select("#noun-step-three").on("stepin", function (e) {
  // // undo changes
  removeHighlight();

  // do changes for step three
  d3.selectAll("td").each(function (d) {
    if (
      d &&
      ((d.column === "Manhattan" && d.value === "train") ||
        (d.column === "Brooklyn" && d.value === "train") ||
        (d.column === "Queens" && d.value === "train"))
    ) {
      d3.select(this).classed("highlight", false).text(`train`);
    }

    if (
      (d.column === "Manhattan" && d.value === "eye") ||
      (d.column === "Brooklyn" && d.value === "eye") ||
      (d.column === "Queens" && d.value === "eye")
    ) {
      d3.select(this).classed("highlight", false).text(`eye`);
    }

    if (d && d.column === "Queens" && d.value === "smile") {
      d3.select(this).classed("highlight", true).text(`😊 smile`);
    }
  });
});

d3.select("#noun-step-four").on("stepin", function (e) {
  // undo changes
  removeHighlight();

  // do changes for step four
  d3.selectAll("td").each(function (d) {
    // remove previous step class
    if (d && d.column === "Queens" && d.value === "smile") {
      d3.select(this).classed("highlight", false).text(`smile`);
    }

    if (d && d.column === "Bronx" && d.value === "nail") {
      d3.select(this).classed("highlight", true).text(`💅 nail`);
    }
  });
});

d3.select("#noun-step-five").on("stepin", function (e) {
  // // undo changes
  removeHighlight();
  d3.selectAll("td").each(function (d) {
    if (d && d.column === "Bronx" && d.value === "nail") {
      d3.select(this).classed("highlight", false).text(`nail`);
    }

    if (d && d.column === "Staten Island" && d.value === "bike") {
      d3.select(this).classed("highlight", true).text(`🚲 bike`);
    }

    if (d && d.column === "Staten Island" && d.value === "beard") {
      d3.select(this).classed("highlight", true).text(`🧔‍♂️ bike`);
    }
  });
});
