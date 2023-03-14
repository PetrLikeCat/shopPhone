import { RootState } from '../store';

export const selectFullPhone = (state: RootState) => state.fullPhone;
export const selectSort = (state: RootState) => state.filter.sort;