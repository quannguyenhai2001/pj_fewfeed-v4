
import React from "react";

import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { RouteConfigs } from "./routes.config";

function PrivateRouter() {
    const jwtToken = localStorage.getItem("access_token");
    return RouteConfigs.map((route, index) => {
        if ((!route.isPrivate || (route.isPrivate && jwtToken)) || (route.isPrivate && jwtToken)) {
            return <Route key={index} path={route.path} element={(() => {
                return (
                    <route.layout>
                        <route.element />
                    </route.layout>
                )
            })()}
            />
        }
        else if (route.isPrivate && !jwtToken) {
            return <Route key={index} path={route.path} element={<Navigate to="/" />} />
        }
        else {
            return <Route key={index} path={route.path} element={<Navigate to="/dashboard" />} />
        }

    })
}

export function RouterWrapper() {
    return (
        (
            < Routes >
                {PrivateRouter()}
            </Routes>
        )
    )
}