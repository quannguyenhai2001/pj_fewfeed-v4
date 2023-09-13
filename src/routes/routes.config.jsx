
import HomeScreen from "features/Home/HomeScreen/HomeScreen";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";


export const RouteConfigs = [

    {
        path: "/dashboard",
        element: HomeScreen,
        isPrivate: false,
        layout: DefaultLayout,
    },

]