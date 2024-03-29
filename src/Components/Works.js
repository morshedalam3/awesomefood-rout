import React from 'react';
import works from '../fakeData/works.json'
import Work from './Work';

const Works = () => {
    return (
        <div className="container my-5">
            <h1>works</h1>
            <div className="row my-4">
                {
                    works.map(work => <Work work={work} ></Work>)
                }
            </div>
        </div>
    );
};

export default Works;