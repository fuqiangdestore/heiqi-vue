import React from 'react';
import ShowArea from './showArea';
import Buttons from './button';
import { Color } from './color';

function Example6() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Example6