export const Tracker = {
    install: (Vue) => {
        Vue.prototype.$comma = (number) => {
            if (isNaN(number)) {
                return "-";
            } else if (parseFloat(number) === 0) {
                return "-";
            } else {
                var parts = parseFloat(number).toFixed(3).toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                if (parseInt(parts[1]) === 0) {
                    return parts[0];
                } else {
                    return parts.join(".");
                }
            }
        };
        Vue.prototype.$romanize = (num) => {
            var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
            for ( i in lookup ) {
              while ( num >= lookup[i] ) {
                roman += i;
                num -= lookup[i];
              }
            }
            return roman;
        }
    }
}

