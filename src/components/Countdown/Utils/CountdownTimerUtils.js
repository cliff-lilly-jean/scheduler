import dayjs from 'dayjs';

export function getRemainingTimeUntilEndtime(endtime) {
 const endtimeDayjs = dayjs(endtime);
 const nowDayjs = dayjs();
 return {
  seconds: getRemainingSeconds(nowDayjs, endtimeDayjs),
  minutes: getRemainingMinutes(nowDayjs, endtimeDayjs),
 };
}

let getRemainingSeconds = (nowDayjs, endtimeDayjs) => {
 const seconds = endtimeDayjs.diff(nowDayjs, 'seconds') % 60;
 console.log(nowDayjs);
 return seconds;

};

let getRemainingMinutes = (nowDayjs, endtimeDayjs) => {
 const minutes = endtimeDayjs.diff(nowDayjs, 'minutes') % 60;
 return minutes;
};