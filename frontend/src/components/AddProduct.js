import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title: title,
            price: price
        });
        history.push("/productlist");
    }
 
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
         <a className="navbar-item" href="https://techved.com">
                        <img src="https://www.techved.com/resources/images/logo.svg"></img>
                       
                    </a>
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
        </section>
    )
}
 
export default AddProduct