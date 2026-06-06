const add       = (a, b) => a + b;
    const subtract  = (a, b) => a - b;
    const multiply  = (a, b) => a * b;
    const divide    = (a, b) => {
      if (b === 0) throw new Error("Can't divide by zero");
      return a / b;
    };
    const power     = (a, b) => Math.pow(a, b);
    const squareRoot = (a) => {
      if (a < 0) throw new Error("√ of a negative number");
      return Math.sqrt(a);
    };
    const factorial = (n) => {
      const i = Math.round(n);
      if (i < 0)   throw new Error("Factorial of negative");
      if (i > 170) throw new Error("Result is too large");
      if (i <= 1)  return 1;
      let r = 1;
      for (let k = 2; k <= i; k++) r *= k;
      return r;
    };
    const logBase10  = (a) => { if (a <= 0) throw new Error("log of non-positive"); return Math.log10(a); };
    const naturalLog = (a) => { if (a <= 0) throw new Error("ln of non-positive");  return Math.log(a); };

   
    const selectOp = (sym) =>
      ({ '+': add, '−': subtract, '×': multiply, '÷': divide, 'pow': power }[sym] ?? null);


    const fmt = (n) => {
      if (!isFinite(n)) return 'Infinity';
      const s = parseFloat(n.toPrecision(10)).toString();
      return s.length > 14 ? n.toExponential(5) : s;
    };


    let current = '0', prev = null, operator = null, awaitNext = false;

    const $main  = document.getElementById('main');
    const $expr  = document.getElementById('expr');
    const $error = document.getElementById('error');

    const render   = ()  => { $main.textContent = current; };
    const setExpr  = (s) => { $expr.textContent = s; };
    const setError = (s) => { $error.textContent = s; };
    const clearErr = ()  => { $error.textContent = ''; };

    const reset = () => {
      current = '0'; prev = null; operator = null; awaitNext = false;
      setExpr(''); clearErr(); render();
    };


    const pushDigit = (d) => {
      clearErr();
      current = awaitNext ? d : (current === '0' ? d : current + d);
      awaitNext = false;
      render();
    };

    const pushDot = () => {
      if (awaitNext) { current = '0.'; awaitNext = false; render(); return; }
      if (!current.includes('.')) { current += '.'; render(); }
    };

    const pushBinaryOp = (sym) => {
      clearErr();
      const val = parseFloat(current);
      if (prev !== null && !awaitNext) {
        try {
          const result = selectOp(operator)(prev, val);
          setExpr(fmt(prev) + ' ' + operator + ' ' + fmt(val) + ' =');
          current = fmt(result); prev = result; render();
        } catch (e) { setError(e.message); prev = val; }
      } else { prev = val; }
      operator = sym; awaitNext = true;
      if (!$error.textContent) setExpr(fmt(prev) + ' ' + sym);
    };

    const pushEquals = () => {
      clearErr();
      if (prev === null || !operator) return;
      const val = parseFloat(current);
      try {
        const result = selectOp(operator)(prev, val);
        setExpr(fmt(prev) + ' ' + operator + ' ' + fmt(val) + ' =');
        current = fmt(result); prev = null; operator = null; awaitNext = true;
        render();
      } catch (e) { setError(e.message); }
    };

    const pushUnary = (sym) => {
      clearErr();
      const val = parseFloat(current);
      const fns = { sqrt: squareRoot, fact: factorial, log: logBase10, ln: naturalLog };
      const labels = { sqrt: '√', fact: '!', log: 'log', ln: 'ln' };
      try {
        const result = fns[sym](val);
        setExpr(sym === 'fact' ? val + '!' : labels[sym] + '(' + val + ') =');
        current = fmt(result); awaitNext = true; render();
      } catch (e) { setError(e.message); }
    };

    const toggleSign = () => {
      const n = parseFloat(current);
      if (!isNaN(n) && n !== 0) { current = fmt(-n); render(); }
    };


    function op(key) {
      if (key === 'AC') { reset(); return; }
      if (key === 'pm') { toggleSign(); return; }
      if (key >= '0' && key <= '9') { pushDigit(key); return; }
      if (key === '.') { pushDot(); return; }
      if (['+', '−', '×', '÷', 'pow'].includes(key)) { pushBinaryOp(key); return; }
      if (key === '=') { pushEquals(); return; }
      if (['sqrt', 'fact', 'log', 'ln'].includes(key)) { pushUnary(key); return; }
    }

  
    document.addEventListener('keydown', (e) => {
      const map = { 'Enter':'=', '/':'÷', '*':'×', '-':'−', '+':'+', Escape:'AC', Backspace:'AC' };
      const k = map[e.key] ?? e.key;
      if ('0123456789.'.includes(k) || ['+','−','×','÷','=','AC'].includes(k)) {
        e.preventDefault(); op(k);
      }
    });