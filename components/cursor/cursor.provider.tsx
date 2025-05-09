'use client'

import React, { ReactNode } from 'react';
import { useCursor } from '@/utils/useCursor';
import Cursor from '@/components/cursor/Cursor';

interface Props {
    children: ReactNode;
}

const CursorProvider: React.FC<Props> = ({ children }) => {
    const {mousePosition, otherCursors} = useCursor();
    return (
        <>
            {children}
            {otherCursors.map((cursor) => (
                <Cursor key={cursor.userId} cursor={cursor} />
            ))}
        </>
    )
}


export default CursorProvider;
