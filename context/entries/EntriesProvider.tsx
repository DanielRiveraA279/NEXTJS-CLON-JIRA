import React, { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];

}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat',
            status: 'in-progress',
            createAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminada: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat',
            status: 'finished',
            createAt: Date.now() - 100000,
        }
    ],

}

interface Props {
    children?: React.ReactNode
}

export const EntriesProvider: FC = ({ children }: Props) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {

        const newEntry: Entry = {
            _id: uuidv4(), //generamos el id
            description,
            createAt: Date.now(),
            status: 'pending',
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry });

    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] Updated-Entry', payload: entry });
    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
            addNewEntry,
            updateEntry
        }}>

            {children}

        </EntriesContext.Provider>
    )
}
