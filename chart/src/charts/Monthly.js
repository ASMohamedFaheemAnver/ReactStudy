import ReactApexChart from "react-apexcharts";
import monthlyAnalytics from "../monthly.json";
import { useMemo } from "react";
import { capitalize } from "lodash";
import Keys from "./config";

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
          const length = monthlyAnalytics[meOrYouKey][year]?.[month]?.reduce(
            (pv, nv) => {
              if (nv?.includes(Keys.me)) {
                return pv + /* nv?.split(Keys.me)?.[1]?.trim()?.length */ 1;
              } else if (nv?.includes(Keys.you)) {
                return pv + /* nv?.split(Keys.you)?.[1]?.trim()?.length */ 1;
              }
            },
            0
          );
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
        type="area"
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
