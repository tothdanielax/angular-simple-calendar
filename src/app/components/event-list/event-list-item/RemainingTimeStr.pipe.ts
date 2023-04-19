import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'remainingTimeStr',
})
export class RemainingTimeStrPipe implements PipeTransform {
    transform(value: number): string {

        if (!value || value < 0) return '';

        const remainingDate: Date = new Date(value);

        const years: number = remainingDate.getUTCFullYear() - 1970;
        const months: number = remainingDate.getUTCMonth();
        const days: number = remainingDate.getUTCDate() - 1;
        const hours: number = remainingDate.getUTCHours();
        const minutes: number = remainingDate.getUTCMinutes();
        const seconds: number = remainingDate.getUTCSeconds();

        let result: string[] = [];

        if (years > 0) {
            result.push(years + ' év');
        }

        if (months > 0) {
            result.push(months + ' hónap');
        }

        if (days > 0) {
            result.push(days + ' nap');
        }

        if (hours > 0) {
            result.push(hours + ' óra');
        }

        if (minutes > 0) {
            result.push(minutes + ' perc');
        }

        if (seconds > 0) {
            result.push(seconds + ' másodperc');
        }

        return result.length > 0 ? result.join(', ') + ' múlva' : 'Most';
    }
}
