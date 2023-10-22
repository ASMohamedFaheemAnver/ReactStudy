import ReactApexChart from "react-apexcharts";
import monthlyAnalytics from "../monthly.json";
import { useMemo } from "react";
import { capitalize } from "lodash";

function Monthly() {
  const xAxis = [];
  const series = [];

  useMemo(() => {
    Object.keys(monthlyAnalytics).forEach((meOrYouKey) => {
      const analytic = {
        name: capitalize(meOrYouKey),
        data: [],
      };
      Object.keys(monthlyAnalytics[meOrYouKey]).forEach((year) => {
        Object.keys(monthlyAnalytics[meOrYouKey][year]).forEach((month) => {
          const key = `${year}/${month}`;
          if (!xAxis.includes(key)) {
            xAxis.push(key);
          }
          const length = monthlyAnalytics[meOrYouKey][year]?.[month].length;
          analytic.data.push({
            y: length,
            x: key,
          });
        });
      });
      series.push(analytic);
    });
  }, [monthlyAnalytics]);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <ReactApexChart
        width={"100%"}
        height={"100%"}
        type="bar"
        options={{
          xaxis: {
            categories: xAxis,
          },
          plotOptions: {
            bar: {
              dataLabels: {
                // Data label position
                position: "top",
              },
            },
          },
        }}
        series={series}
      />
    </div>
  );
}

export default Monthly;
