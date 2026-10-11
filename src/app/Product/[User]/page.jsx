import React from 'react';

const Userpage = async({params}) => {
    const {User} = await params;
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${User}`);
    const usersdata = await res.json();
    
    
    return (
        <div>
            <h2>{usersdata.name}</h2>
             <h2>{usersdata.email}</h2>
              <h2>{usersdata.phone}</h2>
               <h2>{usersdata.webside}</h2>
        </div>
    );
};

export default Userpage;