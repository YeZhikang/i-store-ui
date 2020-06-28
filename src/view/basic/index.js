import React, { useRef } from "react";
import SearchBar from "../../components/functional/SearchBar";
import MenuBar from "../../components/basic/MenuBar";

/**
 *
 * 基础主页
 * 商场入口页面
 */

const BasicIndex = () => {

    return (
        <div>
            <SearchBar/>
            <MenuBar />
        </div>
    )
}

export default BasicIndex
