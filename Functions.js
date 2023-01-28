import { Alert } from "react-native";

export function addQuote(_quotes, _quote, _author) {
    _quotes[_author] = _quote;

    return(_quotes);
}

export function alertQuote(_quotes, _author) {
    return([_author, _quotes[_author]]);
}

export function addQuoteThenAlertQuote(_quotes, _quote, _author) {
    addQuote(_quotes, _quote, _author);
    const _alert = alertQuote(_quotes, _author);

    return(Alert.alert(_alert[0], _alert[1]));
}

export function renderItem() {
    
}