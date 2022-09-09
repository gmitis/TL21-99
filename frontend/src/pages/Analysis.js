import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Analysis = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [Operator1, setOperator1] = useState("AO");
  const [Operator2, setOperator2] = useState("OO");
  const history = useHistory();

  const handleSubmit = () => {
      console.log('something');
      const datefrom = dateFrom.replaceAll('-','');
    const dateto = dateTo.replaceAll('-','');
    history.push(`/ViewshortAnalysis?operator1=${Operator1}&operator2=${Operator2}&datefrom=${datefrom}&dateto=${dateto}`)
  }
  
  return (
    <div className="analysis">
      <h2>Passes Analysis</h2>
      <form onSubmit={handleSubmit}>
        <h3>Dates</h3>
        <label>from</label>
        <input
          type="date"
          required
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <label>to</label>
        <input
          type="date"
          required
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
        <br />

        <h3>Organisation</h3>

        <label>Operator 1: </label>
        <select
          value={Operator1}
          required
          onChange={(e) => {
            setOperator1(e.target.value);
          }}
        >
          <option value="AO">aodos</option>
          <option value="GF">gefyra</option>
          <option value="EG">egnatia</option>
          <option value="KO">kentriki odos</option>
          <option value="MR">moreas</option>
          <option value="NE">nea odos</option>
          <option value="OO">olympia odos</option>
        </select>

        <label>Operator 2: </label>
        <select
          value={Operator2}
          required
          onChange={(e) => {
            setOperator2(e.target.value);
          }}
        >
          <option value="AO">aodos</option>
          <option value="GF">gefyra</option>
          <option value="EG">egnatia</option>
          <option value="KO">kentriki odos</option>
          <option value="MR">moreas</option>
          <option value="NE">nea odos</option>
          <option value="OO">olympia odos</option>
        </select>
        <br />
        <button type="submit">proceed</button>
      </form>
    </div>
  );
};

export default Analysis;
