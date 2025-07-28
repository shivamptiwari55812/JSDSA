function stackpush(num){
    let stack=[]
    if(num == null){
        return
    }
    
    else{
        stack.push(num)
    }
    console.log( stack)
}
stackpush(7,5,6,7)
stackpush(8)