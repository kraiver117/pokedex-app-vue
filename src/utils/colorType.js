export const getColorType = (type) => {
    switch(type){
        case 'grass': return '#48d0b1';
        case 'fire':  return '#fb6c6c';
        case 'water':  return '#76bdfe';
        case 'bug':  return '#f7786b';
        case 'normal':  return '#f7786b';
        case 'electric': return '#d1b741';
        case 'ice': return '#48bed0';
        case 'poison': return '#48d06f';
        case 'rock': return '#d17841';
        case 'steel': return '#aba9a2';
        case 'dark': return '#9054b3';
        case 'dragon': return '#d17326';
        case 'ghost': return '#b3a9a1';
        case 'fighting': return '#de4b37';
        case 'psychic': return '#c05fd9';
        case 'ground': return '#7a0000';
        case 'flying': return '#77e0cd';
        case 'fairy': return '#e3a1dc';
        default: return '#ade2ed';
    }
}