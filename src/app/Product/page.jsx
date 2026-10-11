import React from 'react';
import Link from 'next/link';

const Userpage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {
                users.map(users => <div key =  {users.id} className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="card-title">{users.name}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <Link href= {`/Product/${users.id}`}>
                                <button className="btn">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Userpage;