// add whatever parameters you deem necessary
function twoArrayObject(arrOfKeys, arrOfValues) {

    const outputObject = {}

    //loop through arrOfKeys. Add key and value. If value doesnt exist add null.

    for (let i = 0; i < arrOfKeys.length; i++){
        if (arrOfValues[i] === undefined) {
            outputObject[arrOfKeys[i]] = null;
        } else {
            outputObject[arrOfKeys[i]] = arrOfValues[i];
        }
    }
    return outputObject;
}

//two arrays ov varying lengths
//first array keys
//second is values
// if not enough values, keys should have null
//if there are not enough keys ignore of values