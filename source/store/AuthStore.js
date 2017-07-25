import AuthConstants from 'constants/AuthConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

export function setUser(profile, token) {
  //if (!sessionStorage.getItem('id_token')) {
    sessionStorage.setItem('profile', JSON.stringify(profile));
    sessionStorage.setItem('id_token', token);
  //}
}

export function removeUser() {
  sessionStorage.removeItem('profile');
  sessionStorage.removeItem('id_token');
}

class AuthStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  isAuthenticated() {
    if (sessionStorage.getItem('id_token')) {
      return true;
    }
    return false;
  }

  getUser() {
    return sessionStorage.getItem('profile');
  }

  getJwt() {
    return sessionStorage.getItem('id_token');
  }
}

export const AuthStore = new AuthStoreClass();