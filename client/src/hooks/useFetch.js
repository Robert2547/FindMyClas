import { useState, useEffect } from "react";

function useFetch() {
  const [values, setValues] = useState(null);
  const [pending, setPending] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(
    (url) => {
      const abortFetch = new AbortController();
      fetch(url, { signal: abortFetch.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data for that resource");
          }
          res.json();
        })
        .then((data) => {
          setValues(data);
          setPending(false);
          setErrors(null);
        })
        .catch((err) => {
          // if the fetch is aborted, don't update state
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // otherwise, update state
            setPending(false);
            setErrors(err.message);
          }
        });
      return () => abortFetch.abort(); // abort the fetch
    },
    [url]
  );

  return { values, pending, errors };
}

export default useFetch;
