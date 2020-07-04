export default {
    error: (error) => (process.env.REACT_APP_DEBUG === 'TRUE') ? console.error(error) : '',
    info: (text) => (process.env.REACT_APP_DEBUG === 'TRUE') ? console.log(text) : ''
};