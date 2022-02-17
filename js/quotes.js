const quotes = [
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Life's greatest happiness is to be convinced we are loved.",
    author: "Victor Hugo",
  },
  {
    quote: "The important thing was to love rather than to be loved.",
    author: "William Somerset Maugham",
  },
  {
    quote:
      "Age does not protect you from love. But love, to some extent, protects you from age.",
    author: "Jeanne Moreau",
  },
  {
    quote: "Learning to love yourself is the greatest love of all",
    author: "Michael Masser",
  },
  {
    quote:
      "To find somenone you actually love, who'll love you, I mean, the chances are always minuscule.",
    author: "[Notting Hill]",
  },
  {
    quote:
      "Everyone walks a similar path in life. The memories of the past that eventually grow old foes. Pour the warm and marride people.",
    author: "[About time]",
  },
  {
    quote:
      "We are all travelling through time together, everyday of our lives. All We can do is do our best to relish this remarkable ride.",
    author: "[About time]",
  },
  {
    quote:
      "You should be with someone who could make you happy, real happy, dancing on air happy :)",
    author: "[Love, Rosie]",
  },
  {
    quote:
      "If you put your mind to it. So keep chasing those drams, will you? ",
    author: "[Love, Rosie]",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 인덱스 구하기 : Math.floor(Math.random()*10)
// 인덱스로 명언 random하게 가져오기
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

// quotes와 author에 각각 맞는 데이터 넣어주기
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
