import React, { ComponentType, useEffect } from "react"
import {
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton
} from '@draft-js-plugins/buttons';

export default function HeadlinesButton(props:any) {
    const onMouseDown = (event:any) => event.preventDefault();
    const onClick = () => props.onOverrideContent(HeadlinesPicker);
    return (
        <div onMouseDown={onMouseDown} className={'bi09khh'}>
            <button onClick={onClick} className={'bc4rxid'}>
                H
            </button>
        </div>
    )
}

const HeadlinesPicker = (props:any) => {

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('click', onWindowClick);
        });
        return () => {
            window.removeEventListener('click', onWindowClick);
        }
    }, [])

    const onWindowClick = () => props.onOverrideContent(undefined)
    const buttons:ComponentType[] = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
        <div>
          {buttons.map((Button, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button key={i} {...props} />
          ))}
        </div>
    );
}
 