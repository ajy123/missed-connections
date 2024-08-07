// // testing d3 code
// // let lastDate;
// // let data; // Declare a global variable
// // let dateRange;
// // test the code
// let height = 320;
// let width = 640; //window.innerWidth;
// let margin = { top: 20, right: 40, bottom: 30, left: 40 };
// // console.log(window.innerWidth);
// // // test out broough color

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
//     .select(".bee-emoji-chart")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);

//   let xScale = d3
//     .scaleUtc()
//     .domain(dateRange)
//     .range([margin.left, width - margin.right]);

//   //   svg
//   //     .append("g")
//   //     .attr("transform", `translate(0,${height - margin.bottom})`)
//   //     .call(
//   //       d3
//   //         .axisBottom(xScale)
//   //         .ticks(width / 60)
//   //         .tickSizeOuter(0)
//   //     );

//   let yScale = d3
//     .scaleLinear()
//     .domain(d3.extent(data.map((d) => d.post.length)))
//     .range([height - margin.bottom, margin.top]);

//   let colors = d3
//     .scaleOrdinal()
//     .domain(["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"])
//     .range(["#0081A7", "#00AFB9", "#FFED4B", "#F4B54E", "#FE8478"]);

//   const circles = svg
//     .selectAll(".circle")
//     .data(data)
//     .enter()
//     .append("circle")
//     .attr("class", "circle")
//     .attr("stroke", (d) => colors(d.borough))
//     .attr("fill", (d) => colors(d.borough))
//     .attr("opacity", 0.5)
//     .attr("r", 10)
//     .attr("cx", (d) => xScale(new Date(d.date)))
//     .attr("cy", (d) => yScale(d.post.length));
//   const emojis = svg
//     .selectAll(".emoji")
//     .data(data)
//     .enter()
//     .append("text")
//     .attr("class", "emoji")
//     .attr("text-anchor", "middle")
//     .attr("alignment-baseline", "middle")
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

//   window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;
//     // console.log(scrollY);
//     circles.each(function (d) {
//       const initialY = yScale(d.post.length);
//       const newY = initialY - scrollY * 0.5; // Adjust the factor as needed
//       const newOpacity = 0.5 - scrollY / 500; // Adjust the factor as needed

//       d3.select(this)
//         .style("transform", `translateY(${newY - initialY}px)`)
//         .style("opacity", newOpacity > 0 ? newOpacity : 0);
//     });

//     emojis.each(function (d) {
//       const initialY = yScale(d.post.length);
//       const newY = initialY - scrollY * 0.5; // Adjust the factor as needed
//       const newOpacity = 1 - scrollY / 500; // Adjust the factor as needed

//       d3.select(this)
//         .style("transform", `translateY(${newY - initialY}px)`)
//         .style("opacity", newOpacity > 0 ? newOpacity : 0);
//     });
//   });

//   // Additional debug information
//   console.log("dateRange:", dateRange);
//   console.log("xScale domain:", yScale.domain());
//   console.log("xScale range:", yScale.range());
// });
