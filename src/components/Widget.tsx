import {ChatTeardropDots} from 'phosphor-react'; 
// import { useState } from 'react';
import {Popover} from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

// Quando queremos mudar alguma coisa no react com alguma ação, utilizaremos
// o estado

export function Widget(){

    // const [isWidgetOpen, setIsWidgetOpen] = useState(false)


    // function toggleWidgetVisibility(){
    //     // Vai mudar o valor booleano
    //     setIsWidgetOpen(!isWidgetOpen)
    // }

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>

            {/* {isWidgetOpen ? <p>Hello world</p> : null} */}
           
            {/* { isWidgetOpen && <p>Hello world</p> } */}
            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                   
                    Feedback
                </span>
            </Popover.Button>

        </Popover>
       
    )
}