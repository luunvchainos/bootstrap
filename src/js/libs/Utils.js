import moment from 'moment'

export default {
    showLoading: function(vm) {
        vm.$toasted.show('Loading ...', { icon : 'spinner'});
    },

    showSucessToast: function(vm, message, delayTime=5000, onCompleteFunc) {
        if (onCompleteFunc) {
            let myToast = vm.$toasted.show(message, {type : 'success', onComplete: function() { onCompleteFunc; } });
            myToast.goAway(delayTime);
        } else {
            let myToast = vm.$toasted.show(message, {type : 'success'});
            myToast.goAway(delayTime);
        }
    },

    showErrorToast: function(vm, message, delayTime=5000) {
        let myToast = vm.$toasted.show(message, {type : 'error'});
        myToast.goAway(delayTime);
    },

    clearToast: function(vm) {
        vm.$toasted.clear();
    },

    split: function(str, position) {
        if (!str) return '';
        var faxs = __.split(str, '-');
        return faxs && faxs.length >= (position+1) ? faxs[position] : '';
    },

    formatDate(value, format='YYYY/MM/DD') {
        return moment(String(value)).format(format);
    },

    yesOrNo(value) {
        return value == 1 ? '有' : '否';
    },
    randomString: function(length, chars) {
        var mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
        return result;
    },
    wrapText: function(text, width, height) {
        return joint.util.breakText(text, {
            width: width,
            height: height
        }, {
            // Style
        }, {
            // svgDocument: 'tspan',
            // separator: ' ',
            // eol: '\n'
        })
    }
}