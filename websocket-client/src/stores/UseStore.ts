import { useContext } from 'react';
import Context from './Context';
import ManagerStore from './ManagerStore';

function UseStore(): ManagerStore {
  return useContext(Context) as ManagerStore;
}

export default UseStore;
