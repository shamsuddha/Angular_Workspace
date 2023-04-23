import * as moment from 'moment';

export function currentDateTime(pattern: string = 'YYYY-MM-DD HH:mm:ss'): string {
  return moment().format(pattern);
}

export function dateToString(date: moment.Moment, pattern: string = 'YYYY-MM-DD'): string {
  if (moment(date).format(pattern) === 'Invalid date') {
    throw new Error('dateToString Invalid date error');
  }
  return moment(date).format(pattern);
}

export function stringToDate(dateStr: string, pattern: string = 'YYYY-MM-DD'): moment.Moment {
  if (dateStr && dateStr!=='') {
    return moment(dateStr, pattern);
  }
  throw new Error('stringToDate error');
}
