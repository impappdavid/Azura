<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";

  let data = [
    { date: "2025-03-10", price: 0.58 },
    { date: "2025-03-11", price: 0.93 },
    { date: "2025-03-12", price: 5.23 },
    { date: "2025-03-13", price: 4.8 },
    { date: "2025-03-14", price: 3.2 },
    { date: "2025-03-15", price: 0.46 },
    { date: "2025-03-16", price: 1.5 },
    { date: "2025-03-17", price: 1.67 },
    { date: "2025-03-18", price: 0.46 },
    { date: "2025-03-19", price: 0.86 },
    { date: "2025-03-20", price: 0.12 },
    { date: "2025-03-21", price: 0.27 },
    { date: "2025-03-22", price: 0.9 },
    { date: "2025-03-23", price: 1.24 },
    { date: "2025-03-24", price: 12.25 },
    { date: "2025-03-25", price: 0.05 },
    { date: "2025-03-26", price: 0.15 },
    { date: "2025-03-27", price: 2.35 },
    { date: "2025-03-28", price: 40.46 },
    { date: "2025-03-29", price: 20.46 },
    { date: "2025-03-30", price: 10.46 },
  ];

  let verticalLine = null; // Variable to hold the vertical line

  let chartContainer;

  onMount(() => {
    const width = chartContainer.clientWidth; // Use container width for responsiveness
    const height = 350;
    const margin = { top: 20, right: 30, bottom: 30, left: 70 };

    const svg = d3
      .select(chartContainer)
      .append("svg")
      .attr("width", "100%") // Make the SVG responsive
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`); // Maintain aspect ratio

    const parseDate = d3.timeParse("%Y-%m-%d");
    const formatDate = d3.timeFormat("%B %d, %Y"); // Format for the date
    data = data.map((d) => ({ date: parseDate(d.date), price: d.price }));

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.price) - 10,
        d3.max(data, (d) => d.price) + 10,
      ])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.price))
      .curve(d3.curveMonotoneX);

    const area = d3
      .area()
      .x((d) => x(d.date))
      .y0(height - margin.bottom)
      .y1((d) => y(d.price))
      .curve(d3.curveMonotoneX);

    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#786fa9")
      .attr("stop-opacity", 0.6);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#786fa9")
      .attr("stop-opacity", 0);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "url(#gradient)")
      .attr("d", area);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ab9ff2")
      .attr("stroke-width", 2)
      .attr("d", line);

    const xAxis = d3.axisBottom(x).ticks(5);
    const yAxis = d3.axisLeft(y);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis);

    const focus = svg.append("g").style("display", "none");

    focus
      .append("circle")
      .attr("r", 6)
      .attr("fill", "#9a8fda")
      .attr("stroke", "#444061")
      .attr("stroke-width", 4);

    verticalLine = svg
      .append("line")
      .attr("stroke", "#786fa9")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "8")
      .style("display", "none"); // Initially hidden

    const tooltip = svg
      .append("g")
      .attr("class", "tooltip")
      .style("display", "none");

    tooltip
      .append("rect")
      .attr("fill", "#27272a")
      .attr("stroke", "#52525b") // Add stroke color
      .attr("stroke-width", 1) // Set stroke width
      .attr("width", 170)
      .attr("height", 50); // Increased height for two rows

    tooltip
      .append("text")
      .attr("x", 10)
      .attr("y", 20)
      .attr("font-size", "12px")
      .attr("fill", "white") // Set text color to white
      .attr("font-weight", "bold"); // Make text bold

    tooltip
      .append("text")
      .attr("x", 10)
      .attr("y", 40) // Position for the average price
      .attr("font-size", "12px")
      .attr("class", "text-zinc-400")
      .attr("fill", "white") // Set text color to white
      .attr("font-weight", "bold"); // Make text bold

    const overlay = svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "transparent")
      .on("mouseover", () => {
        focus.style("display", null);
        verticalLine.style("display", null); // Show the vertical line
        tooltip.style("display", null); // Show the tooltip
      })
      .on("mouseout", () => {
        focus.style("display", "none");
        verticalLine.style("display", "none"); // Hide the vertical line
        tooltip.style("display", "none"); // Hide the tooltip
      })
      .on("mousemove", function (event) {
        const bisect = d3.bisector((d) => d.date).left;
        const x0 = x.invert(d3.pointer(event, this)[0]);
        const i = bisect(data, x0, 1);
        const d0 = data[i - 1];
        const d1 = data[i] || d0;
        const d = x0 - d0.date > d1.date - x0 ? d1 : d0;
        focus.attr("transform", `translate(${x(d.date)},${y(d.price)})`);

        // Update tooltip position and content
        const tooltipOffsetX = 20; // Adjust this value for more/less margin
        tooltip.attr(
          "transform",
          `translate(${x(d.date) + tooltipOffsetX},${y(d.price) - 20})`,
        ); // Added left margin
        tooltip.select("text:nth-child(2)").html(`${formatDate(d.date)} `);
        tooltip.select("text:nth-child(3)").html(`Avg Price: ${d.price}`);
        // Update vertical line position
        verticalLine
          .attr("x1", x(d.date))
          .attr("x2", x(d.date))
          .attr("y1", margin.top)
          .attr("y2", height - margin.bottom);
      });
  });
</script>

<div bind:this={chartContainer} class="relative cursor-pointer w-full"></div>
