import React, { createContext, useContext, useReducer } from 'react';

export const DataContext = createContext();

export const Data = ({ initalState, reducer, children }) => (
    <DataContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </DataContext.Provider>
)

export const useDataValue = () => useContext(DataContext);