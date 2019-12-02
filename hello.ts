import tz, {format} from 'date-fns-tz';

// local time doesn't have timezone info
const localTime = '2019-11-22 01:02:03';
console.log('localTime', localTime);

const utcTime = tz.zonedTimeToUtc(localTime, 'Asia/Shanghai')
console.log('utcTime', utcTime);

// const zonedTime = tz.utcToZonedTime(utcTime, 'America/New_York', {})
// console.log('zonedTime', zonedTime);

const pattern = 'yyyy-MM-dd HH:mm:ss'
const output = format(utcTime, pattern, {timeZone: 'America/New_York'})
console.log('output', output);
