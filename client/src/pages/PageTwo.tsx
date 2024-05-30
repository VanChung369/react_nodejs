import { Link } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const PageTwo = () => {
  const [values, setValues] = useState<any>([]);
  const [value, setValue] = useState<any>([]);
  const getAllNumbers = useCallback(async () => {
    const data = await axios.get("api/values/all");
    setValues(data.data.rows.map((row: any) => row.number));
  }, []);

  const saveNumber = useCallback(
    async (event: any) => {
      event.preventDefault();
      await axios.post("api/values", {
        value,
      });

      setValue("");
      getAllNumbers();
    },
    [value, getAllNumbers]
  );

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <div>
      <button onClick={getAllNumbers}>Get all number</button>
      <br />
      <span>values</span>
      <div>
        {values.map((value: number) => {
          return <div>{value}</div>;
        })}
      </div>
      <form onSubmit={saveNumber}>
        <label>Enter your number</label>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PageTwo;
