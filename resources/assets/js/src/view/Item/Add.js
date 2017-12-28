import React, {Component} from 'react';
import InputText from '../../components/Input/TypeText'
import Common from "../../components/common/Common";
import Config from "../../components/common/Config";
import BtnPrimary from "../../components/Button/BtnPrimary";

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                name: '', price: '',
            }

        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        let product = Object.assign({}, this.state.product);    //creating copy of object
        product.name = e.target.value,                   //updating value
            this.setState({product: product});
    }

    handleChangePrice(e) {
        let product = Object.assign({}, this.state.product);    //creating copy of object
        product.price = e.target.value,
            this.setState({
                product: product
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        let uri = Config.baseUrl + '/items';
        Common.showLoading();
        axios.post(uri, this.state.product).then((response) => {
            Common.removeValidateMsg();
            Common.hideLoading();
            toastr.success(response.data)
            this.props.history.push('/index');
        }).catch(function (error) {
            Common.removeValidateMsg();
            Common.validateMsg(error.response);
            Common.hideLoading();
        })
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading ">Add item</div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit} ref="bar">
                        <InputText title='Name' name='name' onChange={this.handleChangeName}/>
                        <InputText title='Price' name='price' onChange={this.handleChangePrice}/>
                        <BtnPrimary text={lang.add_item}/>
                    </form>
                </div>
            </div>

        )
    }
}

export default Add