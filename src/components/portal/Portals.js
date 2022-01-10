import { useContext, createContext, useReducer, useCallback } from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext({});

const portalReducer = (state, action) => {
    switch (action.type) {
        case 'update_portal_ref':
            const { portalName, ref } = action;
            return {
                ...state,
                [portalName]: ref,
            };
        default:
            throw new Error();
    }
};
const initialPortalState = {};

export const PortalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(portalReducer, initialPortalState);
    return (
        <PortalContext.Provider value={{ state, dispatch }}>
            {children}
        </PortalContext.Provider>
    );
};

export const usePortal = (portalName) => {
    const { state, dispatch } = useContext(PortalContext);
    return [
        state[portalName],
        (ref) => dispatch({ type: 'update_portal_ref', portalName, ref })
    ];
};

export const Portal = ({ portalName, children }) => {
    const [portalTarget] = usePortal(portalName);

    console.log(portalTarget);

    return portalName ? createPortal(children, portalTarget) : null;
};

export const PortalTarget = ({ portalName }) => {
    const [, setPortalTarget] = usePortal(portalName);

    const setTargetMemo = useCallback(setPortalTarget, [portalName]);

    const ref = useCallback((node) => setTargetMemo(node), [setTargetMemo]);

    return (
        <div ref={ref} />
    );
};