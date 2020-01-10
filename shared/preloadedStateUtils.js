
//class PreloadedStateService {

    //Not the best "API" design, but if we don't want a specific property from the "state" object, then specifying an empty property will give us the whole "state" object
    function getFromPreloadedState(propertyName, componentProps){
        if((componentProps !== undefined && componentProps.hasOwnProperty(propertyName)) || (componentProps !== undefined && propertyName === '') ){
            
            if(propertyName===''){
                return componentProps;
            }

            return componentProps[propertyName];
        }

        if(window !== undefined && window !== null && window.__SERIALIZED_STATE__ !== undefined){
            if(window.__SERIALIZED_STATE__ !== null){
                
                if(propertyName===''){
                    return window.__SERIALIZED_STATE__;
                }
                
                return window.__SERIALIZED_STATE__[propertyName];
            }
        }
    }
//}

export default getFromPreloadedState;