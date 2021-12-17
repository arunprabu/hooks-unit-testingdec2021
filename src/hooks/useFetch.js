import { useEffect, useState } from "react";

const useFetch = ( apiURL ) => {
  console.log(apiURL);

  const [data, setData] = useState(null);

  useEffect( () => {
    fetch(apiURL)
      .then( (res) => {
        return res.json();
      })
      .then( (jsonRes) => {
        console.log(jsonRes);
        setData(jsonRes);
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over');
      });
    return data;
  }, [apiURL]);
  return data;
}

export default useFetch;