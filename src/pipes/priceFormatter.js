export const formatMoney = (price) => {
    return "Rs. " + price.toFixed(0).replace(/\d(?=(\d{5})+\.)/g, '');
};