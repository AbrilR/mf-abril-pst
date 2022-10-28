const images = [
    'img/Jinx.png',
    'img/Vi.png',
    'img/Caitlyn.png',
    'img/Jayce.png',
    'img/Viktor.png',
]
const titles = [
    'Jinx',
    'Vi',
    'Caitlyn',
    'Jayce',
    'Viktor'
]
const descriptions = [
    'Jinx, born as Powder, is a notorious Zaunite criminal and inventor and Vis younger sister. When she was a little girl, her parents were killed in a failed uprising against Piltover, leading Vander, the unspoken leader of the undercity, to adopt both her and Vi as his own daughters. After a series of events forced Jinx and her sister apart in more ways than one, she was fundamentally and irrevocably changed, transforming her into the demented killer she is today.',
    'Vi, born as Violet, is a Zuanite vigilante and Jinxs older sister. A hotheaded and fearless woman who excels at fighting and likes to solve her problems with her fists. She wields a pair of powerful hextech gauntlets that can punch through buildings and people with little trouble.',
    'Caitlyn Kiramman is a scion of the Kiramman Clan, one of the ruling houses of Piltover. Eager to see the world for herself and disdainful of the traditional elitist lifestyle that her parents had raised her in, Caitlyn joined the enforcers as a young woman to make a name for herself. When Marcus, the Sherrif of the Enforcers, and her parents for very different reasons started blocking her efforts to futher investigate an undercity conspiracy, Caitlyn set off on her own to find answers, only to get much more than she bargained for.',
    'Jayce Talis is a scientist and innovator, and, after years of success leading the citys scientific and consequently its economic progress, is currently the Head of the Council of Piltover.e bio',
    'Viktor is an ambitious Zaunite inventor who resides in Piltover, working as the partner of Jayce Talis. Once brought into the Academy as the assistant to Heimderdinger, Viktor worked his way up from the undercity in hopes of improving lives, but his research was complicated upon discovering he was terminally ill. Nevertheless, Viktor does not let his disease stop him and he remains steadfast in finding a cure.',
];

const img = document.querySelector('#img');
img.src = 'img/Jinx.png';
const p = document.querySelector('#slidertext');
p.textContent = 'Jinx, born as Powder, is a notorious Zaunite criminal and inventor and Vis younger sister. When she was a little girl, her parents were killed in a failed uprising against Piltover, leading Vander, the unspoken leader of the undercity, to adopt both her and Vi as his own daughters. After a series of events forced Jinx and her sister apart in more ways than one, she was fundamentally and irrevocably changed, transforming her into the demented killer she is today.';
const h2 = document.querySelector('#slidertitle');
h2.textContent = 'Jinx';

let i = 0;

function changeImage() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    img.src = images[i];
    h2.textContent = titles[i];
    p.textContent = descriptions[i];
  
  
}
function previousImage() {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    img.src = images[i];
    h2.textContent = titles[i];
    p.textContent = descriptions[i];
  
  
}