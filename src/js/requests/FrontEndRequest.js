import BaseRequest from '../libs/BaseRequest'

export default class FrontEndRequest extends BaseRequest {
    getQuestions(data) {
        let url = '/api/join';
        return this.get(url);
    }

    randomQuestion(userAnswers) {
        let url = '/api/join/question/random';
        return this.get(url); 
    }

    takeTest(data) {
        let url = '/api/join/query/taketest';
        return this.post(url, data); 
    }

    getExcuteLog(logId) {
        let url = '/api/join/query/testexcutelog/' + logId;
        return this.get(url); 
    }

    getScriptCondition(param) {
        let freeText = param.allowFreeTextAnswer ? 1 : 0;
        let url = '/api/script/scriptcondition/find?freeText=' + freeText;
        return this.get(url); 
    } 

    getScript(id) {
        let url = '/api/script/backend/' + id;
        return this.get(url); 
    } 

    getExcuteLogUser(data) {
        let url = '/api/join/query/testexcuteloguser';
        if (data.page) {
            url = url + '?page=' + data.page;
        }
        
        return this.get(url);
    }
    getExcuteLogUserByUserId(data,id) {
        let url = '/api/join/query/testexcuteloguser/'+id;     
        if (data.page) {
            url = url + '?page=' + data.page;
        }   
        return this.get(url);
    }
    hasScript() {
        let url = '/api/join/script/has';
        return this.get(url); 
    }

    join(data) {
        let url = '/api/join';
        return this.post(url, data);
    }
}