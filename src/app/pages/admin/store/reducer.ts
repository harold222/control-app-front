import { InterfaceMainState } from './interfaces/InterfaceMainState';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './action';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';

export const initialMainState: InterfaceMainState = {
    loading: true,
    user: {
        email: '',
        exp: 0,
        id: '',
        image: '',
        lastname: '',
        name: '',
        rol: ''
    }
}

export const Main = createReducer(
    initialMainState,
    on(actions.setLoading, (state: InterfaceMainState, action: { loading: boolean }) => {
        const newState: InterfaceMainState = {...state};
        newState.loading = action.loading;
        return newState;
    }),
    on(actions.setUserInfo, (state: InterfaceMainState, action: { user: InterfaceUserInfo }) => {
        const newState: InterfaceMainState = {...state};
        newState.user = action.user;
        return newState;
    }),
)

export function reducer(state: InterfaceMainState | undefined, action: Action): InterfaceMainState {
    return Main(state, action);
}