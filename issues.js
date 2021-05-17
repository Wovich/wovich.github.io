import React, {Fragment, useState} from 'react';
import { TRUCKS, TRAILERS } from "../../consts"
import {Link, useParams} from "react-router-dom";
import {Input} from "antd";
import "./styles.css"

const Issues = (props) => {
    const {children} = props;
    const params = useParams();
    const [isTruck, setIsTruck] = useState(true);
    const [search, setSearch] = useState("");

    const handleCategoryClick = () => {
        setIsTruck(!isTruck);

    }

    return (
        <Fragment>
            <div className="sidebar">
                <button id="Side" type="button" className="types" onClick={handleCategoryClick}>{isTruck ? "Trucks" : "Trailers"}</button>
                <Input
                    allowClear ={true}
                    className="C_input"
                    list="trucks"
                    type="search"
                    autoComplete="off"
                    name="q"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    style={{
                      "margin-left": 8,
                      "border-color": "#09007d",
                      "border-radius": 8,
                      width:180,
                      "margin-bottom": 4
                      }}
                />
                <div style={{ display: isTruck ? "block" : "none" }} className="truck-list-container ll">
                    <ul id="truck_list" >
                        {TRUCKS.filter(x => x.id.includes(search)).map(x => (
                            <li className={params.id === x.id ? "active" : ""}>
                                <Link to={/issues/${x.id}} >
                                    {x.content}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ display: isTruck ? "none" : "block" }} className="truck-list-container ll2">
                    <ul className="trailers_list">
                        {TRAILERS.filter(x => x.id.includes(search)).map(x => (
                            <li className={params.id === x.id ? "active" : ""}>
                                <Link to={/issues/${x.id}}>
                                        {x.content}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="main_content">

                {children}
            </div>
        </Fragment>
    );
}

export default Issues;
