/**
 * @file LineChart.js
 * @description This file contains the LineChart component which creates a line chart using react-chartjs-2 and chart.js.
 *
 * @tutorial https://medium.com/@neeraj_kumar_/use-chartjs-with-nextjs-ac06da6f4e4c
 */

// importing and registering necessary modules from react-chartjs-2 and chart.js to ensure that we can use them

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// creating a LineChart component that takes in ratings and dates as parameters
const LineChart = ({ ratings, dates }) => {
  // creating a data object that contains the labels and datasets for the line chart
  // the labels are just the dates, and the datasets, or the data points according to chart.js, are the ratings
  const data = {
    labels: dates,
    datasets: [
      {
        // within the datasets object, the label for the y-axis is "Rating", the data is the ratings, and the fill is set to false
        // which means that the line chart will not be filled in, but rather just the line will be shown
        // lastly the background color and border color are set to green, so the line will be green
        label: "Rating",
        data: ratings,
        fill: false,
        backgroundColor: "green",
        borderColor: "green",
      },
    ],
  };

  // creating an options object, which will contain configurations for the line chart, such as the title
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Ratings Over Time",
        font: {
          size: 20,
        },
      },
    },
  };

  // finally we are returning the Line component from react-chartjs-2 with the data object that we created above as a parameter, and some extra configs for the title
  return <Line data={data} options={options} />;
};

export default LineChart;
