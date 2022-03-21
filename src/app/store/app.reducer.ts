import * as ErrorModal from '../shared/components/error-modal/store/index';
import * as Login from '../pages/public/login/store/index'

export const reducers: any = {
    ErrorModal: ErrorModal.reducer,
    Login: Login.reducer
}