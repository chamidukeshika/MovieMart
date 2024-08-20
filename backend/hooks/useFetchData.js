import axios from "axios";
import { useEffect, useState } from "react";


function useFetchData(apiEndpoints) {
    const [alldata, setAlldata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (initialLoad) {
            setInitialLoad(false);
            setLoading(false);
            return; //exit useEffect
        }

        // set loading to true to indicate data fetching 
        setLoading(true);

        const fetchAllData = async () => {
            try {
                const res = await axios.get(apiEndpoints);
                const alldata = res.data;
                setAlldata(alldata);
                setLoading(false);
            } catch (error) {
                console.log("error fetching movie data");
                setLoading(false)//set false if theres no any error

            } 
        };

        //fetch movie data if exist

        if (apiEndpoints) {
            fetchAllData();
        }
    }, [initialLoad, apiEndpoints]);
    return { alldata, loading }
}

export default useFetchData;