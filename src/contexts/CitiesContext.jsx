import {createContext, useContext, useEffect, useState} from "react";

const BASE_URL = 'http://localhost:8000';

const CityContext = createContext(null);

function CitiesProvider({children}){
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function (){
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            }catch{
                console.log('There was an error loading data...')
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);

    return <CityContext.Provider
        value={{
            cities,
            isLoading
        }}>
        {children}
    </CityContext.Provider>
}

function useCities() {
    const context = useContext(CityContext);
    if (context === undefined) throw new Error("CitiesContext was used outside the CitiesProvider");
    return context;
}

export {CitiesProvider, useCities}