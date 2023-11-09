import {createContext, useContext, useEffect, useState} from "react";

const BASE_URL = 'http://localhost:8000';

const CityContext = createContext(null);

function CitiesProvider({children}){
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

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

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            console.log('There was an error loading data...')
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setCities(cities => [...cities, data]);
        } catch {
            console.log('There was an error loading data...')
        } finally {
            setIsLoading(false);
        }
    }

    return <CityContext.Provider
        value={{
            cities,
            isLoading,
            currentCity,
            getCity,
            createCity,
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