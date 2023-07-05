import React from 'react';
interface GoogleButtonProps {
    change: (boolean | object);
    setChange: React.Dispatch<React.SetStateAction<(boolean | object)>>;
}
export declare const GoogleButton: React.FC<GoogleButtonProps>;
export {};
