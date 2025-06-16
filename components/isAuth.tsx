"use client";

import React from 'react'
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";

export const IsAuth = (Component:any) => {
    const {status} = useSession()
    
    return function isAuth(props:any){
        if(status == "loading"){
            return <div>Loading...</div>
        }

        if(status == "unauthenticated"){
             redirect("/")
        }

        if(status == "authenticated"){
            return <Component {...props} />;
        }
    }
}

