import User from 'src/types/admin/user';
import { IApiResponse } from 'src/types/requests';

export type ErrCallbackType = (err: IApiResponse) => void;

export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type AuthValuesType = {
  loading: boolean;
  authLoading: boolean;
  logout: () => void;
  user: User | null;
  setLoading: (value: boolean) => void;
  setAuthLoading: (value: boolean) => void;
  setUser: (value: User | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
  setIsGuestGuard: (isGuestGuard: boolean) => void;
  isGuestGuard: boolean;
};
