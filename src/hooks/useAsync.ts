import React, { useEffect, useState } from 'react';


type StatusType = 'idle' | 'pending' | 'success' | 'error';

const useAsync = <T>(asynFunction: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<StatusType>('idle');
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        setStatus('pending')
        setData(null)
        setError(null) 
        asynFunction()
            .then(res => {
                setData(res)
                setStatus('success')
                setError(null)
            })
            .catch((err) => {
                setError(err)
                setStatus('error')
                setData(null)
            })

    }, [asynFunction])

    return (
      {
        data,
        error,
        isLoading:status ==='pending',
        isSuccess:status ==='success',
        isError:status === 'error'
      }
    );
};

export default useAsync;