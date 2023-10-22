import ReactApexChart from "react-apexcharts";
import yearlyAnalytics from "../yearly.json";
import { useMemo } from "react";
import { capitalize } from "lodash";

function Yearly() {
  const xAxis = [];
  const series = [];

  useMemo(() => {
    Object.keys(yearlyAnalytics).forEach((meOrYouKey) => {
      const analytic = {
        name: capitalize(meOrYouKey),
        data: [],
      };
      Object.keys(yearlyAnalytics[meOrYouKey]).forEach((year) => {
        if (!xAxis.includes(year)) {
          xAxis.push(year);
        }
        const length = yearlyAnalytics[meOrYouKey][year]?.length;
        analytic.data.push(length);
      });
      series.push(analytic);
    });
  }, [yearlyAnalytics]);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <ReactApexChart
        width={"100%"}
        height={"100%"}
        type="area"
        options={{
          xaxis: {
            categories: xAxis,
          },
        }}
        series={series}
      />
    </div>
  );
}

export default Yearly;
