import Head from 'next/head';
import { Fragment } from 'react';

import { useRouter } from "next/router";

/* Components */
import Header from '@components/Header';
import Footer from '@components/Footer';
import Whatsapp from '@elements/Whatsapp';

import favicon from '@public/favicon.png';

/* Styles */
import globals from "@styles/globals.js";

function Layout(props) {
    const {children, title} = props
    const router = useRouter();
    return (
        <Fragment>
            <Head>
                <title>{title.toString() ? title : ''} | Caja de Cine</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            {
                router.pathname === '/' &&
                <>
                    <Footer /> 
                    <Whatsapp />
                </>
            }
            <style jsx global>{globals}</style>
        </Fragment>
    );
}

export default Layout;