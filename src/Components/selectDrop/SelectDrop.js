import React, { useState } from 'react';
import '../selectDrop/SelectDrop.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';



const SelectDrop = ({ data, placeholder, icon }) => {
    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectIndex, setOpenIndex] = useState(0);
    const [selectItem, setSelectedItem] = useState(placeholder);

    const [listData, setListData] = useState(data)


    const openSelect = () => {
        setisOpenSelect(!isOpenSelect);
    };

    const closeSelect = (index, name) => {
        setOpenIndex(index);
        setisOpenSelect(false);
        setSelectedItem(name);
    };

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        const list = data.filter((item) => {
            return item.toLowerCase().includes(keyword)
        })

        const list2 = list.filter((item, index) => list.indexOf(item) === index)
        setListData(list2)
    }

    return (

        <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
            <div className='selectDropWrapper cursor position-relative'>
                {icon}
                <span className='openSelect' onClick={openSelect}>
                    {selectItem.length > 14 ? selectItem.substr(0, 14) + '...' : selectItem} <KeyboardArrowDownIcon className='arrow' />
                </span>
                {isOpenSelect === true && (
                    <div>
                        <div className='SelectDrop'>
                            <div className='searchField'>
                                <input type='text' placeholder='Search here...' onChange={filterList} />
                            </div>
                            <ul className='searchResults'>
                                <li key={0} onClick={() => closeSelect(0, placeholder)} className={`${selectIndex === 0 ? 'active' : ''}`} >{placeholder}</li>
                                {
                                    listData.map((item, index) => {
                                        return (
                                            <li key={index + 1} onClick={() => closeSelect(index + 1, item)} className={`${selectIndex === index + 1 ? 'active' : ''}`} >{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </ClickAwayListener>

    );
};

export default SelectDrop;
