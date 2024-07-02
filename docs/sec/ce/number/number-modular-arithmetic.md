---
title: 整除和同余
date: 2023-6-15
tags:
  - NumberTheory
---

## 整除

### 整除的概念、素数和合数

> 素数是网络安全的基础

素数：即除自身和 1 以外，没有其他因数的数，如 3 只能被 1 和自身整除，那么 3 是一个素数，注意 1 不是素数

整除的表示，若 b 能够整除 a，c 不能整除 a，则记为
$$
b\mid a\quad c\nmid a
$$
素数的求法：Eratosthenes 筛法，我们认为一个数 n 为素数，当且仅当
$$
c_i\nmid n
$$
其中 ci 为小于等于 √n 的所有素数，即当数 n 不被小于 √n 的所有素数整除时，n 为一个素数

可以用一个递归算法实现

```java
list res; // 一个全局的顺序表，用以记录找到的素数
bool divide_exactly(int n, list res){
    for(int i: res){
        if(n % i == 0){
            return 1; // 被整除
        }
    }
    return 0; // 不被 res 中所有数整除
}

void search_prime_number(int n){
    if(n == 2){
        res.add(2);
        return;
    }
    int q = sqrt(n); // 取平方根
    search_prime_number(q); // 递归求解
    // 当 n 大于 2 时，根据小于 q 的所有素数，加入不被所有素数整除且小于 n 的数，即为 (q, n) 区间内的素数
    for(int i = q+1; i <= n; i++){
        if(divide_exactly(i, res)){
            continue;
        }
        res.add(i); // 当 i 不被所有 (0, q) 区间内素数整除时，确定 i 为一个素数，添入 res
    }
}

list get_prime_number(int n){
    n = abs(n); // 取绝对值
    if(n < 2){
        return NULL;
    }
    search_prime_number(n);
    return res;
}
```

证明素数无限，反证法（Euclid 开创的先和）

设素数有限，共有 m 个，表示为 Pi（1 ≤ i ≤ m），设数 n 为
$$
n = 1+\Pi P_i
$$
由于素数一共就 m 个，且 n 大于任意一个素数（相乘大于 1 的数越乘越大），所以 n 一定不是一个已知的素数，即为合数

根据 Eratosthenes 筛法，当一个数不被任意小于等于 √n 的素数整除时，n 将是一个素数，在这里
$$
n \% P_i = 1
$$
不可能被整除，故 n 其实是一个素数，但素数又有限，故出现矛盾，假设不成立，素数应该是无限的

### 最大公因子和最小公倍数

数 n 为 a 和 b 最大公因子，充要条件为

- n 整除 a 和 b
- a 和 b 的任意其他公因子整除 n

记作
$$
n = (a,b)
$$
数 m 为 a 和 b 最小公倍数，充要条件为

- a 和 b 整除 m
- m 能够整除 a 和 b 的任意公倍数

记作
$$
m = [a,b]
$$

### 公因子的线性表示

定理1.2.2：任意两个整数的公因子可以被这两个整数线性表示，即
$$
(a,b) = x_1a+x_2b
$$
如
$$
(963,657) = 9 = -15\times 963+22\times 657
$$

### 算术基本定理

算术基本定理：任意正整数都可以被表示为一个素数乘积，如
$$
21 = 2^0\times 3^1\times 7^1
$$
这也叫做整数的**标准分解式**

通过标准分解式，我们可以求得任意整数的公因子和公倍数
$$
(a,b) = \Pi\,min\{a_i,b_i\}\quad
[a,b] = \Pi\,max\{a_i,b_i\}
$$
其中 ai 和 bi 分别为整数 a 和 b 在各个素数上的分解，如对于
$$
168 = 2^3\times3\times7\quad 180=2^2\times3^2\times5
$$
有
$$
(168,180) = 2^2\times3=12\quad [168,180]=2^3\times3^2\times5\times7=2520
$$
但一般情况下我们并不这么求最大公因子或最小公倍数，因为要求整数的标准分解式本就是一个很复杂的事，一般采用欧几里得算法求最大公因子

### Euclid 算法和辗转相除法

欧几里得算法，不失一般性，设 b > a，则 a 和 b 的最大公因子满足
$$
(a,b) = (a, b-a)
$$
据此可以一直往下迭代减，直到 a 和 b 迭代为相同值或出现 1

拓展 Euclid 算法：辗转相除法，比传统的欧几里得更快收敛，采用除法取余的形式得到新的 b ，设整数 a < b，则有
$$
(a,b) = (a,b\%a)
$$
其中 b%a 为 b 除以 a 的余数

欧几里得算法求最大公因子

```java
int euclid(int a, int b){
    if(a == b)	return a;
    if(a == 1 || b == 1)	return 1;
    if(a > b)	return euclid(a-b, b);
    else	return euclid(a, b-a)
}
```

扩展欧几里得算法（辗转相除法）求最大公因子

```java
int extended_euclid(int a, int b){
    if(a == b)	return a;
    if(a > b){
        if(a%b == 0)	return b;
        return extended_euclid(a%b, b);
    }else{
        if(b%a == 0)	return a;
        return extended_euclid(a, b%a);
    }
}
```

使用辗转相除法求得最大公因子并把最大公因子用原整数线性表示

<img src="./assets/qq_pic_merged_1688921878711.jpg">

## 数论函数及定理

数论函数，就是一些规定好的函数变换，这里引入一个函数的性质：积性

设有一元函数 f，当自变量 m 和 n 为整数且互质时，满足
$$
f(mn) = f(m)f(n)
$$
则称函数 f 是积性函数

当 m 和 n 在任何情况下均满足上式（即无需互素），则称函数 f 完全积性

### 欧拉函数和定理

> Euler

欧拉函数 φ(n)，记录小于 n 的与 n 互素的正整数的个数，如
$$
\phi(7) = count(\{1,2,3,4,5,6\}) = 6
$$
欧拉函数有这样三种取值情况
$$
\phi(n) = \begin{cases}
n-1&n为素数\\
\phi(p_1)...\phi(p_n)=(p_1-1)...(p_n-1)&p,q等为素数\\
x^{z-1}&n=x^z
\end{cases}
$$
当 n 为素数时，所有小于 n 的正整数均与之互质，故 φ(n) = n-1

当 n 为合数时，一定可以被表示为有限个素数乘积，其 φ(n) 值通过这些素数的 φ(p) 直接相乘可以得到，又素数的 φ(p) 值为 p-1

当 n 为一个指数，其 φ(n) 值为这个指数的低一阶，如
$$
8 = 2^3\rightarrow \phi(8) = 2^{3-1} = 4
$$
欧拉定理
$$
(a,m)=1\rightarrow a^{\phi(m)}\equiv 1\,mod\,m
$$
当 a 与 m 互质，则 a 的 φ(m) 次方模 m 将余 1

### 威尔逊定理

当 p 是一个质数，则其减一的阶乘模自身将余 -1（等价于余 p-1）
$$
(p-1)!\,\equiv -1\,mod\,p
$$
将在 Rabin 密码体系中用到

### 费马小定理

当 p 为素数，则
$$
a^p\equiv a\,mod\,p
$$

## 同余

### 同余的定义和性质

同余的概念，设有整数 a 和 b，除数 m，若
$$
m\mid (a-b)
$$
即 m 整除 a 和 b 之差，则我们说 a 和 b 同余，这是什么意思呢？

是这样，我们把模操作视作一个周期函数，若 a 和 b 的差值刚好被 m 整除，那就说明 a 和 b 刚好跨越 m 模运算的一个周期倍数 t（t = a-b），故二者的模运算值一定相等，f(t+x) = f(x)
$$
a\%m = k = b\%m
$$
但注意这里的函数值 k，即**最小正余数**，和周期倍数 t（a 和 b 的差值）没有必然关系

但可以确定的是，a 和 b 互为模 m 的一个余数，即
$$
a = b+q_1m\quad b = a+q_2m
$$
同余的性质

- 自反性：整数自己和自己同余
- 对称性：a 与 b 相互同余
- 传递性：a 与 b 同余，b 与 c 同余，则 a 与 c 同余

同余的加减乘除

### 辗转相除求解逆元

当 (a, m) = 1 时，这个最大公因子可以表示为
$$
ax+my = 1
$$
则有
$$
ax \% m = 1 
$$
此时则称这个系数 x 为整数 a 对模 m 的逆元，记作
$$
x = a^{-1}
$$
这对于 m 来说是相互的，一定也有 m 的对模 a 的逆元为
$$
y = m^{-1}
$$
通过辗转相除法（广义欧几里得算法），可以得到一个整数的逆元，参考第一节最后的例题，先通过辗转相除法明确 (a, b) = 1（a 和 b 的最大公因子为 1，即二者互素），再根据计算过程将 1 线性表出
$$
ax + by = 1
$$
直接可得
$$
a^{-1} = x\quad b^{-1} = y
$$

### 剩余类和剩余系

同余类是剩余类的集合，剩余类是一个数集，剩余系是 m 个剩余类中各抽出一个元素组成的数集

对于整数 m 来说，他将整个整数范围分为 m 各剩余类，即
$$
[0]_m = \{x|m\mid x\}\quad [m-1]_m = \{x|x\%m=m-1\}
$$
同余类即为
$$
\{[0],[1],...,[m-1]\}
$$
剩余系即为
$$
\{a_0,a_1,a_2,...,a_{m-1}\}\quad a_i\in [i]_m
$$
绝对最小完全剩余系
$$
-\lfloor\frac{m}{2}\rfloor,...,-1,0,1,...,\lfloor\frac{m}{2}\rfloor
$$

当 [i] 中 i 与模数 m 互素时，我们称 [i] 是一个缩同余类，已知缩同余类的个数等于 φ(m)（即欧拉函数的值）

### 模指数运算

原理
$$
(a\times b)\%m = [a\%m\times b\%m]\%m
$$
对于指数
$$
a^n
$$
有一种比较朴素的解法，即

```java
int modulo(int a, int n, int m){ // a为底数，n为指数，m为模数
    int c = 1;
    for(int i = 0; i < n; i++){
        if(c > m){
            c = c%m;
        }
        c *= a%m;
    }
    return c;
}
```

显然这样的时间复杂度为 O(n)

将指数由二进制表示
$$
n = b_k2^k+b_{k-1}2^{k-1}+...+b_12^1+b_02^0
$$
其实就是把一个十进制整数用二进制表示，如
$$
10 = 1010\quad 14 = 1110
$$
则所需的数组`b1 = [1,0,1,0], b2 = [1,1,1,0]`

原指数可表示为
$$
((...((a^{b_k})^2a^{b_{k-1}})^2...)^2a^{b_1})^2a^{b_0}
$$
r如
$$
10 = ((((1)^2\times2)^2\times1)^2\times2)^2\times1
$$
于是模指数运算可以化简为各个
$$
(\Pi\,a^{b_i}\% m)\%m 
$$
模指数运算的算法实现，牢记

```java
// 模指数运算
int modulo_exponential_operations(int a, int n, int m){
    chat* b;
    atoi(n, b, 2); // atoi 函数
    int c = 1;
    for(char i: b){
        // 每步都要取模，防止溢出
        c = (c^2) % m;
        if(i == '1') // 当当前位置二进制为 1，乘上一个底数 a
            c = (c*a) % m;
    }
    return c;
}
```

这样运算的时间复杂度降低到 O(logn)

在手动运算时，按照以下步骤求解

1. 计算指数的二进制，得到所需数组 b
2. 设 c 初始值为 1，循环平方并且遍历数组 b，b[i] 为 1 时乘以底数 a

即手动执行上述程序（模拟过程），即可求解

举个栗子

<img src="./assets/1689697928021.jpg">