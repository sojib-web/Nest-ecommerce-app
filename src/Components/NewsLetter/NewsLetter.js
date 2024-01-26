import React from 'react';
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Button } from '@mui/material';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div>
            <div className="newsletterBanner">
                <SendOutlinedIcon />
                <input type="text" placeholder=" Your email address..." />
                <Button className="bg-g">Subscribe</Button>
            </div>
        </div>
    );
}

export default NewsLetter;
