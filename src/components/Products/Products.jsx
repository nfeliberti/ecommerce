import React from 'react';
import { Grid }  from '@material-ui/core';

import Product from './Product/Product'

//import product1 from '../../assets/mysterybox.png';
//import product2 from '../../assets/guide.png';
//import product3 from '../../assets/bands.png';
//Mock products 
import useStyles from './styles';

//const products = [
  //  {id: 1, name: 'Mystery Box', description : 'Different types of fitness gear and guides', price :'$150', image:(product1)},
    //{id: 2, name: 'Guide', description : 'Four week trainig guide', price :'$40', image:(product2)},
    //{id: 3, name:'Bands', description :'Workout Bands', price:'$30', image:(product3)}
//];
const Products = ({products, onAddToCart}) =>{
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify = "center" spacing={4}>
                {products.map((product) => (
                    <Grid item key= {product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
            </Grid>
        </main>
    );

}
export default Products;