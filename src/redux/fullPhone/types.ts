export type Phone = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  
  display: string;
  processor:string;
  ram: number;
  battery: number;
  cameras: string;
  frontalCamera:string;
  nfc: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchFullPhoneParams = {
  id: number
};

export interface FullPhoneSliceState {
  items: Phone[];
  status: Status;
}