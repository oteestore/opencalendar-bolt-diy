
    import { YearData } from './types';

    // Data obtained from various sources including gov.za and officeholidays.com
    // Please verify accuracy for critical use.

    export const data: YearData[] = [
      // --- 2022 ---
      {
        year: 2022,
        publicHolidays: [
          { name: "New Year's Day", date: "2022-01-01", day: "Saturday", type: "National holiday" },
          { name: "Public holiday", date: "2022-01-02", day: "Sunday", type: "National holiday", comments: "New Year's Day observed" },
          { name: "Public holiday", date: "2022-01-03", day: "Monday", type: "National holiday", comments: "New Year's Day observed" },
          { name: "Human Rights Day", date: "2022-03-21", day: "Monday", type: "National holiday" },
          { name: "Good Friday", date: "2022-04-15", day: "Friday", type: "National holiday" },
          { name: "Family Day", date: "2022-04-18", day: "Monday", type: "National holiday" },
          { name: "Freedom Day", date: "2022-04-27", day: "Wednesday", type: "National holiday" },
          { name: "Workers' Day", date: "2022-05-01", day: "Sunday", type: "National holiday" },
          { name: "Public holiday", date: "2022-05-02", day: "Monday", type: "National holiday", comments: "Workers' Day observed" },
          { name: "Youth Day", date: "2022-06-16", day: "Thursday", type: "National holiday" },
          { name: "National Women's Day", date: "2022-08-09", day: "Tuesday", type: "National holiday" },
          { name: "Heritage Day", date: "2022-09-24", day: "Saturday", type: "National holiday" },
          { name: "Day of Reconciliation", date: "2022-12-16", day: "Friday", type: "National holiday" },
          { name: "Christmas Day", date: "2022-12-25", day: "Sunday", type: "National holiday" },
          { name: "Day of Goodwill", date: "2022-12-26", day: "Monday", type: "National holiday" },
          { name: "Public holiday", date: "2022-12-27", day: "Tuesday", type: "National holiday", comments: "Christmas Day observed" },
        ],
        schoolTerms: [ // Inland & Coastal Combined for simplicity - Source: DBE Calendar 2022
          { term: 1, duration: '12 Jan - 17 Mar', publicHolidays: '21 Mar (after term)', weeks: 10, days: 66, schoolDays: 47 },
          { term: 2, duration: '05 Apr - 24 Jun', publicHolidays: '15, 18, 27 Apr; 2 May; 16 Jun', weeks: 12, days: 81, schoolDays: 54 },
          { term: 3, duration: '19 Jul - 30 Sep', publicHolidays: '9 Aug', weeks: 11, days: 74, schoolDays: 53 },
          { term: 4, duration: '11 Oct - 14 Dec', publicHolidays: 'None', weeks: 9, days: 65, schoolDays: 46 },
        ],
      },
      // --- 2023 ---
      {
        year: 2023,
        publicHolidays: [
          { name: "New Year's Day", date: "2023-01-01", day: "Sunday", type: "National holiday" },
          { name: "Public holiday", date: "2023-01-02", day: "Monday", type: "National holiday", comments: "New Year's Day observed" },
          { name: "Human Rights Day", date: "2023-03-21", day: "Tuesday", type: "National holiday" },
          { name: "Good Friday", date: "2023-04-07", day: "Friday", type: "National holiday" },
          { name: "Family Day", date: "2023-04-10", day: "Monday", type: "National holiday" },
          { name: "Freedom Day", date: "2023-04-27", day: "Thursday", type: "National holiday" },
          { name: "Workers' Day", date: "2023-05-01", day: "Monday", type: "National holiday" },
          { name: "Youth Day", date: "2023-06-16", day: "Friday", type: "National holiday" },
          { name: "National Women's Day", date: "2023-08-09", day: "Wednesday", type: "National holiday" },
          { name: "Heritage Day", date: "2023-09-24", day: "Sunday", type: "National holiday" },
          { name: "Public holiday", date: "2023-09-25", day: "Monday", type: "National holiday", comments: "Heritage Day observed" },
          { name: "Day of Reconciliation", date: "2023-12-16", day: "Saturday", type: "National holiday" },
          { name: "Christmas Day", date: "2023-12-25", day: "Monday", type: "National holiday" },
          { name: "Day of Goodwill", date: "2023-12-26", day: "Tuesday", type: "National holiday" },
        ],
        schoolTerms: [ // Inland & Coastal Combined - Source: DBE Calendar 2023
          { term: 1, duration: '11 Jan - 24 Mar', publicHolidays: '21 Mar', weeks: 11, days: 73, schoolDays: 52