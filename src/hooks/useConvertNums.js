import { useState } from "react";


const useConvertNums = () => {
    const [generated , setGenerated] = useState('');


    const handleConvertToPersianDigits = (input) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        setGenerated(input.toString().replace(/\d/g, (match) => persianDigits[match])) ;
    }  
    
    return {generated , handleConvertToPersianDigits}
}

export default useConvertNums


