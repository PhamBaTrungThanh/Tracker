
import axios from 'axios';
import Chart from 'chart.js';
import concat from 'unique-concat';

export const Tracker = {
    install: (Vue) => {

        // Custom functions
        /**
         * Format float number to human-friendly string
         * @param {*} number 
         * @return string
         */
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
        /**
         * Convert number to romanize for list indexing
         * @param {string} num 
         * @return {string} formatted
         */
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
        /**
         * Translate function (in the work)
         * @param {string} str indexing string
         * @return {string} translated string
         */
        Vue.prototype.__ = (str) => {
            const trans_string = {
                "bank_transfer": "Chuyển tiền",
                "cash": "Tiền mặt",
            }
            return trans_string[str];
        }
        /**
         * Convert human readable date to ISO format date
         * Example 20/12/2017 -> 2017-12-20
         * @param {string} str_date 
         * @return {string} iso formated date
         */
        Vue.prototype.toISODate = (str_date) => {
            const split_date = str_date.split('/');

            return `${split_date[2]}-${split_date[1]}-${split_date[0]}`;
        },
        Vue.prototype.getById = (haystack, needle) => {
            if (haystack.length === 1) {
                return haystack[0];
            } else {
                return haystack.find( item => item.id === needle);
            }
            
        }

        /**
         * Create new axios instance
         */
        Vue.prototype.axios = axios.create({
            baseURL: `${window.location.protocol}//${window.location.host}/api/v1`,
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        });



        
        // Default Configurations for Chart.js
        Chart.defaults.global.tooltips.intersect = false;

        // Export to Vue
        /**
         * Embed Chart.js to Vue
         */
        Vue.prototype.Chart = Chart; 

        // Additional Libraries
        const identity = (obj) => obj.id;
        Vue.prototype._concat = (a, b) => concat(a, b, identity);
    }
}

