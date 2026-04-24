"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select } from "@heroui/react";

export function AddTasks({createTasks}) {
    return (
        <Modal>
            <Button variant="secondary">Add a tasks</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Add a Tasks</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createTasks} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="title" type="text">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter your title" />
                                    </TextField>
                                    <TextField className="w-full" name="description" type="text">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter your description" />
                                    </TextField>
                                    <Select name="status" className="w-[256px]" placeholder="Select one">
                                        <Label>Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item name="pending" id="pending" textValue="pending">
                                                    Pending
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item name="in-progress" id="in-progress" textValue="in-progress">
                                                    In-progress
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item name="completed" id="completed" textValue="completed">
                                                    Completed
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                                        <Label>Priority</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item name="low" id="low" textValue="low">
                                                    Low
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item name="medium" id="medium" textValue="medium">
                                                    Medium
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item name="high" id="high" textValue="high">
                                                    High
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                   
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Submit form</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                        
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}