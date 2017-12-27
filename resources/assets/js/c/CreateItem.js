import React, {Component} from 'react';
import Common from "./common/Common";
import Config from './common/Config'

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {productName: '', productPrice: ''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = lang.title_page.add;
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
        const products = {
            name: this.state.productName,
            price: this.state.productPrice
        }
        let uri = Config.baseUrl + '/items';
        Common.showLoading();
        axios.post(uri, products).then((response) => {
            Common.validateMsg(response);
            Common.hideLoading();
            if (!response.data.errors) {
                this.props.history.push('/index');
            }
        }).catch(function (error) {
            Common.hideLoading();
        })
    }

    render() {
        return (
            <div>
                <h1>{lang.crete_item}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>{lang.item_name}</label>
                                <input type="text" name="name" className="form-control"
                                       onChange={this.handleChangeName}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>{lang.item_price}</label>
                                <input type="text" name="price" className="form-control col-md-6"
                                       onChange={this.handleChangePrice}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary">{lang.add_item}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateItem;
