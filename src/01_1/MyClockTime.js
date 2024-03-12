// const currentTime = new Date();

// function MyClockTime() {
//     return(
//         <>{currentTime.toLocaleTimeString()}</>
//     );
// }
// export default MyClockTime;

import React, { useState, useEffect } from 'react';

function MyClockTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 1초마다 시간을 업데이트

        return () => {
            clearInterval(timer);
        };
    }, []); // 컴포넌트가 마운트될 때만 실행되도록 []를 빈 배열로 전달

    return (
        <>{currentTime.toLocaleTimeString()}</>
    );
}

export default MyClockTime;