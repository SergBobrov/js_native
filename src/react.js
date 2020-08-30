import {render} from './index.js'


let isInit = true;
let state;

const setState = (nextState) =>
{
    if (state !== nextState){
        isInit = false;
        state = nextState;
        render();
    }
}

 export const myUseState = (isInitState) => {
    if (isInit) {
        state = isInitState;
    }

    return [state, setState]
}