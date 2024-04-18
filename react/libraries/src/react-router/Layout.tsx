import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

export default function Layout() {
    //<Outlet /> :
    // - 부모 <Route>에 해당 컴포넌트가 element로 등록되었을 때 자식 <Route>의 element가 해당 위치에 표시되도록 하는 컴포넌트

    // useLocation :
    // - 현재 URL 및 위치에 lcoation 객체를 반환
    // - pathname : 현재 위치 URL
    const {pathname} = useLocation();

    return (
        <>
            <h2 style={{color:'red'}}>Router : {pathname}</h2>
            <Outlet />
        </>
    )
}
