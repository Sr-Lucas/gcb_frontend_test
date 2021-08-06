import { Reducer } from 'react';
import Cookies from 'universal-cookie';
import AddAccount from '../../usecases/AddAccount';

export interface RegisterState {
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  data: AddAccount;
}

export const INITIAL_STATE: RegisterState = {
  status: 'idle',
  data: {
    address: '',
    birthDate: '',
    cep: '',
    city: '',
    cpf: '',
    name: '',
    neighborhood: '',
    number: '',
    reference: '',
    state: '',
  },
};

function setRegisterData(payload: any, state: RegisterState): RegisterState {
  state.data = {
    ...state.data,
    ...payload.data,
  };

  return state;
}

function saveUser(state: RegisterState): RegisterState {
  const cookies = new Cookies();

  localStorage.setItem('REGISTER_PERSIST', JSON.stringify(state.data));
  cookies.set('REGISTER_PERSIST', state.data, { path: '/' });

  return state;
}

function fetchAddress(state: RegisterState): RegisterState {
  // eslint-disable-next-line no-debugger
  debugger;
  state.data.state = 'b';
  return state;
}

const reducer: Reducer<RegisterState, any> = (state, action) => {
  switch (action.type) {
    case 'SET_REGISTER_DATA':
      setRegisterData(action.payload, state);
      break;
    case 'SAVE_USER':
      saveUser(state);
      break;
    case 'FETCH_ADDRESS':
      fetchAddress(state);
      break;
    default:
  }

  return state;
};

export default reducer;
