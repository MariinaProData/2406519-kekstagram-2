// 1 способ:
const extractNumber = (payload) => {
  let result = '';
  payload = payload.toString();

  for (let i = 0; i < payload.length; i++) {
    if (Number.isNaN(parseInt(payload[i], 10)) === false) {
      result += payload[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN

// 2 способ:
const getOnlyNumbers = (str) => Number(
  [...str].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN);

getOnlyNumbers('2023 год'); // 2023
getOnlyNumbers('ECMAScript 2022'); // 2022
getOnlyNumbers('1 кефир, 0.5 батона'); // 105
getOnlyNumbers('агент 007'); // 7
getOnlyNumbers('а я томат'); // NaN
