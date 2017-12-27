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
        axios.post(uri, this.state.product).then(() => {
            Common.removeValidateMsg();
            Common.hideLoading();
            this.props.history.push('/index');
        }).catch(function (error) {
            Common.removeValidateMsg();
            Common.validateMsg(error.response);
            Common.hideLoading();
        })
    }

    Main() {
        return ( <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/add' component={CreateItem}/>
                <Route path='/index' component={Display}/>
            </Switch>
        </main>)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} ref="bar">
                <InputText title='Name' name='name' onChange={this.handleChangeName}/>
                <InputText title='Price' name='price' onChange={this.handleChangePrice}/>
                <BtnPrimary text={lang.add_item}/>
            </form>
        )
    }
}

export default Add