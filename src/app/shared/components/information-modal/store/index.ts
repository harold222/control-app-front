import * as actions from './action';
import { initialInformationModalState, reducer } from './reducer';
import * as selectors from './selector';

import { InterfaceInformationModal } from './model/interface';

export * from './action';
export * from './reducer';
export * from './selector';

export {
    InterfaceInformationModal,
    actions,
    initialInformationModalState,
    reducer,
    selectors,
};
