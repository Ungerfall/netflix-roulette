export class DateExtensions {
    public static toYyyyMmDdFormat(date: Date): string {
        return date.toISOString().slice(0, 10);
    }
}