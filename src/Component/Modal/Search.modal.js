import "./modal.css"
export function SearchModal() {
    return <>
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                <div className="modal-content searchModalContent">
                    <div className="modal-header" style={{backgroundColor:"#4abdac"}}>
                        <h4 className="modal-title" id="exampleModalLabel" style={{color:"#ffffff"}}>Search Your Interest</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input id="searchModalInput" type="text" className="form-control" placeholder="Search here"/>
                        <div id="searchByArt">
                            <span className="searchModalLinkBox"><a>Singer</a></span>
                            <span className="searchModalLinkBox"><a>Guitarist</a></span>
                            <span className="searchModalLinkBox"><a>Tabla Player</a></span>
                            <span className="searchModalLinkBox"><a>Drumer</a></span>
                            <span className="searchModalLinkBox"><a>Pioniast</a></span>
                        </div>
                        <div id="searchResultBox">
                            
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}