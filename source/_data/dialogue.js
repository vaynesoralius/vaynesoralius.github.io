const dialogueData = [
    { character: characters.character1, dialogue: "Hello!" },
    { character: characters.character2, dialogue: "Hi there!" }
  ];
  
  // Iterate over dialogueData and generate HTML for each dialogue
  const dialogueHtml = dialogueData.map(({ character, dialogue }) => {
    return `
      <div class="character-dialogue ${character.class}">
        <div class="profile-picture">
          <img src="${character.image}" alt="${character.name}">
        </div>
        <div class="message">${dialogue}</div>
      </div>
    `;
  }).join("");
  
  // Insert generated HTML into the document
  document.getElementById("dialogue-container").innerHTML = dialogueHtml;
  