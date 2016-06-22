import { observable } from 'mobx';

class AppState {
  @observable station = {
    id: '490006196F',
    label: 'Nat. Maritime Museum',
    type: 'bus'
  };
}

export default AppState;