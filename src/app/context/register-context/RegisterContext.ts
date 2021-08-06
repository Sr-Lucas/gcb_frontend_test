import { createContext, Dispatch } from 'react';
import { INITIAL_STATE, RegisterState } from './reducer';

interface RegisterContextType {
  state: RegisterState;
  dispatch: Dispatch<any>;
}

export const RegisterContext = createContext<RegisterContextType>({
  state: INITIAL_STATE,
  dispatch: {} as Dispatch<any>,
});
