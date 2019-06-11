import BaseRequest from '../libs/BaseRequest'

export default class AccountRequest extends BaseRequest {

    getHistoryAccount(data) {
        let url = '/api/user/history/'+data.id+'?page='+data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        return this.get(url);
    }
}
