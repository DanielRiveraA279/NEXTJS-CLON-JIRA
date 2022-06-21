

export interface Entry {
    _id: string;
    description: string;
    createAt: number;
    status: string; //pending, in-progress, done, finished
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';
