import { FC, DragEvent, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext(UIContext)

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id); //grabar el id, en las propiedades del drag como un objeto llamado text

        // TODO: modificar el estado, para indicar que estoy haciendo drag
        startDragging();
    }

    const onDragEnd = () => {
        //TODO: candelar onDrag
        endDragging();
    }

    return (
        <Card
            sx={{ marginBottom: 1 }}
            //Eventos de drag and drop
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30 minutos</Typography>

                </CardActions>
            </CardActionArea>
        </Card>
    )
}
