import * as ErrorModal from '../shared/components/error-modal/store/index';
import * as Login from '../pages/public/login/store/index'
import * as InformationModal from '../shared/components/information-modal/store/index';
import * as Main from '../pages/admin/store/index';
import * as Fault from '../pages/admin/faults/store/index';

export const reducers: any = {
    ErrorModal: ErrorModal.reducer,
    InformationModal: InformationModal.reducer,
    Login: Login.reducer,
    Main: Main.reducer,
    Fault: Fault.reducer
}