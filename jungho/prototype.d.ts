declare global {
    interface Array<T> {
        myMap<U>(callback: (value: T, index: number, array: T[]) => U): U[];
        myForEach(callback: (value:T, index: number, array:T[]) => void): void;
        myReduce<U>(callback: (acuumulate: T, value: T, array:T[]) => U, initialValue: T): U[]
        mySome<U>(callback: (value: T, index: number, array: T[]) => U): Boolean;
        myFilter<U>(callback: (value: T, index: number, array: T[]) => U): U[];
        myEvery<U>(callback: (value: T, index: number, array: T[]) => U): Boolean;
        myFlat(this: T[], depth?: number): T[];
        myFlatMap<U>(callback: (current: T) => U[]): U[];
    }
}

export {}