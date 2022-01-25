class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        const array = this.string.split(" ");
        var i;
        for (i=0;i<array.length;i++){
            if (array[i].includes(subStr)){
                return array[i];
            }
        }
    }


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        const array = this.string.split(" ");
        var i;
        for (i=array.length-1;i>0;i--){
            if (array[i].includes(subStr)){
                return array[i];
            }
        }
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const array = this.string.split(" ");
        var i, inicio, fim;
        for (i=array.length-1;i>0;i--){
            if (array[i].includes(subStr1)){
                inicio = i;
            }
            if (array[i].includes(subStr2)){
                fim = i
            }
        }
        const index = (inicio+fim)/2
        return array[index];
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        if (this.string.length < 2) { return ''; }
        return this.string.substring(0, 2) + this.string.substring(this.string.length - 2, this.string.length);
    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        const firstChar = str1.charAt(0);
        const restOfString = str1.substring(1, str1.length);
        return firstChar + restOfString.replace(new RegExp(firstChar, 'g'), '*');
    }

}

module.exports = StringManipulations;