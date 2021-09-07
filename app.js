const generateBtn = document.getElementById('generate-btn');
// function
const generateQuotes = () => {
    let quotes = {
        "― Albert Einstein ": '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        "― Pierce Brown, Red Rising" : '“Man cannot be freed by the same injustice that enslaved it.”',
        "― Alysha Speer" : '“You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”',
        "― Monique Duval" : '“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”',
        "― Mary Astell" : '“If all men are born free, how is it that all women are born slaves?”',
        "― Madeline Miller, The Song of Achilles": '“Bury us, and mark our names above. Let us be free.”',
        "― C.S. Lewis" : '“I was not born to be free---I was born to adore and obey.”',
        "― John Galsworthy" : '“Life calls the tune, we dance.”'
    };
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random()*authors.length)];
    const quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}
// event listener
generateBtn.addEventListener('click', generateQuotes);
