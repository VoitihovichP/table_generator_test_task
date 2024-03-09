import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '../store/store';

export const useAppDispatch = (): Dispatch<UnknownAction> =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
