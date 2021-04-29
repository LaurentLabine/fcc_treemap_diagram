export const Legend = (data, props, colorScale, container) => {
  const {
    width = 600,
    margin
  } = props;


  // Ideally i'd put this in a constructor

  // const legendContainer = d3.select("body")
  //   .append("svg")
  //   .attr("id", "legend")
  //   .attr("class", "legend")
  //   .attr("width", width + margin.left + margin.right)
  //   .attr("height", 100)
  //   .append("g")
  //   .attr("id", "legend-container")
  //   .attr("transform",
  //     "translate(" + margin.left + "," + margin.top + ")")

  const legend = container.selectAll('g')
    .data(data.children)
    .enter()
    .append("g");

  legend
    .append('rect')
    .attr('class', 'legend-item')
    .attr('width', "15px")
    .attr('height', "15px")
    .attr('y', (d, i) => i % 4 * 20)
    .attr('x', (d, i) => width / 4 * Math.floor(i / 4) + 20)
    .attr("fill", d => colorScale(d.name))

  legend
    .append('text')
    .attr('y', (d, i) => i % 4 * 20 + 12)
    .attr('x', (d, i) => width / 4 * Math.floor(i / 4) + 20 + 20)
    .style('font-size', "15px")
    .text((d) => d.name);

  return container
}