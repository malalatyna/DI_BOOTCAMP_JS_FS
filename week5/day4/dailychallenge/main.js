 
// //Daily challenge: Tell the story

// const input1 = document.getElementById('noun');
// const input2 = document.getElementById('adjective');
// const input3 = document.getElementById('person');
// const input4 = document.getElementById('verb');
// const input5 = document.getElementById('place');
// const submitBtn = document.getElementById('lib-button');
// const shuffleBtn = document.getElementById('shuffle-button');
// const storyContainer = document.getElementById('story');


const { 
   noun: input1, 
   adjective: input2, 
   person: input3, 
   verb: input4, 
   place: input5 
 } = document.forms.libform.elements;
 
 const submitBtn = document.getElementById('lib-button');
 const shuffleBtn = document.getElementById('shuffle-button');
 const storyContainer = document.getElementById('story');
 
let shuffleCount = 0;

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const nounInput = input1.value.trim();
  const adjectiveInput = input2.value.trim();
  const personInput = input3.value.trim();
  const verbInput = input4.value.trim();
  const placeInput = input5.value.trim();

  if (!nounInput || !adjectiveInput || !personInput || !verbInput || !placeInput) {
   alert('Please fill the form correctly');
    return;
  }

  const storyLib = `This is a story of ${nounInput} named ${personInput}. ${personInput} is ${adjectiveInput} today. One day, ${personInput} went to ${placeInput} forest to ${verbInput} but got lost. Fortunately, ${personInput} found a friendly ${nounInput} who showed ${personInput} the way back home.`;

  storyContainer.textContent = storyLib;
  shuffleCount = 0;
});

shuffleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  shuffleCount++;

  if (shuffleCount >= 3) {
    alert('You have shuffled 3 times. Restart');
    return;
  }

  const storyShuffle = [

    `Once upon a time, there was a little girl named ${input1.value.trim()}  who lived in a ${input5.value.trim()} at the edge of a forest. One day, her mother asked ${input2.value.trim()} to take some food to ${input4.value.trim()}  who lived on the other side of the forest.  ${input3.value.trim()} agreed and set off on her journey. As  ${input3.value.trim()} walked through the forest, she met a wolf who asked her where she was going. ${input1.value.trim()} told ${input3.value.trim()}  about her errand, but the wolf had other plans.`,
    `
    Once upon a time, there was a boy named ${input1.value.trim()} who lived with his ${input3.value.trim()}. One day, they ran out of food, and ${input1.value.trim()}'s mother asked him to sell their cow at ${input5.value.trim()}. On his way to ${input5.value.trim()}, ${input1.value.trim()} met a man who offered him some magic beans in exchange for ${input2.value.trim()}. ${input1.value.trim()}agreed and went back home. `,
    `${input4.value.trim()} was on a quest to find the legendary ${input1.value.trim()} of ${input5.value.trim()}. Legend had it that the ${input1.value.trim()} possessed the power to ${input4.value.trim()} anything, and ${input3.value.trim()} was determined to use its power to save their village from a great evil. After many trials and tribulations, ${input3.value.trim()} finally found the ${input1.value.trim()} and used its power to save the day.`,
  ];

  const randomIndex = Math.floor(Math.random() * storyShuffle.length);
  const randomStory = storyShuffle[randomIndex];
  storyContainer.textContent = randomStory;
});

