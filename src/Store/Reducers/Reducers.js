export const userManagment = ( state = {} , action) =>{    
    const {type,payload} = action;
    switch(type){
        
        case 'SET_USER' : {
            state = payload;
            return state;
        }
        case 'DEL_USER' : {
            state={};
        }
        case 'UPDATE_USER' : {
            state = payload;
            return state;
        }
        default :
            return state;
    }
}