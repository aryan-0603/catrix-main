export interface UserRegistration {
  fullName: string;
  email: string;
  phone: string;
  attemptYear: string;
}

export enum AttemptYear {
  Y2026 = "2026",
  Y2027 = "2027",
  Y2028 = "2028"
}