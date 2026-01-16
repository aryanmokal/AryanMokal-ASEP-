
export interface LoanOffer {
  bank: string;
  interestRate: number;
  monthlyEMI: number;
  benefits: string;
  isBestValue: boolean;
}

export interface RecommendationInput {
  amount: number;
  purpose: string;
  city: string;
  income: number;
}

export enum LoanCategory {
  EDUCATION = 'Education Loan',
  FARMER = 'Farmer Loan',
  SMALL_BUSINESS = 'Small Business Loan',
  HOME = 'Home Loan'
}
