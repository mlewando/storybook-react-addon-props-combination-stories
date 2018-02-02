import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { addCombinations } from '../src';

function TestButton(props: { enabled: boolean; important: boolean; text: string }) {
    return (
        <button disabled={!props.enabled}>
            {props.important ? <b>{props.text}</b> : props.text}
        </button>
    );
}

addCombinations(storiesOf('Basic button example', module)).withCombinations(
    {
        enabled: [true, false],
        important: [true, false],
        text: ['simple', 'extra long text in the button', '']
    },
    ({ enabled, important, text }) =>
        `${!enabled && 'disabled'} ${important && 'important'} button with ${
            text.length === 0 ? 'no text' : text.length < 7 ? 'normal text' : 'long text'
        }`,
    TestButton
);
