import rxios from './rxios'

const home = () => rxios('GET', '/api/v0/movieIndex');

export {
    home, // 首页
}