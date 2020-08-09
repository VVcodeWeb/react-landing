import React from "react"
import TitleAndText from "../global/TitleAndText"
import "./Products.scss"
import img_1 from "../../assets/products_1.jpg"
import img_2 from "../../assets/products_2.jpg"
import img_3 from "../../assets/products_3.jpg"
import Product from "./Product"

const Products = () => {
    return(
        <section className="products">
            <div className="produt_wrapper">
                <div className="latest_product">
                    <TitleAndText title="Latest Product" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper posuere bibendum. 
                    Vestibulum fsectetur nunc commodo. Donec ullamcorper iaculis erat" />
                    <img src={img_1} alt="img1"/>
                </div>
                <Product img={img_2}>
                    <TitleAndText title="Workspace" span="management" text="Cras mollis lorem dolor, id imperdiet elit condimentum ac. 
                    Donec ac nibh semper, imperdiet tellus et, tempus ipsum. Nam leo leo," />
                </Product>
                <Product img={img_3}>
                    <TitleAndText title="Minimalism" span="development" text="Nullam venenatis lacinia ante, id ornare ante volutpat ac. Cras bibendum tellus ac tellus aliquet, 
                    vitae bibendum mauris fringilla. Mauris condimentum congue maximus." />
                </Product>
                <Product>
                    <TitleAndText title="Cleant Style" span="design" text="t at luctus quam. Ut varius, leo ac porttitor hendrerit, neque lorem vehicula orci, in volutpat velit quam sed enim. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" />
                </Product>
            </div>
            
        </section>
    )
}


export default Products