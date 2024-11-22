const date = new Date();

export const overAllBin = {
  chart: {
    type: "area",
    width: "100%", // Change to 'area' to use an area chart
    toolbar: {
      show: false,
    },
    background: "transparent", // Optional: Set a background color for the chart area
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#015864", "05e951"], // to set gradient colors
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  grid: {
    borderColor: "#58004f", // Grid line color
    strokeDashArray: 3,
  },
  plotOptions: {
    area: {
      distributed: true, // Apply different colors to each data point
    },
  },
  colors: ["#640150", "05e951"], // Colors for each data point
  series: [
    {
      name: "",
      data: [], // Sample data for the area chart
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Example categories for the X-axis
    labels: {
      style: {
        colors: "#000", // White color for X-axis labels
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    series: {
      data: [0, 1, 2, 3, 4, 5],
    },
    labels: {
      style: {
        colors: "#000", // White color for Y-axis labels
        fontSize: "12px",
      },
    },
  },
  title: {
    text: `Bin clearance per location ( ${date.getFullYear()} ) `,
    style: {
      color: "#fff", // White color for the title
      fontSize: "14px",
      fontFamily: "Gotham, Arial, sans-serif",
      padding: {
        left: 15,
      },
    },
  },
  tooltip: {
    theme: "dark", // Optional: Dark tooltip for better visibility
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
};

export const driver1 = {
  chart: {
    type: "area",
    width: "100%", // Change to 'area' to use an area chart
    toolbar: {
      show: false,
    },
    background: "transparent", // Optional: Set a background color for the chart area
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#015864", "05e951"], // to set gradient colors
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  grid: {
    borderColor: "#000", // Grid line color
    strokeDashArray: 3,
  },
  plotOptions: {
    area: {
      distributed: true, // Apply different colors to each data point
    },
  },
  colors: ["#b74803"], // Colors for each data point
  series: [
    {
      name: "",
      data: [], // Sample data for the area chart
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Example categories for the X-axis
    labels: {
      style: {
        colors: "#000", // White color for X-axis labels
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    series: {
      data: [],
    },
    labels: {
      style: {
        colors: "#000", // White color for Y-axis labels
        fontSize: "12px",
      },
    },
  },
  title: {
    text: `Monthly bin clearance for ( ${date.getFullYear()} ) `,
    style: {
      color: "#fff", // White color for the title
      fontSize: "14px",
      fontFamily: "Gotham, Arial, sans-serif",
      padding: {
        left: 15,
      },
    },
  },
  tooltip: {
    theme: "dark", // Optional: Dark tooltip for better visibility
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
};

export const driver2 = {
  chart: {
    type: "area",
    width: "100%", // Change to 'area' to use an area chart
    toolbar: {
      show: false,
    },
    background: "transparent", // Optional: Set a background color for the chart area
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#015864", "05e951"], // to set gradient colors
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  grid: {
    borderColor: "#58004f", // Grid line color
    strokeDashArray: 3,
  },
  plotOptions: {
    area: {
      distributed: true, // Apply different colors to each data point
    },
  },
  colors: ["#006353"], // Colors for each data point
  series: [
    {
      name: "",
      data: [], // Sample data for the area chart
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Example categories for the X-axis
    labels: {
      style: {
        colors: "#000", // White color for X-axis labels
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    series: {
      data: [],
    },
    labels: {
      style: {
        colors: "#000", // White color for Y-axis labels
        fontSize: "12px",
      },
    },
  },
  title: {
    text: `Monthly bin clearance for ( ${date.getFullYear()} ) `,
    style: {
      color: "#fff", // White color for the title
      fontSize: "14px",
      fontFamily: "Gotham, Arial, sans-serif",
      padding: {
        left: 15,
      },
    },
  },
  tooltip: {
    theme: "dark", // Optional: Dark tooltip for better visibility
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
};

export const driver3 = {
  chart: {
    type: "area",
    width: "100%", // Change to 'area' to use an area chart
    toolbar: {
      show: false,
    },
    background: "transparent", // Optional: Set a background color for the chart area
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#015864", "05e951"], // to set gradient colors
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  grid: {
    borderColor: "#58004f", // Grid line color
    strokeDashArray: 3,
  },
  plotOptions: {
    area: {
      distributed: true, // Apply different colors to each data point
    },
  },
  colors: ["#640150"], // Colors for each data point
  series: [
    {
      name: "",
      data: [], // Sample data for the area chart
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Example categories for the X-axis
    labels: {
      style: {
        colors: "#000", // White color for X-axis labels
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    series: {
      data: [],
    },
    labels: {
      style: {
        colors: "#000", // White color for Y-axis labels
        fontSize: "12px",
      },
    },
  },
  title: {
    text: `Monthly bin clearance for( ${date.getFullYear()} ) `,
    style: {
      color: "#fff", // White color for the title
      fontSize: "14px",
      fontFamily: "Gotham, Arial, sans-serif",
      padding: {
        left: 15,
      },
    },
  },
  tooltip: {
    theme: "dark", // Optional: Dark tooltip for better visibility
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
};

export const driver4 = {
  chart: {
    type: "area",
    width: "100%", // Change to 'area' to use an area chart
    toolbar: {
      show: false,
    },
    background: "transparent", // Optional: Set a background color for the chart area
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#015864", "05e951"], // to set gradient colors
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  grid: {
    borderColor: "#58004f", // Grid line color
    strokeDashArray: 3,
  },
  plotOptions: {
    area: {
      distributed: true, // Apply different colors to each data point
    },
  },
  colors: ["#d5aa01"], // Colors for each data point
  series: [
    {
      name: "",
      data: [], // Sample data for the area chart
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Example categories for the X-axis
    labels: {
      style: {
        colors: "#000", // White color for X-axis labels
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    series: {
      data: [],
    },
    labels: {
      style: {
        colors: "#000", // White color for Y-axis labels
        fontSize: "12px",
      },
    },
  },
  title: {
    text: `Monthly bin clearance for ( ${date.getFullYear()} ) `,
    style: {
      color: "#fff", // White color for the title
      fontSize: "14px",
      fontFamily: "Gotham, Arial, sans-serif",
      padding: {
        left: 15,
      },
    },
  },
  tooltip: {
    theme: "dark", // Optional: Dark tooltip for better visibility
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
};

export const driver5 = {
  chart: {
    type: "area",
    width: "100%", // Change to 'area' to use an area chart
    toolbar: {
      show: false,
    },
    background: "transparent", // Optional: Set a background color for the chart area
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#015864", "05e951"], // to set gradient colors
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  grid: {
    borderColor: "#58004f", // Grid line color
    strokeDashArray: 3,
  },
  plotOptions: {
    area: {
      distributed: true, // Apply different colors to each data point
    },
  },
  colors: ["#cd0159"], // Colors for each data point
  series: [
    {
      name: "",
      data: [], // Sample data for the area chart
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Example categories for the X-axis
    labels: {
      style: {
        colors: "#000", // White color for X-axis labels
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    series: {
      data: [],
    },
    labels: {
      style: {
        colors: "#000", // White color for Y-axis labels
        fontSize: "12px",
      },
    },
  },
  title: {
    text: `Monthly bin clearance for ( ${date.getFullYear()} ) `,
    style: {
      color: "#fff", // White color for the title
      fontSize: "14px",
      fontFamily: "Gotham, Arial, sans-serif",
      padding: {
        left: 15,
      },
    },
  },
  tooltip: {
    theme: "dark", // Optional: Dark tooltip for better visibility
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
};

export const totalBins = {
  series: [
    {
      data: [
        10, 12, 14, 60, 18, 20, 22, 25, 67, 30, 28, 135, 42, 34, 75, 38, 40, 42,
        85, 45,
      ],
    },
  ],
  chart: {
    type: "area",
    height: 250,
    sparkline: {
      enabled: true,
    },
  //   background: "#0036363c", // Add the background color here
   },
  stroke: {
    curve: "smooth",
    colors: ["#03816c"],
  },
  fill: {
    opacity: 0.7,
    type: "gradient",
    colors: ["#03816c"],
  },
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  yaxis: {
    min: 0,
  },
  title: {
    text: "65",
    offsetX: 0,
    style: {
      fontSize: "34px",
      color: "#02653f",
    },
  },
  subtitle: {
    text: "Total bins cleared",
    offsetX: 0,
    offsetY: 50,
    style: {
      fontSize: "16px",
    },
  },
  // Customizing the tooltip
  tooltip: {
    enabled: true,
    shared: true, // Use shared to show the value for the entire chart, not per series
    followCursor: true,
    intersect: false,
    theme: false,
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    x: {
      show: false, // Hide the x-axis label in the tooltip
    },
    y: {
      formatter: function () {
        return "Bins Cleared"; // Show "Bins Cleared" instead of the actual series value
      },
      title: {
        formatter: () => "", // This removes the "series" label
      },
    },
    marker: {
      show: false, // Hide the marker (blue dot)
    },
  },
  // Customizing the marker color and size
  markers: {
    size: 3,
    colors: ["#f3cc06"], // Change marker color
    strokeColors: "#000", // Outline color of the marker
    strokeWidth: 1,
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
};
