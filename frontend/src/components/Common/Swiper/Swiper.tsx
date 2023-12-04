import {register} from 'swiper/element/bundle';
import React ,  { useRef, useLayoutEffect,Fragment  } from 'react';
import {SwiperOptions} from 'swiper/types';
import { Swiper } from 'swiper';

register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': any; // specify the JSX.Element attributes type here
      'swiper-slide': any; // specify the JSX.Element attributes type here
    }
  }
}

interface SwiperWrapperProps {
    children: (obj: any, i: number) => React.ReactNode;
    data: any;
    swiperScrollProps: SwiperOptions;
    defaultClasses?: string;
}

interface SwiperNew extends Swiper {
    initialize: () => void;

}

export default function SwiperWrapper({children,data,swiperScrollProps,defaultClasses} : SwiperWrapperProps){

    const swiperRef = useRef<SwiperNew>(null);

    useLayoutEffect(()=>{

       const swiperEl = swiperRef.current;

       if (swiperEl) {
        const swiperParams = {
          ...swiperScrollProps
        };
    
        Object.assign(swiperEl, swiperParams);
    
        swiperEl.initialize();
      }

    },[swiperScrollProps])

    return (
        <>
        <swiper-container class={`${defaultClasses ? defaultClasses : '' } `} ref={swiperRef} init="false">
                {
                    data?.map?.((obj:any,i:number)=>{
                        return  <Fragment key={i}>
                                     <swiper-slide>{children(obj,i)}</swiper-slide>
                                </Fragment>
                    })
                }
        </swiper-container>
        </>
    )
}