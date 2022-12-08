import ReactApexChart from "react-apexcharts";

function App() {
  return (
    <div>
      <ReactApexChart
        width={500}
        height={500}
        type="area"
        options={{
          xaxis: {
            categories: [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sun",
            ],
          },
        }}
        series={[
          {
            name: "R1",
            data: [30, 40, 25, 50, 49, 21, 70, 51],
          },
          {
            name: "R2",
            data: [23, 12, 54, 61, 32, 56, 81, 19],
          },
          {
            name: "R3",
            data: [12, 54, 61, 32, 56, 81, 19, 23],
          },
        ]}
      />
    </div>
  );
}

export default App;
