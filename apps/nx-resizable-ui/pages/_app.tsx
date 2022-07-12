import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {CardComp,Video} from '@nx-resizable-ui/shared-ui';
import Split from "react-split";
import { Rnd } from "react-rnd";
import { useEffect } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {

  const parentBoundary = {
    background: "#eee",
    width: "100%",
    height: "100%",
  };

 

  return (
    <>
      <Split direction='vertical' style={{height:'calc(200vh)'}} >
        <Split className="wrap" >
            
        {/* <div className='comp' style={parentBoundary}> */}
             <CardComp {...parentBoundary} />
              {/* <Rnd bounds="parent">
                <CardComp/>
              </Rnd> */}
            
              
            
            
              <CardComp {...parentBoundary} />
              {/* <Rnd bounds="parent">
              <CardComp/>
              </Rnd> */}
              
            
        </Split>
        {/* <div style={parentBoundary} > */}
          
          {/* <Rnd   bounds="parent"> */}
          
           <Video  />

          {/* </Rnd>  */}
        
      </Split>

      {/* <Head>
        <title>Welcome to nx-resizable-ui!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main> */}
    </>
  );
}

export default CustomApp;
