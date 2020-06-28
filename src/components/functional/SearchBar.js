import React, { useRef } from "react";
import Input from "../basic/Input";
import Avatar from "../basic/Avatar";
import { FaSearch } from 'react-icons/fa';

const method = {
    name: '搜索',
    type: 'primary',
    callback(){
        console.log('cb')
    }
}

const SearchBar = (props) => {
    const inputRef = useRef()
    const handleClick = () => {
        console.log(inputRef.current.value)
    }

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1.1rem'
        }}>
            <Input
                placeholder={'请输入商品'}
                style={ {
                    borderColor: '#ee603a'
                } }
                method={ method }
                ref={ inputRef }
                block
                round
                extra={ (<FaSearch style={ { fontSize: '16px', fontWeight: '300' } }/>) }
            />
            <Avatar style={{
                marginLeft: '6px',
                flexShrink: '0'
            }} round/>
        </div>
    )
}

export default SearchBar


