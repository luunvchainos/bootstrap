import BaseRequest from '../libs/BaseRequest'

export default class CategoryRequest extends BaseRequest {

    saveCategory(data) {
        let urlRegister = '/api/category';
        let urlUpdate = '/api/category';
        if (data.id) {
            console.log(data);
            return this.put(urlUpdate + '/' + data.id, data);
        }
        return this.post(urlRegister, data);
    }
    getCategory(id) {
        return this.get('/api/category/' + id);
    }
    getCategories(data) {
        let url = '/api/category?page='+data.page;
        if (data.sort) {
            url = url + '&sort=' + data.sort;
        }
        if (data.search) {
            url = url + '&searchName=' + data.search;
        }

        return this.get(url);
    }

    getCategoriesList() {
        let url = '/api/categories/getlist';

        var data = this.get(url);

        return this.get(url);
    }
}