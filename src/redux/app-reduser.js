import {getHomePageSliderItemApi, CatalogItemsApi} from '../api';
import {setIsLogIn} from './auth-reduser';
import {isSlider1Load, setHpSliderItems} from './homepage-reduser';
import {setItems, isItemsLoad} from './catalog-reduser';




const IS_DATA_LOAD = 'app/IS_DATA_LOAD';
const IS_ERROR = 'app/IS_ERROR';
const IS_INDEX = 'app/IS_INDEX';


const initState = {
        isIndex: true,
        isDataLoad:false,
        isError:false,
};

const appReduser = (state = initState, action) => {
    switch (action.type) {
       
        case IS_INDEX:
            
            return {
                ...state,
                isIndex: action.isIndex  
            };
       
        case IS_DATA_LOAD:
            
            return {
                ...state,
                isDataLoad: action.isDataLoad  
            };
       
        case IS_ERROR:
            return {
                ...state,
                isLoad: false,
                isError: action.isError  
            };
      
        default:
            return state;
    }
};



export const isDataLoad = (isDataLoad) => ({
    type: IS_DATA_LOAD,
    isDataLoad
})
export const setIsIndexAC = (isIndex) => ({
    type: IS_INDEX,
    isIndex
})

export const isError = (isError) => ({

    type: IS_ERROR,
    isError
})


export const setIsIndex = (isIndex) => async (dispatch) => {
    dispatch(setIsIndexAC(isIndex))
}
export const initializeApp = () => async (dispatch) => {

    try{
        
        dispatch(isDataLoad(false));
        dispatch(isSlider1Load(false));
        dispatch(isItemsLoad(false));
        dispatch(isError(false));

        let hpSliderItems =  getHomePageSliderItemApi()
        let categoryAndItems =  CatalogItemsApi.getCategoryAndItemsApi()

        if(!!localStorage.getItem('token')){
            dispatch(setIsLogIn({
                email:localStorage.getItem('email'),
                token:localStorage.getItem('token'),
            }));
            
        }
        
        let el = await Promise.all([hpSliderItems, categoryAndItems])

        dispatch(setHpSliderItems(el[0]))
        dispatch(setItems(el[1]))
        dispatch(isSlider1Load(true));
        dispatch(isItemsLoad(true));
        dispatch(isDataLoad(true));
        dispatch(isError(false));
    }catch(err){
        console.log('errrr')
    }  
}


export default appReduser