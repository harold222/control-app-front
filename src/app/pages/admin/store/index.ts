import * as actions from './action';
import { initialMainState, reducer } from './reducer';
import * as selectors from './selector';

import { InterfaceMainState } from './interfaces/InterfaceMainState';

export * from './action';
export * from './reducer';
export * from './selector';

export {
    InterfaceMainState,
    actions,
    initialMainState,
    reducer,
    selectors,
};
