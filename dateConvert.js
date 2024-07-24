function dateConvert(date) {
    const result = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return result;
}

export default dateConvert;