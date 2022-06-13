import Head from 'next/head';
import { Fragment } from 'react';

/* Components */
import Header from '@components/Header';
import Footer from '@components/Footer';
/* Styles */
import globals from "@styles/globals.js";

function Layout(props) {
    const {children, title} = props
    return (
        <Fragment>
            <Head>
                <title>{title} | Caja de Cine</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <style jsx global>{globals}</style>
        </Fragment>
    );
}

export default Layout;