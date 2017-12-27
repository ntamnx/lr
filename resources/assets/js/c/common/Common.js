import React, {Component} from 'react';

class Common extends Component {
    validateMsg(response) {
        $('.row .form-group').removeClass('has-error');
        $('.row .form-group').find('span').remove();
        if (response.data.errors) {
            $.each(response.data.errors, function (key, value) {
                var msgError = '<span class="help-block">' + value + '</span>';
                var selector = $('input[name=' + key + ']').parent();
                selector.addClass('has-error');
                selector.append(msgError)
            });
        }
    }

    hideLoading() {
        $('#div_loading').hide();
    }

    showLoading() {
        $('#div_loading').show();
    }

}

export default new Common();