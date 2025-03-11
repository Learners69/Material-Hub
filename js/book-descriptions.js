/**
 * Book Descriptions
 * This file contains descriptions for all books in the Material Hub.
 * Each book is identified by its title (as the key) and has a description (as the value).
 */

const bookDescriptions = {
  // Psychological Self-Help Books
  "Don't Believe Everything You Think":
    "**Don't Believe Everything You Think** by Joseph Nguyen is a self-help book that explores how our thoughts shape our reality. It challenges the idea that all our thoughts are true and provides insights on how to free ourselves from negative thinking patterns. The book offers practical wisdom on achieving inner peace, happiness, and clarity by questioning limiting beliefs and shifting our mindset.",

  "Atomic Habits":
    "**Atomic Habits** by James Clear is a practical guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results. The book emphasizes how tiny, consistent improvements compound over time, shaping our identity and long-term success. Clear provides actionable strategies based on psychology and neuroscience to help readers create sustainable habits, overcome obstacles, and master the art of continuous self-improvement.",

  "The Subtle Art of Not Giving a F*ck":
    "**The Subtle Art of Not Giving a F*ck** by Mark Manson is a refreshing, no-nonsense self-help book that challenges traditional positivity culture. Instead of trying to be constantly happy, Manson argues that we should focus on what truly matters and let go of things that don’t add value to our lives. Using blunt humor, personal stories, and philosophical insights, the book teaches readers how to embrace life’s struggles, accept their limitations, and prioritize their energy on what’s truly important.",

  "Thinking, Fast and Slow":
    "**Thinking, Fast and Slow** by Daniel Kahneman explores the two systems that drive human thinking: System 1, which is fast, intuitive, and emotional, and System 2, which is slow, deliberate, and logical. Kahneman, a Nobel Prize-winning psychologist, explains how these systems shape our decisions, often leading to biases and errors. The book provides deep insights into human judgment, decision-making, and how we can recognize and overcome cognitive biases to think more rationally.",

  "Man's Search for Meaning":
    "**Man’s Search for Meaning** by Viktor E. Frankl is a profound memoir and psychological exploration of human resilience. Frankl, a Holocaust survivor and psychiatrist, recounts his experiences in Nazi concentration camps and examines how finding purpose in life helps people endure even the most unimaginable suffering. He introduces **logotherapy**, a therapeutic approach based on the belief that meaning—not pleasure or power—is the key to human fulfillment. This inspiring book teaches that, even in the darkest times, we have the power to choose our attitude and find meaning in our struggles.",

  // Computer Science Books
  "JavaScript: The Good Parts":
    "Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language. This book focuses on the subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole.",

  "Python Crash Course":
    "A fast-paced, thorough introduction to Python programming by Eric Matthes. This hands-on guide takes you through the process of programming with Python, teaching you how to write clean, efficient code and create programs that solve real-world problems.",

  "Clean Code":
    "Robert C. Martin's classic book on the principles, patterns, and practices of writing clean code. Learn how to write code that is easy to understand, maintain, and extend, with practical examples and case studies from real-world scenarios.",

  "The Pragmatic Programmer":
    "Andrew Hunt and David Thomas share their programming wisdom and practical advice accumulated through years of experience. This book covers topics from personal responsibility and career development to architectural techniques for keeping code flexible.",

  "Design Patterns":
    "The seminal work on design patterns by the 'Gang of Four' (Gamma, Helm, Johnson, Vlissides). This book catalogs the most common design patterns, providing a shared vocabulary for solving recurring problems in software design.",

  // Biography & Autobiography Books
  "Steve Jobs":
    "Walter Isaacson's definitive biography of Apple co-founder Steve Jobs, based on more than forty interviews conducted over two years. This riveting story explores the roller-coaster life and intense personality of a creative entrepreneur.",

  Becoming:
    "Michelle Obama's memoir chronicles her journey from the South Side of Chicago to the White House. With honesty and wit, she describes her triumphs and disappointments, both public and private, telling her full story as she has lived it.",

  "The Diary of a Young Girl":
    "Anne Frank's remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit. Written while in hiding during the Nazi occupation of the Netherlands.",

  "Long Walk to Freedom":
    "Nelson Mandela's autobiography chronicles his early life, coming of age, education, and 27 years in prison. This compelling story of a life dedicated to the struggle against apartheid in South Africa is an inspiration to all who are oppressed and deprived of freedom.",

  "Einstein: His Life and Universe":
    "Walter Isaacson's biography of Albert Einstein explores how an imaginative, impertinent patent clerk became the mind reader of the creator of the cosmos. This definitive biography shows how Einstein's scientific imagination sprang from his rebellious personality.",
};

/**
 * Function to get a book description by title
 * @param {string} title - The title of the book
 * @returns {string} - The description of the book or a default message if not found
 */
function getBookDescription(title) {
  // Trim the title to ensure consistent matching
  const trimmedTitle = title.trim();
  return bookDescriptions[trimmedTitle] || "No description available for this book.";
}
