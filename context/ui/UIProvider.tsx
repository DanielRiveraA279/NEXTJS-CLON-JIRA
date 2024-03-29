import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

interface Props {
    children?: React.ReactNode
}

export const UIProvider: FC = ({ children }: Props) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' });
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
    }

    const startDragging = () => {
        dispatch({ type: 'UI - Start Dragging' });

    }

    const endDragging = () => {
        dispatch({ type: 'UI - End Dragging' });

    }

    return (
        <UIContext.Provider value={{
            ...state, //aqui enviamos para el sidebar el 'sidemenuOpen'

            //Methods
            openSideMenu,
            closeSideMenu,

            setIsAddingEntry,

            endDragging,
            startDragging
        }}>

            {children}

        </UIContext.Provider>
    )
}
