import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Phone, SearchPhoneParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchPhone = createAsyncThunk<Phone[], SearchPhoneParams>(
  'phone/fetchPhoneStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Phone[]>(`https://618e3ea350e24d0017ce1178.mockapi.io/Items`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 6,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });
   
    return data;
  },
);
