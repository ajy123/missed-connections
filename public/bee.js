// // testing d3 code
// // let lastDate;
// let data; // Declare a global variable
// let dateRange;
// // test the code
// let height = 400;
// let width = 1000;
// let margin = { top: 0, right: 40, bottom: 30, left: 40 };

// // // test out broough color
// // let colors = d3
// //   .scaleOrdinal()
// //   .domain([
// //     "Manhattan",
// //     "Brooklyn",
// //     "The Bronx",
// //     "Staten Island",
// //     "Queens",
// //   ])
// //   .range(["#D81B60", "#1976D2", "#388E3C", "#FBC02D", "#E64A19"]);

// function getData() {
//   return d3
//     .tsv("data/mc_final_w_emojis.csv")
//     .then(function (d) {
//       // Here we can process data
//       data = d; // Assign the data to the global variable
//       return d;
//     })
//     .catch(function (error) {
//       // Handle error...
//       console.error(error);
//     });
// }

// getData().then(() => {
//   console.log(data); // Now globalData is populated with the data
//   dateRange = d3.extent(data, (d) => new Date(d.date));

//   let svg = d3
//     .select(".testd3")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);

//   let xScale = d3
//     .scaleUtc()
//     .domain(dateRange)
//     .range([margin.left, width - margin.right]);

//   svg
//     .append("g")
//     .attr("transform", `translate(0,${height - margin.bottom})`)
//     .call(
//       d3
//         .axisBottom(xScale)
//         .ticks(width / 60)
//         .tickSizeOuter(0)
//     );

//   let yScale = d3
//     .scaleLinear()
//     .domain(d3.extent(data.map((d) => d.post.length)))
//     .range([height - margin.bottom, margin.top]);

//   let color = d3
//     .scaleOrdinal()
//     .domain(d3.extent(data, (d) => d.borough))
//     .range(d3.schemePaired);

//   console.log(data[0].cleaned_emojis[2]);

//   svg
//     .selectAll(".emoji")
//     .data(data)
//     .enter()
//     .append("text")
//     .attr("class", "emoji")
//     .attr("text-anchor", "middle")
//     .attr("font-size", "12px") // Adjust the font size as needed
//     .attr("x", (d) => xScale(new Date(d.date)))
//     .attr("y", (d) => yScale(d.post.length))
//     .text((d) => {
//       let emojis = JSON.parse(d.cleaned_emojis.replace(/'/g, '"'));
//       return emojis.length
//         ? emojis[Math.floor(Math.random() * emojis.length)]
//         : "";
//     });

//   // svg
//   //   .selectAll(".circ")
//   //   .data(data)
//   //   .enter()
//   //   .append("circle")
//   //   .attr("class", "circ")
//   //   // .attr("r", (d) => size(d["Market Cap"]))
//   //   .attr("fill", (d) => color(d.borough))
//   //   .attr("r", 5)
//   //   .attr("cx", (d) => xScale(new Date(d.date)))
//   //   .attr("cy", (d) => yScale(d.post.length))
//   //   .append("text")
//   //   .attr("class", "emoji")
//   //   .attr("text-anchor", "middle")
//   //   .attr("dy", ".35em")
//   //   .text((d) => {
//   //     // console.log();
//   //     // let emojis = JSON.parse(d.cleaned_emojis[0]);
//   //     // return emojis.length
//   //     //   ? emojis[Math.floor(Math.random() * emojis.length)]
//   //     //   : "";

//   //   });

//   // Additional debug information
//   console.log("dateRange:", dateRange);
//   console.log("xScale domain:", yScale.domain());
//   console.log("xScale range:", yScale.range());
// });
