import React, { ReactNode, useReducer } from 'react';
import reducer, { INITIAL_STATE } from './reducer';
import { RegisterContext } from './RegisterContext';

export interface RegisterContextProps {
  children?: ReactNode;
}

const RegisterContextProvider: React.FC<RegisterContextProps> = ({
  children,
}: RegisterContextProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <RegisterContext.Provider value={{ state, dispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
