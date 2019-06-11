import Vue from 'vue';
import {HTTP} from '../../main';

export default class BaseRequest {
    get(url, params = {}) {
        Vue.toasted.clear();
        //Vue.toasted.show('Loading ...', { icon : 'spinner'});
        return new Promise((resolve, reject) => {
            HTTP.get(url, {
                    params: params
                })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    if (error.response && error.response.status == '401') {
                        //window.location.href = '/login';
                    }
                    reject(error);
                })
                .then(function () {
                    // always executed
                    Vue.toasted.clear();
                });
        });
    }

    put(url, data = {}) {
        disableBtnSave();
        return new Promise((resolve, reject) => {
            HTTP.put(url, data)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    if (error.response && error.response.status == '401') {
                        //window.location.href = '/login';
                    }
                    reject(error);
                })
                .then(function () {
                    // always executed
                    enableBtnSave();
                });
        });
    }

    post(url, data = {}) {
        disableBtnSave();
        return new Promise((resolve, reject) => {
            HTTP.post(url, data)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    if (error.response && error.response.status == '401') {
                        //window.location.href = '/login';
                    }
                    reject(error);
                })
                .then(function () {
                    // always executed
                    enableBtnSave();
                });
        });
    }

    del(url, params = {}) {
        return new Promise((resolve, reject) => {
            HTTP.delete(url, {params: params})
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    if (error.response && error.response.status == '401') {
                        //window.location.href = '/login';
                    }
                    reject(error);
                }).then(function () {
            });
        });
    }
}

function disableBtnSave() {
    $('.btn-save').attr('disabled', 'disabled');
}

function enableBtnSave() {
    $('.btn-save').removeAttr('disabled');
}
