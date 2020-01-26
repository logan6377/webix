import React from 'react'
const init = ["1"];

export function rootReducer(state=init, action){
    switch(action.type){
        case "report":
        return { ...state, ...action.payload}
        default:
        return state
    }
}

 