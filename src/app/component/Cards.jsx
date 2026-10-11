import React from 'react';
import Link from 'next/link';

const Cards = ({blog}) => {
    const {id,title} = blog;
    return (
        <div className="card bg-base-100 w-96 shadow-sm mt-5">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link href = {`/Blogs/${id}`}>
                    <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;