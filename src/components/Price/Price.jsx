import "./price.css"

const Price = () => {
    return(
        <div>
            <br/>
            <hr/>
            <div class="accordion price" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header title-booking" id="headingOne">
                    <button class="accordion-button title-booking" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Payment
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div className="row">
                                <div className='row'>
                                    <div className='col-5 title-price'>Payment:</div>
                                    <div className='col-7 priceNum'>799.500  VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 title-price'>Pay with a Voucher:</div>
                                    <div className='col-7 priceNum'>0 VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 title-price'>Pay with a Gift Voucher:</div>
                                    <div className='col-7 priceNum'>0 VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 title-price'>Traveloka service fee:</div>
                                    <div className='col-7 priceNum'>Free</div>
                                </div>
                            </div>
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Voucher / Gift Voucher
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body row">
                                    <div className="voucher col-6">
                                        <div className=' title-price'>Voucher:</div>
                                        <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Your voucher
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="voucher col-6">
                                        <div className=' title-price'> Gift Voucher:</div>
                                        <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Your gift voucher
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary">Save</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="priceBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Continue
            </button>
            <br/>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div className="row">
                                <div className='row'>
                                    <div className='col-7 priceNum'>Payment:</div>
                                    <div className='col-5 title-price'>799.500  VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-7 priceNum'>Pay with a Voucher:</div>
                                    <div className='col-5 title-price'>0 VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-7 priceNum'>Pay with a Gift Voucher:</div>
                                    <div className='col-5 title-price'>0 VND</div>
                                </div>
                                <div className='row'>
                                    <div className='col-7 priceNum'>Traveloka service fee:</div>
                                    <div className='col-5 title-price'>Miễn phí</div>
                                </div>
                            </div>        
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Confirm</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Price