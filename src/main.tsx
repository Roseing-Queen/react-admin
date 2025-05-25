import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router'
import {Provider} from "react-redux";
import router from '@/router';
import store from "@/store";
import {IntlProvider} from "react-intl";
import "@/styles/index.scss"


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <IntlProvider locale="zh-cn" >
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </IntlProvider>
    </StrictMode>,
)
