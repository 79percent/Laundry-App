import moment from 'moment';

export const i18nMap = {
  zh: {
    save: '保存',
    clear: '清除',
    startTime: '开始时间',
    endTime: '结束时间',
    week: ['日', '一', '二', '三', '四', '五', '六'],
    weekdays: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ],
    month: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
  },
  en: {
    save: 'Save',
    clear: 'Clear',
    startTime: 'Start Date',
    endTime: 'End Date',
    week: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    weekdays: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    month: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
};

export const month12Days = moment().set('month', 11).daysInMonth();

export const defaultMinDate = moment()
  .set({ month: 0, date: 1 })
  .format('YYYYMMDD');

export const defaultMaxDate = moment()
  .set({ month: 11, date: month12Days })
  .format('YYYYMMDD');

export const getMonthList = (min, max, months = []) => {
  const minDate = moment(min);
  const maxDate = moment(max);
  const monthMap = {};
  while (minDate.dayOfYear() < maxDate.dayOfYear()) {
    const month = minDate.month();
    const day = minDate.date();
    if (monthMap[month]) {
      monthMap[month].days.push({
        day,
        date: minDate.format('YYYYMMDD'),
      });
    } else {
      const week = minDate.day();
      const prevEmptys = new Array(week).fill(null);
      monthMap[month] = {
        month: months[month],
        days: [
          ...prevEmptys,
          {
            day,
            date: minDate.format('YYYYMMDD'),
          },
        ],
      };
    }
    minDate.add(1, 'd');
  }
  return Object.values(monthMap);
};
