export function datesComparer(a: Date, b: Date): number {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};

export function stringComparer(a: string | undefined, b: string | undefined): number {
    if (a === undefined || b === undefined)
        return 0;

    return a.localeCompare(b);
};