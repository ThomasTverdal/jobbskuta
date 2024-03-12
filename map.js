// AIzaSyCFQX-xnVuQ66L1dvn0qVzmGz9vKs7jlHE

// https://developers.google.com/maps/documentation/javascript/markers
// se linken over for å legge til markers

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  if (document.getElementById("map1") != null){
    const aalesund = { lat: 62.471593, lng: 6.148732 }

    const jobb1 = { lat: 62.46205833977973, lng: 6.303233355801011}
    const jobb1Cont =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Job 1</h1>' +
    '<div id="bodyContent">' +
    "<p>Jobbbeskrivelse kommer her</p>" +
    '<p>Kontakt Informajson kommer her</p>' +
    "</div>" +
    "</div>";

    const jobb2 = {lat: 62.45725687197291, lng: 6.3659381405754205}
    const jobb2Cont =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Job 2</h1>' +
    '<div id="bodyContent">' +
    "<p>Jobbbeskrivelse kommer her</p>" +
    '<p>Kontakt Informajson kommer her</p>' +
    "</div>" +
    "</div>";

    const jobb3 = {lat: 62.45825054953235, lng: 6.124234134036034}
    const jobb3Cont =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Job 3</h1>' +
    '<div id="bodyContent">' +
    "<p>Jobbbeskrivelse kommer her</p>" +
    '<p>Kontakt Informajson kommer her</p>' +
    "</div>" +
    "</div>";

    const jobb4 = {lat: 62.50418874757147, lng: 6.1310544607458715}
    const jobb4Cont =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Job 4</h1>' +
    '<div id="bodyContent">' +
    "<p>Jobbbeskrivelse kommer her</p>" +
    '<p>Kontakt Informajson kommer her</p>' +
    "</div>" +
    "</div>";

    const jobb5 = {lat: 62.43372382106797, lng: 6.354765513018038}
    const jobb5Cont = 
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Job 5</h1>' +
    '<div id="bodyContent">' +
    "<p>Jobbbeskrivelse kommer her</p>" +
    '<p>Kontakt Informajson kommer her</p>' +
    "</div>" +
    "</div>";

    map = new Map(document.getElementById("map1"), {
      center: aalesund,
      zoom: 11,
    });

    const infowindow1 = new google.maps.InfoWindow({
      content: jobb1Cont,
      ariaLabel: "Ålesund",
    });

    const marker1 = new google.maps.Marker({
      position: jobb1,
      map,
      title: "jobb1",
    });

    marker1.addListener("click", () => {
      infowindow1.open({
        anchor: marker1,
        map,
      });
    });
    // 
    const infowindow2 = new google.maps.InfoWindow({
      content: jobb2Cont,
      ariaLabel: "Ålesund"
    })

    const marker2 = new google.maps.Marker({
      position: jobb2,
      map,
      title: "jobb2"
    })

    marker2.addListener("click", () => {
      infowindow2.open({
        anchor: marker2,
        map,
      })
    })
    // 
    const infowindow3 = new google.maps.InfoWindow({
      content: jobb3Cont,
      ariaLabel: "Ålesund"
    })

    const marker3 = new google.maps.Marker({
      position: jobb3,
      map,
      title: "jobb3"
    })

    marker3.addListener("click", () => {
      infowindow3.open({
        anchor: marker3,
        map,
      })
    })
    // 
    const infowindow4 = new google.maps.InfoWindow({
      content: jobb4Cont,
      ariaLabel: "Ålesund"
    })

    const marker4 = new google.maps.Marker({
      position: jobb4,
      map,
      title: "jobb4"
    })

    marker4.addListener("click", () => {
      infowindow4.open({
        anchor: marker4,
        map,
      })
    })
    // 
    const infowindow5 = new google.maps.InfoWindow({
      content: jobb5Cont,
      ariaLabel: "Ålesund"
    })

    const marker5 = new google.maps.Marker({
      position: jobb5,
      map,
      title: "jobb5"
    })

    marker5.addListener("click", () => {
      infowindow5.open({
        anchor: marker5,
        map,
      })
    })

  } else if (document.getElementById("map2") != null){
    map = new Map(document.getElementById("map2"), {
      center: { lat: 62.471593, lng: 6.148732 },
      zoom: 12,
    });
  }
}

initMap();