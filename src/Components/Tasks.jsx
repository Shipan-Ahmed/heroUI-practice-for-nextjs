import { Card } from '@heroui/react';
import React from 'react';

const Tasks = ({ task }) => {
    const { title, description, status } = task;
    return (
        <Card className=" border " variant="primary">
            <Card.Header>
                <Card.Title>{title} </Card.Title>
                <Card.Description>{description} </Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Use to draw moderate attention</p>
            </Card.Content>
        </Card>
    );
};

export default Tasks;