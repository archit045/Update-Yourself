import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div>
            <br></br>
            <br></br>
            <div>
          <h3 className='hello'> Hello ! Greetings From Update-Yourself</h3>
        </div>
             <br></br>
            <br></br>
            
            <div class="container">
                <div class="card">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=1024x1024&w=is&k=20&c=2tjFfoJUKw9x-JG1kJEPK8bEA5QGtXEvfT6zqY7KjlY=" class="d-block w-100" id="s1"alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=376&dpr=1.0" class="d-block w-100" id="s2" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.beyoung.in/api/cache/catalog/products/cargo_joggers/sage_green_cargo_men_jogger_pants_base_14_1_2023_700x933.jpg" class="d-block w-100" id="s3"alt="..." />
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
                        <h5 class="card-title">Mens Wear Starting From ₹499</h5>
                        <p class="card-text">
                            <ul>
                                <li>
                                    It is a branded collection for men in less price.
                                </li>
                            </ul>
                        </p>
                        <Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div class="card2">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://i.pinimg.com/originals/56/78/ee/5678ee3f512c8e91ecd7aa586d65c34f.jpg" class="d-block w-100" id="s4" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.aachho.com/cdn/shop/products/16_66c013f3-23c3-4fde-8062-302ed75b7465_400x.png?v=1684508573" class="d-block1 w-100" id="s5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://cpimg.tistatic.com/07467450/b/4/Ladies-Salwar-Suits.jpg" class="d-block w-100" id="s6" alt="..." />
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
                        <h5 class="card-title">Womens Wear Staring From ₹599</h5>
                        <p class="card-text">
                            <ul>
                                <li>
                                    It is a New And nice collection for girls
                                </li>
                                <li>
                                    Fancy And Relaxable Collection.
                                </li>
                            </ul>
                        </p>
                        {" "}<Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div class="card3">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-26046,resizemode-75,msid-100623395/news/how-to/how-to-choose-safe-kids-wear-tips-for-avoiding-harmful-materials-and-chemicals/free-sparrow-launches-all-new-ethnic-wear-collection-for-kids-instilling-naturesque-childhood-in-every-wearer.jpg" id="s7" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://tiimg.tistatic.com/fp/1/008/335/casual-wear-floral-print-design-kids-dress-405.jpg" class="d-block w-100" id="s8" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.jiomart.com/images/product/original/rvyfcdar6a/hellcat-blue-trendy-printed-round-neck-half-sleeve-tshirt-for-boys-product-images-rvyfcdar6a-0-202301141913.jpg?im=Resize=(600,750) " class="d-block w-100" id="s9" alt="..." />
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
                        <h5 class="card-title">Kids Wear Staring From ₹399</h5>
                        <p class="card-text3">
                            <ul>
                                <li>
                                    Update Your Kids By Our New And fancy collection
                                </li>
                                <li>
                                    Good Looking Collection
                                </li>
                            </ul>
                        </p>
                        {" "} <Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div class="card4">
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cdn.shopify.com/s/files/1/0140/6042/1206/products/1021333_500x500.jpg?v=1667548324" id="s10"class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://m.media-amazon.com/images/I/61BOt894PEL._UY625_.jpg" class="d-block w-100" id="s11" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://m.media-amazon.com/images/I/61HkxdsBSXL._AC_UY1000_.jpg" class="d-block w-100" id="s12" alt="..." />
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
                        <h5 class="card-title">Footwear Staring From ₹399</h5>
                        <p class="card-text4">
                            <ul>
                                <li>
                                    Update YourSelf With a nice and classy footwear
                                </li>
                                <li>
                                    Always be ready for your destination
                                </li>
                            </ul>
                        </p>
                        {" "} <Link to="/" class="btn btn-primary">Buy Now</Link>{" "}
                        <Link to="/" class="btn btn-primary">Add To Cart</Link>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}