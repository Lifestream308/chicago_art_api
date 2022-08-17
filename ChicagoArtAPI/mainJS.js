// Javascript for Chicago Art Institute API

async function getText(id) {
    let x = await fetch('https://api.artic.edu/api/v1/artworks/' + id + '/?fields=id,title,artist_display,artist_title,thumbnail');
    let y = await x.text();
    let obj = JSON.parse(y).data
    console.log(obj.title)
    document.getElementsByClassName(id)[0].innerHTML = obj.title
    document.getElementsByClassName(id)[1].innerHTML = 'Artist- ' + obj.artist_display
    document.getElementsByClassName(id)[2].innerHTML = 'Details- ' + obj.thumbnail.alt_text
    document.getElementsByClassName(id)[3].innerHTML = 'ID- ' + obj.id
  }

  // Soldier
  getText(207740)
  
  // Statue
  getText(65244)

  // Seneca
  getText(15739)
  
  // Samson
  getText(146875)

  // Fragment
  getText(16620)