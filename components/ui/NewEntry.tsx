import { ChangeEvent, useContext, useState } from 'react'
import { Button, TextField } from '@mui/material'

import { SaveOutlined, AddCircleOutline } from '@mui/icons-material'
import { Box } from '@mui/system'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

    const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false); //que ya lo presiono al boton

    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {

        if (inputValue.length === 0) return;

        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{
            marginBottom: 2,
            paddingX: 2
        }}>

            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{
                                marginTop: 2,
                                marginBottom: 1
                            }}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                            error={inputValue.length <= 0 && touched} //que este vacio y que se halla enfocado el cursor en la caja
                            value={inputValue}
                            onChange={onTextFieldChange}
                            onBlur={() => setTouched(true)} //cuando pierde el foco del cursor en la caja
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
                                Cancelar
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={<SaveOutlined />}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={<AddCircleOutline />}
                        fullWidth
                        variant='outlined'
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Agregar Tarea
                    </Button>
                )
            }

        </Box>
    )
}
