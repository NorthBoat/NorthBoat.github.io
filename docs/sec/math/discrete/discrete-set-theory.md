---
title: 集合论
date: 2023-12-29
tags:
  Math
---

## 集合

### 集合、子集、幂集

基本概念

- 集合
- 元素
- 有限集
- 无限集

集合的表示法

- 穷举法（列举法）
- 描述法

空集：自身不包含任何元素的集合，空集 ∅ 是唯一的，为任何集合的子集
$$
\empty = \{\}
$$
元素、集合的关系（包含的关系，箭头指向谁，谁被包含）

- 属于：记作 a ∈ A，即元素 a 属于集合 A（集合 A 中包含元素 a）
- 相等：两个集合相等当且仅当他们有相同的元素
- 子集：记为 ⊃，A ⊃ B 表示 A 包含 B（B 是 A 的子集），具有自反性、传递性

当两个集合互为对方的子集时，两集合相等，空集为任何集合的子集

注意属于和包含的符号，箭头朝哪边，哪个集合作宾语，即被包含的一方

子集与幂集

- 幂集：A 的幂集记为 P(A)，P(A) 为“子集的集合”，其元素为集合 A 的所有子集，换句话说，P(A) 是 A 的所有子集组成的集合


一个集合 A，其包含 k 个元素的子集的个数有
$$
C_n^k
$$
故 A 的幂集 P(A) 元素个数为
$$
1+\sum_{k=1}^nC_n^k = 1+C_n^1+...+C_n^n=2^n
$$
即为 A 的子集的个数，其中 1 为空集

### 集合运算

集合的基本运算及性质：交与并，差与补

差的常用定理（结合概率论理解）
$$
A-B=A∩\overline{B}=A-(A∩B)
$$
注意补是参照于全集的概念，如全集为 E，则 A 的补为
$$
\overline{A} = E-A
$$

德摩根律：并的非 = 非的交
$$
\overline{A∪B}=\overline{A}∩\overline{B}
$$
交的非 = 非的并
$$
\overline{A∩B}=\overline{A}∪\overline{B}
$$

这和数理逻辑中合取析取的德摩根律是一样的
$$
\lnot(A\wedge B)=\lnot A\vee \lnot B
$$
对称差，用异或符号表示
$$
A\oplus B=(A-B)∪(B-A)
$$
其中差运算可替换为
$$
A-B = A∩\overline{B}\quad B-A=B∩\overline{A}
$$
显然
$$
A\oplus A = (A-A)∪(A-A)=\empty\\
A\oplus\empty=(A-\empty)∪(\empty-A)=A
$$
且满足结合律
$$
A\oplus B\oplus C = A\oplus (B\oplus C)
$$
有点像概率里的加法（只是形式上，意义好像根本不搭嘎）
$$
A⊕B⊕C = A+B+C-AB-AC-BC+ABC
$$

包含排斥原理，讨论有限集中元素的计数问题

比如
$$
A∩B=\empty\Rightarrow |A|+|B|=|A∪B|
$$
其中 |A| 表示集合 A 中元素的数量

参考概率论的包含排斥关系，包含排斥原理为
$$
|A∪B| = |A|+|B|-|A∩B|
$$

可以推广到多个集合
$$
|A+B+C|=|A|+|B|+|C|-|AB|-|AC|-|BC|+|ABC|
$$

### 无限集

集合的基数：即集合中元素的个数

等势的集合：若两个集合之间可以通过一个双射函数进行映射，则这两个集合等势

- 显然，集合的基数相同是集合等势的必要条件

阿列夫零：用于形容无限集的基数

自然数集（非零整数）、有理数集（分数）的基数便是阿列夫零

- 且自然数集与有理数集等势

## 二元关系

### 关系的性质

序偶和笛卡尔乘积

- 序偶即有序的两个元素对
- 笛卡尔乘积

关系：序偶的集合

元素集合、序偶、二元关系的数量联系

- n 个元素的集合能构成 n^2 个不同的序偶（矩阵）
- m 个不同的序偶能构成 2^m 个不同的二元关系（不同的序偶集合）

关系及其表示：关系是逻辑，作用于集合之上才有意义

关系的性质：自反、传递、对称、反对称

- 均可以**用关系矩阵来判断**其性质

等价关系：自反、传递、对称

偏序关系：自反、传递、反对称

### 关系的运算

复合关系和逆关系

- 复合关系：即合成关系，通过中间命题传递，在关系矩阵中表现为**矩阵乘法**
- 逆关系：逻辑不变，序偶顺序改变，在关系矩阵中表现为**矩阵转置**

关系的闭包运算：自反闭包（r）、传递闭包（t）、对称闭包（s）

矩阵乘法计算关系的传递闭包
$$
t(R) = \bigcup_{i=1}^n R^i=R∪R^2∪R^3∪...∪R^n
$$
其中 n 指关系 R 的关系矩阵的阶数，这个式子就是把 n 个关系矩阵的幂运算结果并起来

写是要这么写，但很多时候可以通过结点间连通性来判断是否传递/**可达**

计算集合上的二元关系种类数量：假设 A 是三元集合

- 有 8（2^3） 个既对称又反对称的二元关系，有 3 种不同的序偶对`<a,a>,<b,b>,<c,c>`可构成这样的关系
- 有 64（2^6） 个自反的二元关系，确定`{<a,a>,<b,b>,<c,c>}`后剩下还有 6 个不同的序偶对
- 有 64（2^3*2^3）个对称的二元关系，自反的三个序偶和对称的三对序偶相组合
- 有 8（2^3） 个等价关系，确定`{<a,a>,<b,b>,<c,c>}`后剩下三对对称的序偶对

### 偏序集与格

等价关系和等价类：满足自反性、传递性、对称性的关系

- 等价类的写法：和同余类一样，如模 3 同余类表示为`[0] = {0,3,6,...}`

偏序关系：具有自反性、传递性、反对称性的二元关系集合（如整数集合上的小于等于关系）

偏序集的大小比较

- 注意能比较的前提是两元素具有偏序关系，所以孤立点不比任何元素大，也不比任何元素小，进而有孤立点的偏序集必定没有最大元和最小元

全序关系：在偏序关系中，每个元素之间均可以通过该偏序关系相比较，则该偏序关系为全序关系

哈斯图：通过关系图和 CovA 来构造

偏序集及其子集

- 极大元、极小元
- 最大元、最小元
- 上确界、下确界

格：在偏序集中，任意两个元素构成的子集均有其上下确界，这样的偏序集叫做格

分配格：？偏序关系满足交换律（这里总是不免想到群中的二元运算）

由格可以推导出一个代数系统，其二元运算为 ∩ 或 ∪，定义为
$$
a、b\in A\rightarrow a∪b=glb(a,b),\,a∩b=lub(a,b)
$$
其中 a、b 的大小关系通过偏序关系确定，glb 表示上确界，lub 表示下确界

- 由于在格中，二者一定有上下确界，并且确界一定在集合 A 中，显然这是一个代数系统（满足封闭性）

## 函数

### 单射、满射和双射

函数是一种特殊的二元关系，他要求二元关系的前件集合 A 中的每个元素 x 在后件集合 B 中都有**唯一**一个元素 y 与之构成属于该函数的序偶

- 就是说，一个 x 只能对应一个 f(x)，不能一对多，如`{<1,2>, <1,3>}`就是不被允许的

单射：若 x1 ≠ x2，则 f(x1) ≠ f(x2)

- 即每个存在的 y 对应唯一的一个 x（单调函数就是典型的单射，但注意单射函数不一定单调），当然在后件集合 B 中允许有不被 x 映射的 y

满射：函数的值域为后件集合，即后件 B 被映射满了

双射：同时满足单射和漫射，此时每一个 x 和 y 一一对应（具有反函数）

集合的元素数量和单、满、双射关系

- 若为单射，则必有 |A| ≥ |B|
- 若为满射，则必有 |A| ≤ |B|
- 若为双射，则必有 |A| = |B|

### 函数运算

复合运算：和关系的复合运算一样，就是复合函数
$$
(f\,o\,g)(x) = f(g(x))
$$
这里的复合是左复合，和关系的复合恰好相反

- 关系的复合是将前件的定义域映射到后件的值域（前件的值域与后件的定义域相同）

如关系的复合
$$
(xRy)\,o\,(ySz) = x(R\,o\,S)z
$$
逆运算（反函数）：只有双射的函数在经过逆运算之后才有反函数，若非双射，逆运算后会是一个普通的二元关系（而非函数）