import BaseRequest from '../libs/BaseRequest'

export default class LoginRequest extends BaseRequest {

    
    login(data) {
        let url = '/api/login';
        return this.post(url, data);
    }

    reset(data) {
        let url = '/api/user/reset';
        return this.post(url, data);
    }

    changePassword(data) {
        let url = '/api/user/changepassword';
        return this.post(url, data);
    }

    unlock(data) {
        let url = '/api/user/unlock';
        return this.post(url, data);
    }
}