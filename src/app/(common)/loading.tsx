import { Spin } from 'antd';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-100px)]'>
            <Spin size='large' />
        </div>
    );
};

export default Loading;