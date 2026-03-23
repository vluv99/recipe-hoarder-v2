export class Direction {
    orderNumber: number
    text: string
    // attach images to directions optionally

    constructor(direction: Direction) {
        this.orderNumber = direction.orderNumber;
        this.text = direction.text;
    }
}