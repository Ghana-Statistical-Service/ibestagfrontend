import { Montserrat, Open_Sans} from "next/font/google";
import "../assets/styles/styles.css";
import 'funuicss/css/fun.css'
import "aos/dist/aos.css"
import Head from "next/head";


const font = Montserrat({ subsets:[], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
export const metadata = {
  title: "GSS: ID Cards"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
        <Head><link rel="icon"  type="image/x-icon" href="/favicon.ico"  /></Head>
      <body className={font.className}>
        <div className=" " style={{height:'100%'}}>
        {children}
        </div>
      </body>
    </html>
  );
}
