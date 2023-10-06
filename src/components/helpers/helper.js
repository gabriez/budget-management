export const randomID = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36); 
}

export const formatDate = fecha => {
    let newDate = new Date(fecha)
    return newDate.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
}


export const formatBudget = (money) => {
    return money.toLocaleString('en-US', {style: "currency", currency: 'USD'});
}