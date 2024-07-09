// Array of emojis with codes and symbols
const emojis = [
  { symbol: '&#128007;', code: '128007' },
  { symbol: ' &#128055;', code: '128055' },
  { symbol: '&#128025;', code: '128025' },
  { symbol: '&#128039;', code: '128039' },
  { symbol: '&#129442;', code: '129442' },
  { symbol: ' &#129412;', code: '129412' },
  { symbol: '&#128059;', code: '128059' },
  { symbol: ' &#128053;', code: '	128053' },
  { symbol: '&#128015;', code: '128015' },
  { symbol: ' &#128012;', code: '128012' },
  { symbol: '&#128001;', code: '128001' },
  { symbol: '&#128013;', code: '128013' }
]

  // Emojis will be appended in the Id - emoji-gallery
  const emojiGallery = document.getElementById('emoji-gallery')

  
  emojis.forEach(emoji => {
    
    // emojiItem has a class of emoji-item which is a div created to hold the emoji symbol and code.
    const emojiItem = document.createElement('div')
    emojiItem.classList.add('emoji-item')
    emojiGallery.appendChild(emojiItem)

    // For displaying the emoji symbol
    const emojiSymbol = document.createElement('div')
    emojiSymbol.classList.add('emoji-symbol')
    emojiSymbol.innerHTML = emoji.symbol
    emojiItem.appendChild(emojiSymbol)

    // For displaying the emoji code
    const emojiCode = document.createElement('div');
    emojiCode.classList.add('emoji-code')
    emojiCode.innerHTML = emoji.code
    emojiItem.appendChild(emojiCode)
    
    
  });