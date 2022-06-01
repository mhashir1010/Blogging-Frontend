import { Footer } from "../Layout/Footer"
import { Header } from "../Layout/Header"

export const Requests = () =>{
    return (
        <>
            <Header />
                <div className="card-group">
                    <div className="card">
                        <div className="row row-cols-1 row-cols-md-3">
                        <div class="col">
                            <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                            <div class="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </p>
                            </div>
                            <div className="row row-cols-4 justify-content-evenly">
                                <button type="button" className="btn btn-danger">Reject</button>
                                <button className="btn btn-primary">Accept</button>
                            </div>
                            </div>    
                        </div>
                        <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        </div>
                        </div>
                        <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        </div>
                    </div>
                        </div>
                    </div>

                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div className="row row-cols-4 justify-content-evenly">
                                <button type="button" className="btn btn-danger">Reject</button>
                                <button className="btn btn-primary">Accept</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                        </div>
                    </div>
                    {/* <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        </div>
                    </div> */}
                </div>
            <Footer />
        </>
    )
}