import React from 'react';
import { signOut, useSession } from "next-auth/react";

function Navbar(props) {
    const {data:session, status} = useSessing();
    return (
        <div>
            
        </div>
    );
}

export default Navbar;