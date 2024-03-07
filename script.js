function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function generateBoxes() {
    var jumlah = document.getElementById('jumlahKotak').value;
    var container = document.querySelector('.boxContainer');
    container.innerHTML = ''; //delete container

    // jumlah kotak dibatasi 100
    jumlah = Math.min(jumlah, 100);

    for (var i = 0; i < jumlah; i++) {
        var box = document.createElement('div');
        box.classList.add('box');
        box.textContent = i + 1;
        container.appendChild(box);
    }
}

function processText() {
    var text = document.getElementById('textArea').value.toLowerCase(); 
    var words = text.match(/\b(\w+)\b/g); 
    var wordCount = {};

    if (words) { 

        words.forEach(function (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });

    
        var sortedWords = Object.keys(wordCount).sort();

        var result = '<tbody>';

        sortedWords.forEach(function (word) {
            result += '<tr><td>' + word + '</td><td>' + wordCount[word] + '</td>' +
                '<td><button onclick="deleteWord(\'' + word + '\')">Delete</button></td></tr>';
        });

        result += '</tbody>';

        document.getElementById('wordTableBody').innerHTML = result; 
    } else {
        document.getElementById('wordTableBody').innerHTML = ""; 
    }
}

function deleteWord(word) {
    var text = document.getElementById('textArea').value;
    var regex = new RegExp('\\b' + word + '\\b', 'gi'); 
    var newText = text.replace(regex, ''); 

    document.getElementById('textArea').value = newText.trim(); 
    processText(); 
}
