import { useState } from "react"
import "./modal.css"
import axios from "axios";
export function SearchModal() {
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState([]);
    const searchHere = async () => {
        try {
            let response = await axios.get("http://localhost:3000/user/searchProfile/" + keyword);
            setData(response.data.user);
        }
        catch (err) {
            console.log(err);
        }
    }

    const searchByArt = async (value)=>{
        try{
            let response = await axios.get("http://localhost:3000/user/searchByArt/" + value);
            setData(response.data.user)
        }
        catch(err){
            console.log(err);
        }
    }

    return <>
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                <div className="modal-content searchModalContent">
                    <div className="modal-header" style={{ backgroundColor: "#4abdac" }}>
                        <h4 className="modal-title" id="exampleModalLabel" style={{ color: "#ffffff" }}>Search Your Interest</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input id="searchModalInput" type="text" onChange={(event) => setKeyword(event.target.value)} onKeyUp={searchHere} className="form-control" placeholder="Search here" />
                        <form > 
                        <div id="searchByArt" className="mb-3">
                            <span className="searchModalLinkBox" onClick={(event)=>{searchByArt(event.target.innerText)}}><a>Singer</a></span>
                            <span className="searchModalLinkBox" onClick={(event)=>{searchByArt(event.target.innerText)}}><a>Guitarist</a></span>
                            <span className="searchModalLinkBox" onClick={(event)=>{searchByArt(event.target.innerText)}}><a>Tabla</a></span>
                            <span className="searchModalLinkBox" onClick={(event)=>{searchByArt(event.target.innerText)}}><a>Dancer</a></span>
                            <span className="searchModalLinkBox" onClick={(event)=>{searchByArt(event.target.innerText)}}><a>Pianoist</a></span>
                        </div>
                        </form>
                        <div id="searchResultBox">
                            {data.map((keyword, index) =>
                                <div id="searchBox" className="mt-2 d-flex justify-content-between  searchResult">
                                    <div>
                                        {keyword.userName}
                                    </div>
                                    <div >
                                        <a id="viewBox">View</a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" style={{backgroundColor:'#4abdac',border:'none'}}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}