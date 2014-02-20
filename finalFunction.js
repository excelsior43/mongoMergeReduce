function (myCursor, statementValuesToBeDisplayedMap) {
    var getTheValueForThisKey = function (row, filter) {var retValue = "-";try {eval("retValue= row." + filter + ";");} catch (e) {}return retValue;};
    var getTheValuesOnlyForTheKeys = function (row) {var opId = row.operationID;var filter = statementValuesToBeDisplayedMap[opId].filter;var columnKeys = statementValuesToBeDisplayedMap[opId].columnKeys;var theReturnRow = {};Object.keySet(filter).forEach(function (key, index) {val = getTheValueForThisKey(row, filter[index]);if (val !== undefined) {theReturnRow[columnKeys[index]] = val;}});return theReturnRow;};
    var filterFunction = function (row) {if (statementValuesToBeDisplayedMap[row.operationID] !== undefined) {return getTheValuesOnlyForTheKeys(row);}};

    function mergeObjs(keys, theRow) {
        var retRow = {};
        Object.keySet(keys).forEach(function (key) {retRow[key] = keys[key];});
        Object.keySet(theRow).forEach(function (key) {retRow[key] = theRow[key];});
        return retRow;
    }

    var getAllUniqueHeadersAsMap = function () {var retMapOfAllHeaders = {};Object.keySet(statementValuesToBeDisplayedMap).forEach(function (key) {Object.keySet(statementValuesToBeDisplayedMap[key].columnKeys).forEach(function (key1) {kee = statementValuesToBeDisplayedMap[key].columnKeys[key1];if (retMapOfAllHeaders[kee] === undefined) {retMapOfAllHeaders[kee] = "-";}});});return retMapOfAllHeaders;};
    var allKeys = getAllUniqueHeadersAsMap();
    var theMappp = {};
    var i = 0;
    while (myCursor.hasNext()) {
        var doc = myCursor.next();
        var finalRow = filterFunction(doc);
        if (finalRow !== undefined) {
            theMappp[i++] = mergeObjs(allKeys, finalRow);
        }
    }
    return theMappp;
}
