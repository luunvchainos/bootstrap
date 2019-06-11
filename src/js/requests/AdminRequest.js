import BaseRequest from '../libs/BaseRequest'

export default class AdminRequest extends BaseRequest {
    getClients(data) {
        let url = '/api/client?page='+data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        if (data.search) {
            url = url + '&search=' + data.search;
        }
        if (data.enable) {
            url = url + '&enable=' + data.enable;
        }
        return this.get(url);
    }

    getClient(id) {
        let url = '/api/client/'+ id;
        return this.get(url);
    }
    
    addClient(data) {
        let url = '/api/client';
        if (data.id) {
            return this.put(url + '/' + data.id, data);
        }
        return this.post(url, data);
    }

    enableClient(id) {
        let url = '/api/client/enable/' + id;
        return this.post(url);
    }

    getPostalCodes(data) {
        let url = '/api/postalcode';
        if (data.search) {
            url = url + '?search=' + data.search;
        }
        if (data.stateCode) {
            var exists = _.includes(url, '?');
            url = exists 
                ? url + '&stateCode=' + data.stateCode
                : url + '?stateCode=' + data.stateCode;
        }
        if (data.regionCode) {
            var exists = _.includes(url, '?');
            url = exists 
                ? url + '&regionCode=' + data.regionCode
                : url + '?regionCode=' + data.regionCode;
        }
        return this.get(url);
    }

    getListCity() {
        let url = '/api/postalcode/city/all';
        return this.get(url);
    }

    getListScript() {
        let url = '/api/scripts/getAll';
        return this.get(url); 
    } 

    import(attr, data) {
        let url = ''; 
        if (attr == 'client') url = '/api/client/import/all';
        else if (attr == 'account') url = '/api/user/import/all';
        else if(attr == 'scripts') url = '/api/scripts/import/all';
        else if(attr.includes('queries')) url = attr;
        else if(attr == 'categories') url = '/api/categories/import/all';
        return this.post(url, data);
    }

    freeAnswerList(data) {
        let url = '/api/freeanswer?page='+data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        if (data.search) {
            if (data.search.script_name) {
                url = url + '&script_name=' + data.search.script_name;
            }
            if (data.search.query_name) {
                url = url + '&query_name=' + data.search.query_name;
            }
            if (data.search.client_name) {
                url = url + '&client_name=' + data.search.client_name;
            }
            if (data.search.user_name) {
                url = url + '&user_name=' + data.search.user_name;
            }
            if (data.search.start_date) {
                url = url + '&start_date=' + data.search.start_date;
            }
            if (data.search.end_date) {
                url = url + '&end_date=' + data.search.end_date;
            }
        }
        return this.get(url);
    }
}