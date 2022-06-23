//Restfull api

import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = 
  |  {message: string} //o retorna esta respuesta tipo String
  |  IEntry[] // o esta otra respuesta tipo array para el get
  |  IEntry


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            
            return getEntries(res)
    
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }

    res.status(200).json({ message: 'Example' })
}


const getEntries = async (res: NextApiResponse<Data>) => {

    //leer la bd
    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();

    res.status(200).json( entries ); //regresamos el array de entradas

}