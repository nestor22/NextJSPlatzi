import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document{
    render(){
        return (
            <Html lang="en">
                <Head>
                    <title>React Shop</title>
                    {/* solo para lo de google analitys 
                     <script dangerouslySetInnerHTML={{
                        __html: `sadf`
                    }}/> */}
                </Head>
                <body>
                    {/* super importantes main y next script
                    ya que ellos llevan todo lo que se contrulle para la app
                     */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};

export default MyDocument;