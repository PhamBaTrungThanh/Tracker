
import axios from 'axios';
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
        Vue.prototype.axios = axios.create({
            baseURL: `${window.location.protocol}//${window.location.host}/api/v1`,
            timeout: 5000,
            
        });
        Vue.prototype.__ = (str) => {
            const trans_string = {
                "bank_transfer": "Chuyển tiền",
                "cash": "Tiền mặt",
            }
            return trans_string[str];
        }
        Vue.prototype.toISODate = (str_date) => {
            const split_date = str_date.split('/');

            return `${split_date[2]}-${split_date[1]}-${split_date[0]}`;
        }
    }
}

