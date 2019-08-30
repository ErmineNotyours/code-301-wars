
function capitalize(s) {
    var a;
    var b;
    a = '';
    b = '';
        if (s.length > 1) {
            for (let i = 0; i < (s.length); i++) {
                if ((i % 2) !== 0) {
                    b += s[i].toUpperCase();
                    a += s[i];
                    }
                else
                    {
                    b += s[i];
                    a += s[i].toUpperCase();
                    }
                }
            }
            return [a, b]
        }