import React, {Component} from 'react';
import Common from "../common/Common";
import Config from '../common/Config'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {productName: '', productPrice: ''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    handleChangePrice(e) {
        this.setState({
            productPrice: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.productName,
            password: this.state.productPrice
        }
        let uri = Config.baseUrl + '/login';
        Common.showLoading();
        axios.post(uri, user).then((response) => {
            Common.validateMsg(response);
            Common.hideLoading();
        }).catch(function (error) {
            Common.validateMsg(error.response);
            Common.hideLoading();
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Login</label>
                                <input type="text" name="email" className="form-control"
                                       onChange={this.handleChangeName}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>{lang.item_price}</label>
                                <input type="password" name="password" className="form-control col-md-6"
                                       onChange={this.handleChangePrice}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
