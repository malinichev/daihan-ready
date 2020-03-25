import {homepageSlider1Api, getHomePageSliderItemApi} from '../api';

import {stopSubmit} from 'redux-form';
import {isDataLoad} from './app-reduser';



const DEL_SLIDER1 = 'homepage/DEL_SLIDER1';
const UPDATE_ONE_1SLIDER = 'homepage/UPDATE_ONE_1SLIDER';
const IS_SLIDER1_LOAD = 'homepage/IS_SLIDER1_LOAD';
const SET_HOMEPAGE_SLIDER_ITEMS = 'homepage/SET_HOMEPAGE_SLIDER_ITEMS';
const IS_ERROR_HOMEPAGE = 'homepage/IS_ERROR';
const SET_ONE_TITLE_SLIDER = 'homepage/SET_ONE_TITLE_SLIDER';


const initState = {
    
        
    
    isSlider1Load:false,
    isErrorHP:false,
    hpSliderItems:[],
        
    
};

const homepageReduser = (state = initState, action) => {
    switch (action.type) {
        case SET_ONE_TITLE_SLIDER:
            return {
                ...state,
                ...state.hpSliderItems,
                hpSliderItems: [...state.hpSliderItems, action.hpSliderItems]
            }
        case UPDATE_ONE_1SLIDER:
            // let idX = state.hpSliderItems.findIndex(el=>el.id===action.updateDataItem.id)
            return {
                state,
                // ...state.hpSliderItems,
                // hpSliderItems: [...state.hpSliderItems.slice(0, idX),action.updateDataItem, ...state.hpSliderItems.slice(idX + 1)]
            }
       
        case IS_SLIDER1_LOAD:
            
            return {
                ...state,
                isSlider1Load: action.isSlider1Load  
            };
        case IS_ERROR_HOMEPAGE:
            return {
                ...state,
                isLoad: false,
                isError: action.isError  
            };
        case SET_HOMEPAGE_SLIDER_ITEMS:
            
            return {
                ...state,
                ...state.hpSliderItems,
                hpSliderItems: [...action.hpSliderItems]
            };
        case DEL_SLIDER1:
            return {
                state
            };
        default:
            return state;
    }
};


export const isSlider1Load = (isSlider1Load) => ({
    type: IS_SLIDER1_LOAD,
    isSlider1Load
})
export const setHpSliderItems = (hpSliderItems) => ({
    type: SET_HOMEPAGE_SLIDER_ITEMS,
    hpSliderItems
})
export const setErrorHP = (err) => ({
    type: IS_ERROR_HOMEPAGE,
    err
})
export const setOneTitleSlider = (hpSliderItems) => ({
    type: SET_ONE_TITLE_SLIDER,
    hpSliderItems
})
export const updateOne1Slider = () => ({
    type: UPDATE_ONE_1SLIDER
})



export const updateOneHPSlider1 = (updateDataItem) => async  (dispatch) => {    
        try {
            dispatch(isDataLoad(false));
            dispatch(isSlider1Load(false));

            await homepageSlider1Api.editTitleSlider(updateDataItem)
            let hpSliderItems = await getHomePageSliderItemApi()

            dispatch(setHpSliderItems(hpSliderItems))
            dispatch(isSlider1Load(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorHP(false));
            
            
                
          } 
        catch(err) {
            let action = stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                dispatch(action);
                dispatch(setErrorHP(err));
                dispatch(isDataLoad(true));
                dispatch(isSlider1Load(true));
                console.log('errrr dell slider')
          }

}  
export const delOneHPSlider1 = (idDeletedSlider) => async  (dispatch) => {    
        try {
            dispatch(isDataLoad(false));
            dispatch(isSlider1Load(false));

            await homepageSlider1Api.deleteTitleSlider(idDeletedSlider)
            let hpSliderItems = await getHomePageSliderItemApi()

            dispatch(setHpSliderItems(hpSliderItems))
            dispatch(isSlider1Load(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorHP(false));
                
                
          } 
        catch(err) {
            let action = stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                dispatch(action);
                dispatch(setErrorHP(err));
                dispatch(isDataLoad(true));
                dispatch(isSlider1Load(true));
                console.log('errrr dell slider')
          }

}  
export const setNewSlide1InHomepage= (newSliderData) => {
    return async dispatch => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isSlider1Load(false));

            await homepageSlider1Api.addOneNewTitleSlider(newSliderData)
            let getSliderItemsWithNewSlideronServer = await getHomePageSliderItemApi()
            
            dispatch(setHpSliderItems(getSliderItemsWithNewSlideronServer))
            dispatch(isSlider1Load(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorHP(false));
    
            
                
        }catch(err) {
                let action = stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                    dispatch(action);
                    dispatch(setErrorHP(err));
                    dispatch(isSlider1Load(true));
                    dispatch(isDataLoad(true));
                    console.log('errrr Create New slider')
              }


        
    }
}






export default homepageReduser