import BaseRequest from '../libs/BaseRequest'

export default class ScriptRequest extends BaseRequest {
    get1() {
        let url = '/api/script';
        return this.get(url);
    }

    get2(id) {
        let url = `/api/script/${id}`;
        return this.get(url);
    }

    get3(id) {
        let url = `/api/script/${id}`;
        return this.get(url);
    }

    editScript(id,data) {
        let urlUpdate = `/api/script/${id}/update`;
        return this.post(urlUpdate, data);
    }

    deleteScript1(id) {
        let urlDelete = `/api/script/${id}`;
        return this.del(urlDelete);
    }

    getScripts(id) {
        return this.get('/api/script/' + id)
    }

    getScripts(data) {
        // Todo
    }

    scriptsExport() {
        let url = '/api/script/exports'
        return this.port(url)
    }

    getListScripts(data) {
        let url = '/api/script?page='+data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        if (data.search) {
            url = url + '&search=' + data.search;
        }
        return this.get(url);
    }
    enableScript(id) {
        let url = '/api/script/enable/' + id;
        return this.post(url);
    }
    copyScript(id){
        let url = '/api/script/copy/' + id;
        return this.post(url);
    }
    getConditionScripts(){
        let url = '/api/script/condition/all';
        return this.get(url);
    }
    add(data) {
        let urlRegister = '/api/script/add';
        return this.post(urlRegister, data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          });
    }
    getScriptById(id) {
        return this.get('/api/script/backend/' + id);
    }
    copyQuery(id){
        let url = '/api/join/query/copy/' + id;
        return this.post(url);
    }
    getClients() {
        let url = '/api/client';
        return this.get(url);
    }

    queryValidate(data) {
        let url = '/api/join/query/validate';
        return this.post(url, data);
    }
    enableQuery(id){
        let url = '/api/query/enable/'+id;
        return this.post(url);
    }

}