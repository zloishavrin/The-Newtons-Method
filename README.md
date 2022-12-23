# Newtons-Method
Finding the root of a function by Newton's method.
Used to refine the root of the equation f(x)=0 with a given accuracy ε.

Description of the algorithm:
Let f'(x) and f''(x) be continuous and keep signs on [a,b]. Geometrically, Newton's method is equivalent to replacing a small arc of the curve y=f(x) by a tangent drawn at some point to the curve.
Let f''(x)>0 for a≤x≤b,and f(b)>0 and
x0=b and f(x0)*f''(x0)>0.
Define the equation of the tangent to the curve y=f(x) at point B(x0,f(x0))
y-f(x0 )=f'(x0)(x-x0)
The point of intersection of the obtained tangent with the OX axis is x1.
Consider the arc AB1, take point B1 (x1,f(x1)) as a first approximation - draw a tangent and so on. At step k, we obtain:
y-f(x(k))=f'(x(k))(x-x(k)).
In the last equality, put y = 0, x = x(k+1),we get:
x(k+1)=x(k)-f(x(k))/(f'(x(k))), k=0,1,2,...
The algorithm terminates if for any k it turns out that f(x(k)) = 0. If the absolute accuracy of the root ε is given, the algorithm terminates if:
|x(k)-x(k+1)|>ε.

The written code applies the standard mathematical operations (+,-,*,/), the trigonometric functions (sin,cos,ctg,tg), the natural and decimal logarithm (ln,lg) and some other functions (abs - absolute value, cbrt - cube root, sqrt - square root and exp - exponent). All arguments of these functions must be specified in parentheses (e.g., ctg(x)). If you don't have enough of these functions, you can add them inside the toMath function in the js-file.

The toMath function turns mathematical functions into js-functions of the built-in Math object. When adding functions, keep in mind that the original code in the arcsin function will replace 'sin' with Math.sin. Another thing to keep in mind when adding functions is that for some math functions there are no methods in built-in Math object - in such cases, you should use inverse functions or any other conversion of one function to another. This is what is done with the cotangent function in the original code. The cotangent is the inverse of the tangent function, hence ctg(x) = 1/tg(x).

The derivative is calculated as the limit of the ratio of the increment of a function to its argument: lim(∆y/∆x).

