
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Phone, SearchFullPhoneParams } from './types';


export const fetchFullPhone = createAsyncThunk<Phone[], any>(
  'fullPhone/fetchFullphoneStatus',
  async (params) => {
    const { data } = await axios.get<Phone[]>(`https://618e3ea350e24d0017ce1178.mockapi.io/Items?id=${params}`,)
    return data;
  },
);