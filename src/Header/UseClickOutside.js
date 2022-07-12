import { useEffect } from "react";

export default function UseClickOutSide (ref , handler){

    useEffect(()=>{
        const listener = event => {
            const el = ref?.current;
            if (!el || el.contains(event.target)){
            
                return;
            }
            handler();

          
        };
          document.body.addEventListener('click', listener)
            document.body.addEventListener('mousedown', listener)

            return()=>{
                document.body.removeEventListener('click', listener)
                document.body.removeEventListener('mousedown', listener)
            }
    },[])
}