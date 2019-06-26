/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */

var trigger = [
  //1
  ["salut","bonjour","wesh","yo"], 
  //2
  ["bsahtek"], 
  //3
  ["dis moi quelque chose","raconte moi un truc","dis moi un truc"],
  //4 
  ["tu joues au golf","t'es bon au golf","tu penses quoi du golf"], 
  //5
  ["regarde la meuf","tu la baises","tu la niques"], 
  //6
  ["tu ferais quoi toi","elle est bonne hein","elle est bonne","elle est trop bonne"], 
  //7
  ["je suis stupide","je suis trop con"], 
  //8
  ["t'as une théorie", "une théorie","une theorie"],
  //9 
  ["si elle disait oui tu ferais quoi","tu la niquerais toi "], 
  //10
  ["tu veux que je commande pour toi"], 
  //11
  ["t'es beau gosse","gg","t'es beau"], 
  //12
  ["tu peux le faire à ma place","tu peux faire ca"], 
  //13
  ["une citation de lang"], 
  //14
  ["bon anniversaire"], 
  //15
  ["comment fonctionne qlweb","parle moi de qlweb","comment on fait ca"], 
  //16
  ["il faut faire ce ticket qlweb","y'a un ticket qlweb","faut appeler nadine"], 
  //17
  ["bon weekend"], 
  //18
  ["bonne soirée"], 
  //19
  ["batard"],
  //20
  ["ca va","comment tu vas","la besse","labesse"]
];

var reply = [
  //1
  ["Salut","Yo"],
  //2
  ["Bsahtek roya"],
  //3
  ["Le tiramisu du bar à pâtes il est bon même quand tu le rôtes"],
  //4
  ["Un bon golfeur est un joueur de petit jeu"], 
  //5
  ["Elle est trop bonne je la déglingue"], 
  //6
  ["Mets lui une cartouche pour papa"], 
  //7
  ["Ton père n'a pas su se retirer à temps"],
  //8
  ["Je crie et tout le monde s'en fout, c'est la théorie du Truman Show","Un mec fidèle est un mec qui n'a pas d'opportunité"], 
  //9
  ["Un mec fidèle est un mec qui n'a pas d'opportunité"],  
  //10
  ["Met moi un TR s'il te plait (toucher rectal)"], 
  //11
  ["Je suis trop beau, je sens trop bon, t'en veux un bout ?"],  
  //12
  ["Viens je vais t'apprendre à pécher"], 
  //13
  ["On peut tromper une fois mille homme mais pas mille fois un homme"],
  //14
  ["Boloss"], 
  //15
  ["Va voir dans le wiki"], 
  //16
  ["Tu prends l'action Alexia?"], 
  //17
  ["Bon weekend Pascal"],
  //18
  ["T'as pris ton après-midi ?","Bon weekend"], 
  //19
  ["Mange tes morts"],
  //20
  ["Imotep"]
];

var alternative = ["Tu sais pas parler?", "J'ai rien compris"];

document.querySelector("#input-chat").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
  if(key === 13){
    var input = document.getElementById("input-chat").value;
    if(input){
      $('<div class="yours messages"><div class="message"><p></p>'+input+'</div></div>').prependTo('.messages-chat');
      document.getElementById("input-chat").value=""; //clear input value
      var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "").replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, ""); 
      if(compare(trigger, reply, text)){
        var answer = compare(trigger, reply, text);
      } else {
        var answer = alternative[Math.floor(Math.random()*alternative.length)];
      }
      $('<div class="mine messages"><div class="message"><p></p>'+answer+'</div></div>').prependTo('.messages-chat');
      if ($('.apple-switch').is(':checked')){
        speak(answer);
      }
    }
	}
});

function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}

function speak(string){
	var utterance = new SpeechSynthesisUtterance();
	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[5];
	utterance.text = string;
	utterance.lang = "en-US";
	utterance.volume = 1; //0-1 interval
	utterance.rate = 1;
	utterance.pitch = 2; //0-2 interval
	speechSynthesis.speak(utterance);
}
