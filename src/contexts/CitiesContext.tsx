import React, { createContext, useCallback, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext(undefined);

const BASE_URL = 'http://localhost:8000'

type initialStateType = {
    cities: Object[],
    isLoading: boolean,
    currentCity: {},
    error: "",
}
type stateType = {
    action:{
        type: string,
        payload?:''
    },
    state:initialStateType
}

const initialState:initialStateType={
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
}


const reducer = ({state, action}:stateType) =>{
    switch(action.type){
        case 'loading':
            return {
                ...state,
                isLoading:true
            }

        case 'cities/loaded':
            return{
                ...state,
                isLoading:false,
                cities:action.payload
            }
        case 'city/created':
            return{
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
                currentCity: action.payload
            }

        case 'city/loaded':
            return{
                ...state,
                isLoading: false,
                currentCity: action.payload,
            }

        case 'city/deleted':
            return{
                ...state,
                isLoading: false,
                currentCity: {},
                cities: state.cities.filter((city:{id:string}) => city.id !== action.payload)
            }

        case 'rejected':
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }

        default:
            throw new Error('Unknown action type')
    }
}

type CitiesProviderType = {
    children: React.ReactNode
}

const CitiesProvider = ({children}:CitiesProviderType) => {

    const [{cities, isLoading, currentCity, error}, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        const fetchCities = async () => {
            dispatch({type:'loading'})
            try {
            const res = await fetch(`${BASE_URL}/cities`);
            const data = await res.json()
            dispatch({type:'cities/loaded', payload: data})
            }
            catch {
            dispatch({type:'rejected', payload:"ERROR"})
            }
        }
        fetchCities()
        }, [])

    const getCity = useCallback(
        async function getCity (id:number){
        if(Number(id) === currentCity.id) return;

        dispatch({type:'loading'})
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json()
            dispatch({type: 'city/loaded', payload:data})
        }
        catch {
            dispatch({type:'rejected', payload:"ERROR"})
        }
    }, [currentCity.id])
    const createCity = async (newCity) => {
        dispatch({type:'loading'})
        try {
            const res = await fetch(`${BASE_URL}/cities`,{ method : 'POST', body: JSON.stringify(newCity), headers: {"Content-Type" : "application/json"}});
            const data = await res.json()

            dispatch({type:'city/deleted', payload: data})
        }
        catch {
            dispatch({type:'rejected', payload:"ERROR"})
        }

    }


    const deleteCity = async (id:number) => {
        dispatch({type:'loading'})
        try {
            await fetch(`${BASE_URL}/cities`,{ method : 'DELETE'});
            dispatch({type: 'city/deleted', payload: id})
        }
        catch {
            dispatch({type:'rejected', payload:"ERROR"})
        }

}


    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCity,
                createCity,
                deleteCity,
                error
            }}
        >
            {children}
        </CitiesContext.Provider>
    )
}

const useCities = () => {
    const context = useContext(CitiesContext)
    if (context===undefined) throw new Error ('Outside context')
    return context
}

export {CitiesProvider, useCities}