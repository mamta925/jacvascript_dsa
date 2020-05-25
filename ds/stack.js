function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = (data)=>{
    let size = this._size++;
    this._storage[size] = data;
}

Stack.prototype.pop = (data)=>{
    let size = this._size--, deletedData;
    if(size){
        deletedData = this._storage[size];
        delete this._storage[size];
        return deletedData;
    }
    
}