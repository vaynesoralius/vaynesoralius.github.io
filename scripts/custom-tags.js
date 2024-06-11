hexo.extend.tag.register('dialogue', function(args, content) {
    var characterName = args[0];
    var dialogueContent = args[1];
    var characterProfiles = {
        Vayne: "/images/vayne-pfp.png",
        Falco: "/images/falco-pfp.png"
        // Add more characters here if needed
    };
    
    var profilePicturePath = characterProfiles[characterName];
    var characterClass = characterName.toLowerCase(); // Convert character name to lowercase for class name

    return `
        <div class="character-dialogue ${characterClass}">
            <div class="profile-picture">
                <img src="${profilePicturePath}" alt="${characterName}-pfp" class="profile-picture">
            </div>
            <div class="character-info">
                <div class="character-name">${characterName}</div>
                <div class="message">
                    ${dialogueContent}
                </div>
            </div>
        </div>
    `;
});