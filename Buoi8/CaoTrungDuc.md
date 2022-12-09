# Phân biệt var, let và const 
|       | Global scope | Funtion scope | Block scope | Can be reassigned |
|-------|--------------|---------------|-------------|-------------------|  
|  Var  |       ✅    |       ✅      |      ❌     |        ✅        |
|  Let  |      ❌     |       ✅      |      ✅     |        ✅        |
| Const |      ❌     |       ✅      |      ✅     |        ❌        |
# Các toán tử trong JavaScript
> Toán tử số học: +, -, *, **(ES6), /, %, ++, --
> Toán tử so sánh: ==, ===, !=, !==, >, <, >=, <=, ?
> Toán tử logic: &&, ||, !
> Toán tử gán: =, +=, -=, *=, /=, %=, **= 
> Toán tử 3 ngôi: ?:
# Câu lệnh điều kiện trong JavaScript
> Câu lệnh if
if(condition) {
	// Code ở đây
}
> Câu lệnh else 
if(condition) {
	// condition = true thì code ở đây sẽ chạy
} else {
	// condition = false thì code ở đây sẽ chạy
}
> Câu lệnh if...else lồng nhau
if(condition1) {
	// condition1 = true thì code ở đây sẽ chạy
} else {
	// condition1 = false thì code ở đây sẽ chạy
    
    if(condition2) {
	    // condition2 = true thì code ở đây sẽ chạy
    } else {
	    // condition2 = false thì code ở đây sẽ chạy
    }
}
> Câu lệnh if...else rút gọn
condition ? // condition = true : // condition = false
