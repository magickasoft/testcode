import { StyleSheet } from 'react-native';

export function getCalendarTheme(theme) {
  return (
    {
      calendarBackground: theme.colors.white,
      dayTextColor: theme.colors.blackOpacity,
      textDisabledColor: theme.colors.lightGrey,
      todayTextColor: theme.colors.yellow,
      monthTextColor: theme.colors.blackOpacity,
      'stylesheet.calendar.header': {
        week: {
          marginTop: 7,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: theme.colors.border,
        },
      },
      'stylesheet.day.period': {
        base: {
          width: 34,
          height: 34,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        text: {
          fontSize: 16,
          fontFamily: 'System',
          color: theme.colors.blackOpacity,
        },
      },
    }
  );
}

export function markedDatesTheme(theme) {
  return {
    startingDay: true,
    endingDay: true,
    selected: true,
    color: theme.colors.lightestGrey,
    textColor: theme.colors.white,
  };
}
