import React, {Component} from 'react';
import Config from '../common/Config'

class BaseComponent extends Component {
    constructor(props) {
        super(props)
        axios.interceptors.response.use(null, function (error) {
            if (error.response.status === 401) {
                window.location.replace(Config.baseUrl + '/logout');
            }
        });
    }
}

export default BaseComponent