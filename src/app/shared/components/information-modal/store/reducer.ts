import { Action, createReducer, on } from '@ngrx/store';
import * as informationActions from './action';
import { InterfaceInformationModal } from './index';

export const initialInformationModalState: InterfaceInformationModal = {
    information: {
        message: '',
        title: ''
    },
    modal:  false,
};

export const informationReducer = createReducer(
    initialInformationModalState,
    on(informationActions.setInformation, (state: InterfaceInformationModal, action: { title: string, message: string }) => {
        const newState: InterfaceInformationModal = { ...state};
        newState.information = {
            message: action.message,
            title: action.title
        };
        return newState;
    }),
    on(informationActions.clearInformation, (state: InterfaceInformationModal) => {
        const newState: InterfaceInformationModal = { ...state};
        newState.information = {
            message: '',
            title: ''
        };
        return newState;
    }),
    on(informationActions.setModal, (state: InterfaceInformationModal, action: { open: boolean }) => {
        const newState: InterfaceInformationModal = { ...state};
        newState.modal = action.open;
        return newState;
    }),
);

export function reducer(state: InterfaceInformationModal | undefined, action: Action): InterfaceInformationModal {
    return informationReducer(state, action);
}