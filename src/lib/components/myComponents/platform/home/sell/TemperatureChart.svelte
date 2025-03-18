<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
  
    let chartContainer;
  
    const data = [
      { date: new Date("2024-01-01"), temp: 60 },
      { date: new Date("2024-01-05"), temp: 65 },
      { date: new Date("2024-01-10"), temp: 70 },
      { date: new Date("2024-01-15"), temp: 75 },
      { date: new Date("2024-01-20"), temp: 72 },
      { date: new Date("2024-01-25"), temp: 68 },
      { date: new Date("2024-02-01"), temp: 55 },
      { date: new Date("2024-02-10"), temp: 50 },
      { date: new Date("2024-02-15"), temp: 48 },
      { date: new Date("2024-02-20"), temp: 52 },
      { date: new Date("2024-03-01"), temp: 67 },
      { date: new Date("2024-03-05"), temp: 64 },
    ];
  
    onMount(() => {
      const margin = { top: 20, right: 30, bottom: 30, left: 50 };
      const width = 600 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;
  
      const svg = d3
        .select(chartContainer)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
  
      const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([0, width]);
  
      const y = d3.scaleLinear()
        .domain([d3.min(data, d => d.temp) - 5, d3.max(data, d => d.temp) + 5])
        .range([height, 0]);
  
      const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.temp))
        .curve(d3.curveBasis); // Smooth curve
  
      const area = d3.area()
        .x(d => x(d.date))
        .y0(height)
        .y1(d => y(d.temp))
        .curve(d3.curveBasis);
  
      // Append area
      svg.append("path")
        .datum(data)
        .attr("fill", "rgba(127, 127, 255, 0.2)")
        .attr("d", area);
  
      // Append line
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "purple")
        .attr("stroke-width", 2)
        .attr("d", line);
  
      // X-axis
      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(5));
  
      // Y-axis
      svg.append("g")
        .call(d3.axisLeft(y));
  
      // Y-axis label
      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 10)
        .attr("x", -height / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("Temperature");
    });
  </script>
  
  <div bind:this={chartContainer} class="chart-container"></div>
  
  <style>
    .chart-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  </style>
  