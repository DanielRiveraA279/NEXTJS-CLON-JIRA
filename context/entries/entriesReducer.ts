
import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType = 
| {type: '[Entry] Add-Entry', payload: Entry}
| {type: '[Entry] Updated-Entry', payload: Entry}

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

     switch (action.type) {
          case '[Entry] Add-Entry':
               return {
                    ...state,
                    entries: [...state.entries, action.payload]
               }
          case '[Entry] Updated-Entry':
               return {
                    ...state,
                    entries: state.entries.map(entry => {
                         if(entry._id === action.payload._id ) {
                              entry.status = action.payload.status; //cambiamos estado si los ids coinciden
                              entry.description = action.payload.description;
                         }
                         return entry; //regresamos la entrada modificada
                    })

               }
          default:
               return state
     }

}
