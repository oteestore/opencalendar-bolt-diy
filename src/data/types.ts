export interface PublicHoliday {
      name: string;
      date: string; // YYYY-MM-DD format for consistency
      day: string; // e.g., Monday
      type: string; // e.g., National holiday
      comments?: string; // Optional comments
    }

    export interface SchoolTerm {
      term: number | string; // e.g., 1 or 'Coastal Term 1'
      duration: string; // e.g., '17 Jan - 20 Mar'
      publicHolidays?: string; // e.g., '21 Mar' or 'None'
      weeks: number;
      days: number;
      schoolDays: number;
    }

    export interface YearData {
      year: number;
      publicHolidays: PublicHoliday[];
      schoolTerms: SchoolTerm[]; // Can be split inland/coastal if needed, simplifying for now
    }
