
let totalPoints = 0;


export function calculatePoints(receipt) {

    const namePoints = getNamePoints(receipt);
    const roundDollarPoints = getRoundDollarPoints(receipt);
    const multiple25Points = getMultiple25Points(receipt);
    const numberOfItemsPoints = getNumberOfItemsPoints(receipt);
    const descPricePoints = getDescPricePoints(receipt);
    const timePoints = getPurchaseTimePoints(receipt);
    const datePoints = getPurchaseDatePoints(receipt);
    
    totalPoints=namePoints + roundDollarPoints + multiple25Points +numberOfItemsPoints + descPricePoints + timePoints + datePoints;

    return totalPoints;
}

function getNamePoints(receipt){
    
    let retailer=receipt.retailer.replace(/\s/g, '') // Remove white spaces
    retailer=retailer.replace(/[^0-9a-z]/gi, '') // Remove non alpha-numeric chars 
    

    return retailer.length 
}

function getRoundDollarPoints(receipt) {
    if (receipt.total % 1 === 0) {
        return 50;
    } else {
        return 0;
    }
}

function getMultiple25Points(receipt) {
    if (receipt.total % 0.25 === 0) {
        return 25;
    } else {
        return 0;
    }
}

function getNumberOfItemsPoints(receipt) {
    return Math.floor(receipt.items.length / 2) * 5;
}


function getDescPricePoints(receipt) {
    let descPricePoints = 0;
    for (const item of receipt.items) {
        const itemDescLength = item.shortDescription.trim().length;
        if (itemDescLength % 3 === 0) {
            descPricePoints += Math.ceil(item.price * 0.2);
        }
    }
    return descPricePoints;
}


function getPurchaseTimePoints(receipt) {
    const time = parseInt(receipt.purchaseTime.replace(':', ''));
    if (time > 1400 && time < 1600) {
        return 10;
    } else {
        return 0;
    }
}

function getPurchaseDatePoints(receipt) {
    const date = new Date(receipt.purchaseDate);
    if (date.getUTCDate() % 2 !== 0) {
        return 6;
    } else {
        return 0;
    }
}

