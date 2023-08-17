import React from 'react'
import { Link } from "react-router-dom";


export default function Mens() {
  return (
    <>
         <div class="container1">
          <div class="cardm">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=1024x1024&w=is&k=20&c=2tjFfoJUKw9x-JG1kJEPK8bEA5QGtXEvfT6zqY7KjlY=" class="d-block w-100" id="m1" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://assets.ajio.com/medias/sys_master/root/20230602/Dtgx/64795c65d55b7d0c633c7821/-473Wx593H-462323964-white-MODEL.jpg" class="d-block w-100" id="m2"alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/deep_olive_green_corduroy_shirt_for_men_base_3_11_2022_400x533.jpg" id="m3"alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Mens Shirts Staring From ₹499</h5>
                    <p class="card-text">
                        <ul>
                            <li>
                                Plain Shirts Collection for men in less price.
                            </li>
                        </ul>
                    </p>
                    <Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                    <Link to="/" class="btn btn-primary">Add To Cart</Link>
                </div>
           </div>
       

           <br></br>
           <br></br>

           <div class="cardm1">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=376&dpr=1.0" class="d-block w-100" id="m4" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.lydur.in/wp-content/uploads/2023/01/Jockey-mens-t-shirts-2714-BURGANDY.jpg?x48987" class="d-block1 w-100" id="m5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/attitude_mens_t-shirt_base_700x933.jpg" class="d-block w-100" id="m6" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">                                                                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Mens T-Shirts Staring From ₹399</h5>
                        <p class="card-text">
                            <ul>
                                <li>
                                   Cool Looking t-shirts for mens in less price 
                                </li>
                            </ul>
                        </p>
                        {" "}<Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>
                
                <br></br>
                <br></br>
                
                <div class="cardm2">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://assets.ajio.com/medias/sys_master/root/20230524/shT2/646e3154d55b7d0c63d621f0/-1117Wx1400H-460789301-blue-MODEL.jpg" id="m7" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://5.imimg.com/data5/DK/FA/NX/GLADMIN-51628136/mens-denim-skinny-jeans-500x500.jpg" class="d-block w-100" id="m8" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://5.imimg.com/data5/XJ/HC/MY-2325220/men-ankle-length-jeans.jpg " class="d-block w-100" id="m9" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body3">
                        <h5 class="card-title">Mens Jeans Staring From ₹799</h5>
                        <p class="card-text3">
                            <ul>
                                <li>
                                    Latest Jeans Collection For Mens in less price
                              </li>
                            </ul>
                        </p>
                        {" "} <Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>
   
             <br></br>
                
                
             <div class="cardm3">
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cdn.shopify.com/s/files/1/0140/6042/1206/products/1021333_500x500.jpg?v=1667548324" id="m10"class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://rukminim1.flixcart.com/image/300/300/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg" class="d-block w-100" id="m11" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/d/m/z/-original-imagg7t26zdugnx8.jpeg?q=90" class="d-block w-100" id="m12" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body4">
                        <h5 class="card-title">Mens Shoes Staring From ₹699</h5>
                        <p class="card-text4">
                            <ul>
                                <li>
                                    Be Update and ready by wearing these
                                </li>
                            </ul>
                        </p>
                        {" "} <Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>
                
               <br></br>


               <div class="cardm4">
                    <div id="carouselExampleFade1" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://4.imimg.com/data4/DE/BI/MY-34447686/206a.jpg" class="d-block w-100" id="m13" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://rukminim1.flixcart.com/image/850/1000/xif0q/slipper-flip-flop/e/8/w/-original-imaggewy7zgsqapf.jpeg?q=90" class="d-block1 w-100" id="m14" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.jiomart.com/images/product/original/rvyxnv1vmg/bersache-chappal-for-men-new-fashion-latest-design-casual-slippers-slides-water-proof-for-men-stylish-perfect-filp-flops-for-daily-wear-walking-slippers-black-product-images-rvyxnv1vmg-0-202207081005.jpg?im=Resize=(330,410)" class="d-block w-100" id="m15" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev1">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1s" data-bs-slide="next">                                                                          <span class="carousel-control-next-icon1" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Chappal for mens Staring From ₹199</h5>
                        <p class="card-text">
                            <ul>
                                <li>
                                   Comfortable Chappal For Mens  
                                </li>
                            </ul>
                        </p>
                        {" "}<Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>

              <br></br>

              <div class="cardm5">
                    <div id="carouselExampleFade2" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/10/1/ead83144-2ecb-4249-a172-0ce135c02cfb1601505644156-1.jpg" class="d-block w-100" id="m16" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://m.economictimes.com/thumb/msid-95976312,width-750,height-750,resizemode-4,imgsize-56552/0553c92d29747d30c5aa03bc5bc7d36a.jpg" id="m17" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfwZUH51vlxxcjQTFvbXXDpFrN42xvEsErA&usqp=CAU" class="d-block w-100" id="m18" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev1" style={{color : 'black'}}>
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2s" data-bs-slide="next">                                                                          <span class="carousel-control-next-icon2" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Sandals for mens Staring From ₹299</h5>
                        <p class="card-text">
                            <ul>
                                <li>
                                   Something Needable to update  
                                </li>
                            </ul>
                        </p>
                        {" "}<Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>

             <br></br>

                <div class="cardm6">
                    <div id="carouselExampleFade3" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://5.imimg.com/data5/LN/PI/JS/SELLER-3749501/corparate-trouser.jpg" id="m19" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.shopolics.com/uploads/images/full/Blue-Poly-Cotton-Blend-Regular-Fit-Men-Trousers-38397.jpg" id="m20" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://imagescdn.planetfashion.in/img/app/product/6/681037-7172282.jpg?auto=format&w=494.40000000000003" id="m21" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev1" style={{color : 'black'}}>
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3s" data-bs-slide="next">                                                                          <span class="carousel-control-next-icon3" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Tousers for mens Staring From ₹599</h5>
                        <p class="card-text">
                            <ul>
                                <li>
                                     Fit And Flexible  Tiusers For men.
                                </li>
                            </ul>
                        </p>
                        {" "}<Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>


                </div>
    </>
  )
}
