const LongestWord = (sentence)=>{
    let longestWord = '';
    let sentenceArray = sentence.replace(/[^a-zA-Z\s]/g, '').split(' ')
    const countVowels = (word)=>{
        let vowelCount = word.match(/[aeiou]/gi)
        return vowelCount === null? 0 : vowelCount.length
    }
    sentenceArray.forEach((element) => {
        if(element.length > longestWord.length){
            longestWord = element
        }
        else if(element.length === longestWord.length){
            if(countVowels(element) > countVowels(longestWord)){
                longestWord = element
            }
        }
    });
    return longestWord
}

console.log(LongestWord('“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)'))
console.log(LongestWord(`We'll worry about that later!`)) // punctuation mark and apostrophe
console.log(LongestWord('')) //empty space (should return empty string)
console.log(LongestWord('apple banana cherry')) //all have the same length
console.log(LongestWord('Lambo of a price $300000 is high.')) //Numbers should be ignored
console.log(LongestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue euismod nibh, quis eleifend massa dictum quis. Maecenas scelerisque lacus eu dui eleifend sollicitudin. Curabitur imperdiet arcu dui, non consectetur magna bibendum id. In hac habitasse platea dictumst. Sed tristique urna at massa faucibus maximus. In magna erat, rutrum a pellentesque quis, convallis sit amet ipsum. Fusce luctus ornare nibh nec porta. Nullam accumsan mi in libero maximus congue. Donec lacinia dapibus urna, sed laoreet ex finibus a. Vestibulum tellus libero, accumsan non egestas at, mattis pulvinar dui. Nunc vel egestas ligula. Curabitur lacinia, mi ac consectetur eleifend, enim magna dignissim urna, ut euismod sapien massa vitae diam.')) //Long text in general