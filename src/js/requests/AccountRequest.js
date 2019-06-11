import BaseRequest from '../libs/BaseRequest'

export default class AccountRequest extends BaseRequest {
    getClients() {
        let url = '/api/client';
        return this.get(url);
    }

    saveAccount(data) {
        let urlRegister = '/api/register';
        let urlUpdate = '/api/user';
        if (data.id) {
            return this.put(urlUpdate + '/' + data.id, data);
        }
        return this.post(urlRegister, data);
    }
    getAccount(id) {
        return this.get('/api/user/' + id);
    }
    getAccounts(data) {
        let url = '/api/user?page='+data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        if (data.searchClientName) {
            url = url + '&searchClientName=' + data.searchClientName;
        }
        if (data.searchLoginId) {
            url = url + '&searchLoginId=' + data.searchLoginId;
        }
        if (data.searchName) {
            url = url + '&searchName=' + data.searchName;
        }
        if (data.enable) {
            var enable = Number(data.enable);
            url = url + '&enable=' + enable;
        }
        return this.get(url);
    }
    getAccountsLocked(data) {
        let url = '/api/user/locked/all?page=' + data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        if (data.searchClientName) {
            url = url + '&searchClientName=' + data.searchClientName;
        }
        if (data.searchLoginId) {
            url = url + '&searchLoginId=' + data.searchLoginId;
        }
        if (data.searchName) {
            url = url + '&searchName=' + data.searchName;
        }
        return this.get(url);
    }
    accountsExport(){
        let url = '/api/user/exports';
        return this.post(url);
    }

    unlockAccount(id) {
        let url = '/api/user/unlock/' + id;
        return this.post(url);
    }
    enableAccount(id){
        let url = '/api/user/enable/' + id;
        return this.post(url);
    }
    getByClient(data) {
        let url = '/api/user/client/all?page='+data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        if (data.enable) {
            var enable = Number(data.enable);
            url = url + '&enable=' + enable;
        }
        return this.get(url);
    }
    countByClient(){
        let url = '/api/user/client/count';
        return this.get(url);
    }
}
