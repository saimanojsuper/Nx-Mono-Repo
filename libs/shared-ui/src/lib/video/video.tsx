import styles from './video.module.scss';
import { Rnd } from "react-rnd";
import { useEffect, useRef, useState } from 'react';

/* eslint-disable-next-line */
export interface VideoProps {}

export function Video(props: VideoProps) {
  const myRef = useRef();

    const [x, setX] = useState(0);

    const [y, setY] = useState(0);

    const [width,setWidth] = useState('100%');
    const [height,setHeight] = useState('100%');

    const handleResize = ()=> {
      console.log('check');

        //  const xP = ;
        //  const yP =   : 100
        //  setX(xP);
        //  setY(yP);
    }

    useEffect(()=>{
      
      document.getElementById('video')?.addEventListener('resize',handleResize);
      const xP = myRef.current ? myRef.current.offsetLeft : 100;
         const yP =  myRef.current ? myRef.current.offsetTop : 100
         //setX(xP);
         //setY(yP);

    },[])

     console.log('x',x,'y ',y);
  return (
    <div id='video' ref={myRef} className={styles['container']}>
  <Rnd  
    position={{
      x : x ? x : 100,
      y : y ? y : 100
    }}

    size={{
      width,
      height,
    }}

    onDragStop={(e: any, d: any) => {
      console.log('sx',x,'y ',y);
      setX(d.x);
      setY(d.y);
      //setState({ x: d.x, y: d.y });
    }}
    onResize={(e, direction, ref, delta, position) => {
      setWidth(ref.offsetWidth)
      setHeight(ref.offsetHeight)
      // setState({
      //   width: ref.offsetWidth,
      //   height: ref.offsetHeight,
      //   ...position,
      // });
    }}
   bounds="parent">
      <div style={{border: '5px solid grey' , width:'100%',height: '100%'}}>
      <iframe
            width='100%'
            height='100%'
            id="video"
            src={"https://www.youtube.com/embed/hTWKbfoikeg" }
            frameBorder="0"
            allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
    </Rnd>
    </div>
  );
}

export default Video;
