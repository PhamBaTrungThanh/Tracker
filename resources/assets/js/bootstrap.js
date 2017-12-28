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

        }
    }
}

