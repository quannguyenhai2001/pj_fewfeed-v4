

import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import LoginScreen from "screens/LoginScreen/LoginScreen";
import OneCardFeatureScreen from "screens/OneCardFeatureScreen/OneCardFeatureScreen";


export const RouteConfigs = [

    {
        path: "/",
        element: LoginScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/dashboard",
        element: HomeScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/fb-one-card-picture-carousel",
        element: OneCardFeatureScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },

]