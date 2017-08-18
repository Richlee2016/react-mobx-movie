import rxios from './rxios'

const home = () => rxios('GET', '/api/v0/movies/home');

export {
    home, // 首页
}