
import axios from 'axios';
import Chart from 'chart.js';
import concat from 'unique-concat';
import type from 'type-detect';
import swal from 'sweetalert2';

/**
 * SETUP
 */

const App = Object.freeze({
    'version': '0.2.3',
    'name': 'MEC Tracker',
    'helpers': {
        /**
         * Format float number to human-friendly money string
         * @param {*} number 
         * @return string
         */
        'monetize': number => {
            if (parseFloat(number) === 0) {
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
        },
        'capitalizeFirstChar': str => str.charAt(0).toUpperCase() + str.substring(1),
        /**
         * Convert number to romanize for list indexing
         * @param {string} num 
         * @return {string} formatted
         */
        'romanize': num => {
            var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
            for ( i in lookup ) {
              while ( num >= lookup[i] ) {
                roman += i;
                num -= lookup[i];
              }
            }
            return roman;
        },
        /**
         * Quick convert human readable date to ISO format date
         * Example 20/12/2017 -> 2017-12-20
         * @param {string} str_date 
         * @return {string} iso formated date
         */
        'toISODate': (str_date) => {
            const split_date = str_date.split('/');

            return `${split_date[2]}-${split_date[1]}-${split_date[0]}`;
        },
        'swal': options => {
            const defaults = {
                'buttonsStyling': false,
                'cancelButtonClass': "button",
                'cancelButtonText': "Hủy",
                'confirmButtonClass': "button is-primary",
                'confirmButtonText': "Xác nhận",
                'customClass': "box",
            };
            const merged = Object.assign({}, defaults, options);
            return new swal(merged);
        },
    }
});
export const capitalizeFirstChar = App.helpers.capitalizeFirstChar;
export const chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
        };

//Chart.defaults.global.tooltips.intersect = false;
export const ChartJs = Chart; 
export const monetize = App.helpers.monetize;


// VUE MIXIN
export const Tracker = {
    install: (Vue) => {
        // Mixins
        Vue.mixin({
            mounted() {
           
            },
            methods: {
                swal: App.helpers.swal,
            }
        })
        // Custom functions
        

        Vue.prototype.comma = App.helpers.monetize;

        Vue.prototype.romanize = App.helpers.romanize;
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

        Vue.prototype.toISODate = App.helpers.toISODate;

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
        

        // Additional Libraries
        const identity = (obj) => obj.id;
        Vue.prototype._concat = (a, b) => {
            if (type(a) === "Object") {
                a = Object.values(a);
            }
            if (type(b) === "Object") {
                b = Object.values(b);
            }
            return concat(a, b, identity);
        }
    }
}

