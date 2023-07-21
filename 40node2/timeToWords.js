function timeToWords(input) {
    // Arrays to hold word representations
    const hoursWords = [
        'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve'
    ];

    const minutesWords = [
        '', 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
        'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven',
        'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five',
        'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one', 'forty two', 'forty three',
        'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine', 'fifty', 'fifty one',
        'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine'
    ];

    const amPmWords = ['am', 'pm'];

    // Split the input string into hours and minutes
    const [hourStr, minuteStr] = input.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    let result = '';

    // Handle special cases for midnight and noon
    if (hour === 0 && minute === 0) {
        result = hoursWords[0];
    } else if (hour === 12 && minute === 0) {
        result = hoursWords[12];
    } else {
        // Convert hours and minutes to words
        let hourWord;
        if (hour === 0 || hour === 12) {
            hourWord = hoursWords[12];
        } else {
            hourWord = hoursWords[hour % 12];
        }

        let minuteWord = minutesWords[minute];
        let amPmWord = amPmWords[Math.floor(hour / 12)];

        // Handle "o'clock" and "twelve" cases
        if (minute === 0) {
            result = `${hourWord} o'clock ${amPmWord}`;
        } else if (hour === 12) {
            result = `twelve ${minuteWord} ${amPmWord}`;
        } else {
            result = `${hourWord} ${minuteWord} ${amPmWord}`;
        }
    }

    return result;
}
module.exports = timeToWords;

