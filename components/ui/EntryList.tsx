import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { List, Paper } from '@mui/material'
import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './'
import { UIContext } from '../../context/ui';
import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]) //memorizar valores cuando las entries cambien

    //TODO: cuando se suelta la card en la columna
    const allowDrop = (event: DragEvent) => {
        event.preventDefault();
    }

    //TODO: cuando entra en la nueva columna la card al hacer drag
    const onDropEntry = (event: DragEvent) => {
        const id = event.dataTransfer.getData('text')
        const entry = entries.find(entry => entry._id === id)!; //signo es que siempre va a encontrar un elemento
        entry.status = status; //cambiamos status para que se quede al hacer drop
        updateEntry(entry);
        endDragging();  //finalizamos el evento del drop
    }

    return (
        //aqui se implementa el drop
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>
                {/* cambia segun este haciendo drag o no */}

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }

                </List>
            </Paper>
        </div>
    )
}
