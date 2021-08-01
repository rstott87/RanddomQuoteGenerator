const randomQuoteGenerator = () => {
    const quote1 = "Good job!";
    const quote2 = "Keep it up!";
    const quote3 = "You can do it!";
    const quote4 = "let's go!"

    const quotes = [quote1, quote2, quote3, quote4];

    return quotes [[Math.floor(Math.random() * quotes.length)]]
}

console.log (randomQuoteGenerator())