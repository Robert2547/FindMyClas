import React, {useState, useEffect} from 'react'

function useForm() {
    const [values, setValues] = useState(null);
    const[pending, setPending] = useState(true);
    const[errors, setErrors] = useState(null);

    useEffect((url) => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch data for that resource')
            }
            res.json()}).then(data => {
                setValues(data);
                setPending(false);
                setErrors(null);
            })
            .catch(err => {
                setPending(false);
                setErrors(err.message);
            })
    }, [])
    
  return {values, pending, errors}
}

export default useForm