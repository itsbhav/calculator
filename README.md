# Getting Started with Calculator WebApp

### `Deployed Link`
The Deployed project is available on [link](https://itsbhav.github.io/calculator)

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
You should (run npm i .) first, because repo does not contain node_modules

The page will reload when you make changes.

You may also see any lint errors in the console.

### `Functions`
The project has functions normal 
1. Add
2. Subtract
3. Multiply
4. Divide
5.  Percentage\
functions for Normal Calculator.


However, its scientific mode has functions such as 
1. Sin
2. Cos
3. Tan
4. ArcSin
5. ArcCos
6. ArcTan
7. Log10
8. Ln
9. Sinh
10. Cosh
11. Tanh
12. ArcSinh
13. ArcCosh
14. ArcTanh
15. Cube
16. Cuberoot
17. Squareroot
18. Exponent
19. Pow(x,y)
and Many more functions.

These functions are used from "MathJS" --> a react library from npm.


You may also use multiple functions and expressions combinedly, however, wrong expression will result in error which is handled.

### `Security`
To mitigate security risk in using eval and evaluate functions, functios
1. import
2. createUnit
3. evaluate
4. parse
5. simplify
6. derivate
are restricted from injection to the input. This will reduce injection attack.

Input from the keyboard is also disabled to mitigate injection of harmful code through input.


### `History Stack`
The history of calculations are stored in History Stack in Local Storage and a function to clear historyu is also available.

### `Feedback`
The project is open for public use and any feedback to improve are most welcome.
