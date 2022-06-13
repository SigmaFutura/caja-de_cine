import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render() {
        return (
            <Html>
                <Head>
                    {/* typed */}
                    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
                    {/* Whatsapp */}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                    <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;