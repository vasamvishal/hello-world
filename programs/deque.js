class Deque {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return !Boolean(this.items.length);
    }

    addFront(item) {
        this.items.unshift(item);
    }

    addRear(item) {
        this.items.push(item);
    }

    removeFront() {
        return this.items.shift();
    }

    removeRear() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }
    printQueue()
    {  
        
        var str=" ";
        for(let i=0;i<this.items.length;i++)
        {
            str+=this.items[i]+" ";
        }
        return str;
    }
}
module.exports={
    Deque
}