export const userManagment = ( state = {} , action) =>{    
    const {type,payload} = action;
    switch(type){
        
        case 'SET_USER' : {
            state = payload;
            return state;
        }
        case 'DEL_USER' : {
            console.log('chala');
            state={};
        }
        default :
            return state;
    }
}