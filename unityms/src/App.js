import ars from "./ars.json";
function App() {
  console.log({ ars });
  const reports = Array(12).fill(Math.random());
  console.log({ reports });
  return (
    <div style={{ display: "flex", gap: 32 }}>
      {reports?.map((_, index) => {
        return (
          <table key={index} style={{ background: "#f4f4f4", padding: 8 }}>
            <tr>
              <th>NAME</th>
              <th>RECEIVABLE</th>
              <th>INCOME</th>
              <th>ARREARS</th>
            </tr>
            {ars?.map((ar) => {
              return (
                <tr key={ar?._id}>
                  <td>{ar?.member?.name}</td>
                  <td>{ar?.reports?.[index]?.receivablesTotal}</td>
                  <td>{ar?.reports?.[index]?.amountHistoryTotal}</td>
                  <td>
                    {ar?.reports?.[index]?.receivablesTotal -
                      ar?.reports?.[index]?.amountHistoryTotal}
                  </td>
                </tr>
              );
            })}
          </table>
        );
      })}
    </div>
  );
}

export default App;
