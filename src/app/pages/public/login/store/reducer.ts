import { InterfaceLoginState } from './interfaces/InterfaceLoginState';
import { createReducer, on, Action } from '@ngrx/store';
import { setLoading } from './action';

export const initialLoginState: InterfaceLoginState = {
    loading: false
}

export const Login = createReducer(
    initialLoginState,
    on(setLoading, (state: InterfaceLoginState, action: { loading: boolean }) => {
        const newState: InterfaceLoginState = {...state};
        newState.loading = action.loading;
        return newState;
    }),
)

export function reducer(state: InterfaceLoginState | undefined, action: Action): InterfaceLoginState {
    return Login(state, action);
}