import data from '../data/data.json'

const defaultState = data;

export const PortfolioReducer = (state= defaultState, action) =>{
    switch (action.type){
        default: 
        return {...state};
    }
}