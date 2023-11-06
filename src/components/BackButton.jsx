import React from 'react';
import {useNavigate} from "react-router-dom";

import Button from "./Button.jsx";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Button type={'back'} onClick={(e)=>{e.preventDefault();navigate(-1);}}>&larr; Back</Button>
        </div>
    );
};

export default BackButton;