import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
    return (
        <div>

            <h1>This is hero pages</h1>
            <Button>primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">outline</Button>
            
        </div>
    );
};

export default HeroPage;