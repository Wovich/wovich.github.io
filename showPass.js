import React, {Fragment, useState} from 'react';
import {Input} from "antd";
import {PASS_1, PASS_2, PASS_3} from "../consts";
import {useParams} from "react-router-dom";
import {usertupe} from "../api"
const showPass = (props) => {
    const arrShow = (usertype) => {
        let PASS = [];
        if (usertype[0]===true)
            PASS = PASS.concat(PASS_1);
        if (usertype[1]===true)
            PASS = PASS.concat(PASS_2);
        if (usertype[2]===true)
            PASS = PASS.concat(PASS_3);
        return PASS
    }
    const normalize = (data) => {
        if (data !== undefined)
            return String(data).toLocaleLowerCase();
    }
    const {children} = props;
    const params = useParams();
    const [isAvailable1, setIsAvailable1] = useState(true);
    const changePass = () => {
        setIsAvailable1(!isAvailable1);

    }
    const [search, setSearch] = useState("");

    const includeInArray = (arr, search) => {
        return arr.some(x => x.stringify.includes(search));
    }

    const equalNormalized = (a, b) => {
        return normalize(a) === normalize(b);
    }

    const pass = (arg) => [ arg.filter(x => includeInArray([x.keyword, x.pass, x.site, x.userid].map(x => normalize(x)), normalize(search))).map(x => (
        <li className={equalNormalized(params.keyword, x.keyword) ||
        equalNormalized(params.site, x.site) ||
        equalNormalized(params.pass, x.pass) ||
        equalNormalized(params.userid, x.userid) ? "active" : ""}>

            {x.site}
            <br/>
            {x.userid}
            <br/>
            {x.pass}
        </li>

    ))
    ]

    return (
        <div>
            <Fragment>
                <div className="sidebar">
                    <button id="Side" type="button" className="types"
                            onClick={changePass}>{isAvailable1 ? "Pass1" : "Pass2"}</button>

                    <Input
                        allowClear={true}
                        className="C_input"
                        list="list1"
                        type="search"
                        autoComplete="off"
                        name="q"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        style={{
                            marginBottom: 8,
                            borderColor: "#09007d",
                            borderRadius: 8,
                            width: 180,
                        }}
                    />
                    <div style={{display: isAvailable1 ? "block" : "none"}} className="list1 ll">
                        <ul id="pass_list">
                            { pass(arrShow(usertype))}
                        </ul>
                    </div>

                    <div className="main_content">

                        {children}
                    </div>
                </div>
            </Fragment>
        </div>
    )

}

export default showPass;
