const categories = [
  { title: "Pice", image: "assets/category-images/cat-pizza.png", target: "pizza" },
  { title: "Burgeri", image: "assets/category-images/cat-burger.png", target: "burgeri" },
  { title: "Palačinke", image: "assets/category-images/cat-pancakes.png", target: "palacinke" },
  { title: "Pomfrit", image: "assets/category-images/cat-fries.png", target: "pomfrit" },
];

const bestSellers = [
  {
    name: "Capricciosa",
    image: "assets/product-images/capricciosa.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, šunka, pečurke, masline, origano",
    price: "500/900/1200 rsd",
  },
  {
    name: "Tortilja Hrskava piletina",
    image: "assets/product-images/tortilja.jpg",
    desc: "ajsberg, kačkavalj, paradajz, Favola dressing, hrskava piletina",
    price: "540 rsd",
  },
  {
    name: "Italijanska Piroška",
    image: "assets/product-images/piroska.jpg",
    desc: "pelat, kačkavalj, šunka, pečurke, pavlaka, kečap",
    price: "550 rsd",
  },
  {
    name: "Truffle double",
    image: "assets/product-images/truffle-burger.jpg",
    desc: "meso x2, čedar x2, Heinz Truffle sos, ajsberg, pomfrit",
    price: "770 rsd",
  },
];

const pizzas = [
  {
    name: "Capricciosa",
    image: "assets/product-images/capricciosa.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, šunka, pečurke, masline, origano",
    price: "500/900/1200 rsd",
  },
  {
    name: "Margherita",
    image: "assets/product-images/margarita.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, origano",
    price: "450/800/1050 rsd",
  },
  {
    name: "Pepperoni",
    image: "assets/product-images/peproni.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, kulen, feferone, slanina, origano",
    price: "540/980/1320 rsd",
  },
  {
    name: "Pršuto pizza",
    image: "assets/product-images/prsuto.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, pršuta, parmezan, origano",
    price: "640/1180/1520 rsd",
  },
  {
    name: "Vege pizza",
    image: "assets/product-images/vege.jpg",
    size: "24/32/42 cm",
    desc: "pelat, posni kačkavalj, paprika, kukuruz, masline, luk, origano, pečurke",
    price: "530/960/1290 rsd",
  },
  {
    name: "Tuna pizza",
    image: "assets/product-images/tuna.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, tuna, kukuruz, crveni luk, paprika, origano, pečurke",
    price: "560/1020/1380 rsd",
  },
  {
    name: "Favola Special",
    image: "assets/product-images/favola-specijal.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, pečurke, šunka, kulen, slanina, jaje, origano, pavlaka",
    price: "690/1260/1770 rsd",
  },
  {
    name: "Quatro Stagioni",
    image: "assets/product-images/quattro stagioni.jpg",
    size: "24/32/42 cm",
    desc: "pelat, kačkavalj, šunka, kulen, pečurke",
    price: "550/1000/1300 rsd",
  },
  {
    name: "Italijanska Piroška",
    image: "assets/product-images/piroska.jpg",
    desc: "pelat, kačkavalj, šunka, pečurke, pavlaka, kečap",
    price: "550 rsd",
  },
];

const burgers = [
  {
    name: "Cheeseburger double",
    image: "assets/product-images/cizburger.jpg",
    desc: "meso x2, čedar x2, Heinz kečap, senf, luk, krastavčići, pomfrit",
    price: "690 rsd",
  },
  {
    name: "Original double",
    image: "assets/product-images/original-burger.jpg",
    desc: "meso x2, čedar x2, burger sos, paradajz, ajsberg, pomfrit",
    price: "720 rsd",
  },
  {
    name: "Bacon double",
    image: "assets/product-images/bacon-burger.jpg",
    desc: "meso x2, čedar x2, BBQ sos, slaninica, ajsberg, pomfrit",
    price: "750 rsd",
  },
  {
    name: "Truffle double",
    image: "assets/product-images/truffle-burger.jpg",
    desc: "meso x2, čedar x2, Heinz Truffle sos, ajsberg, pomfrit",
    price: "770 rsd",
  },
  {
    name: "Oklahoma double",
    image: "assets/product-images/oklahoma-burger.jpg",
    desc: "meso smešovano sa lukom x2, čedar x2, senf, majonez, krastavčići",
    price: "790 rsd",
  },
];

const pancakes = [
  {
    name: "Kinder palačinka",
    image: "assets/product-images/kinder.jpg",
    desc: "",
    price: "430 rsd",
  },
  {
    name: "Nutella palačinka",
    image: "assets/product-images/nutela.jpg",
    desc: "",
    price: "370 rsd",
  },
  {
    name: "Eurocrem palačinka",
    image: "assets/product-images/eurokrem.jpg",
    desc: "",
    price: "320 rsd",
  },
];

function productCard(item) {
  return `
    <article class="product-card reveal">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <h3>${item.name}</h3>
      ${item.size ? `<p class="size">${item.size}</p>` : ""}
      ${item.desc ? `<p>${item.desc}</p>` : "<p></p>"}
      <strong>${item.price}</strong>
    </article>
  `;
}

function renderProducts(id, items) {
  document.getElementById(id).innerHTML = items.map(productCard).join("");
}

function renderCategories() {
  document.getElementById("categoryGrid").innerHTML = categories
    .map(
      (category) => `
        <button class="category-card reveal" type="button" data-target="${category.target}">
          <img src="${category.image}" alt="" loading="lazy" />
          <span>${category.title}</span>
        </button>
      `,
    )
    .join("");
}

renderCategories();
renderProducts("bestGrid", bestSellers);
renderProducts("pizzaGrid", pizzas);
renderProducts("burgerGrid", burgers);
renderProducts("pancakeGrid", pancakes);

document.querySelectorAll("[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".category-card").forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
    document.getElementById(card.dataset.target).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-pressed");
    window.setTimeout(() => button.classList.remove("is-pressed"), 500);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const favolaLocations = [
  {
    id: "vozdovac",
    mapId: "beogradMap",
    name: "Favola Voždovac",
    placeQuery: "Favola Pizza Ljubićka 11 Beograd",
    address: "Ljubićka 11, Beograd",
    position: { lat: 44.7836082, lng: 20.4793975 },
    profileUrl: "https://maps.app.goo.gl/7gwq88XoC2psU87W7",
    fallbackHours: "pon-ned 12-04",
    fallbackPhone: "0628950833",
  },
  {
    id: "zemun",
    mapId: "beogradMap",
    name: "Favola Zemun",
    placeQuery: "Pizza Favola Novogradska 2 Zemun",
    address: "Novogradska 2, Zemun",
    position: { lat: 44.8484779, lng: 20.4031271 },
    profileUrl: "https://maps.app.goo.gl/iN1dPUtDvMGcJ6tL6",
    fallbackHours: "pon-ned 09-01",
    fallbackPhone: "0612121058",
  },
  {
    id: "novi-sad",
    mapId: "noviSadMap",
    name: "Favola Novi Sad",
    placeQuery: "Favola Pizza Miroslava Antića 8 Novi Sad",
    address: "Miroslava Antića 8, Novi Sad",
    position: { lat: 45.2515834, lng: 19.847533 },
    profileUrl: "https://maps.app.goo.gl/FLEnpQzCbs1Kzw5i7",
    fallbackHours: "pon-ned 09-01",
    fallbackPhone: "062599555",
  },
];

const favolaMapStyles = [
  { elementType: "geometry", stylers: [{ color: "#15092f" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#f6ecff" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#100522" }, { weight: 3 }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#4f238b" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#fec804" }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#1d0b42" }] },
  { featureType: "landscape.man_made", elementType: "geometry", stylers: [{ color: "#220f4c" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#251153" }] },
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#1e3b2f" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#d5c7e8" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#513079" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#110624" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#725021" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#fec804" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#31185f" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#fec804" }] },
  { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#3a1a73" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2b145d" }] },
  { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#cfc0e7" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#080313" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9d8fba" }] },
];

let favolaInfoWindow;
const favolaPlaceCache = new Map();

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}

function directionsUrl(location) {
  return `https://www.google.com/maps/dir/?api=1&destination=${location.position.lat},${location.position.lng}`;
}

function telUrl(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function photoMarkup(place) {
  const photo = place?.photos?.[0];
  if (!photo) {
    return `
      <div class="map-popup-fallback">
        <img src="assets/logo-header.svg" alt="Favola" />
      </div>
    `;
  }

  const imageUrl = photo.getUrl({ maxWidth: 420, maxHeight: 220 });
  const attribution = photo.html_attributions?.[0] || "";

  return `
    <figure class="map-popup-photo">
      <img src="${imageUrl}" alt="" />
      ${attribution ? `<figcaption>${attribution}</figcaption>` : ""}
    </figure>
  `;
}

function placeCardHtml(location, place = {}, loading = false) {
  const phone = place.formatted_phone_number || location.fallbackPhone;
  const address = place.formatted_address || location.address;
  const mapsUrl = place.url || location.profileUrl;
  const hours =
    place.opening_hours?.weekday_text?.slice(0, 2).map(escapeHtml).join("<br>") ||
    escapeHtml(location.fallbackHours);
  const rating =
    place.rating && place.user_ratings_total
      ? `<span class="map-popup-rating">${escapeHtml(place.rating)} ★ (${escapeHtml(place.user_ratings_total)})</span>`
      : "";

  return `
    <article class="map-popup-card">
      ${loading ? '<div class="map-popup-loading">Učitavanje...</div>' : photoMarkup(place)}
      <div class="map-popup-body">
        <h3>${escapeHtml(location.name)}</h3>
        ${rating}
        <p>${escapeHtml(address)}</p>
        ${phone ? `<p>${escapeHtml(phone)}</p>` : ""}
        <p class="map-popup-muted">${hours}</p>
        <div class="map-popup-actions">
          <a href="${directionsUrl(location)}" target="_blank" rel="noopener">Putanja</a>
          ${phone ? `<a href="${telUrl(phone)}">Pozovi</a>` : ""}
          <a href="${mapsUrl}" target="_blank" rel="noopener">Google Maps</a>
        </div>
      </div>
    </article>
  `;
}

function updateInfoWindow(location, map, place = {}, loading = false) {
  if (!favolaInfoWindow) {
    favolaInfoWindow = new google.maps.InfoWindow({
      maxWidth: 320,
    });
  }

  const popupOffset = window.matchMedia("(max-width: 767px)").matches ? -56 : -48;
  favolaInfoWindow.setOptions({
    maxWidth: window.matchMedia("(max-width: 767px)").matches ? 260 : 320,
    pixelOffset: new google.maps.Size(0, popupOffset),
  });
  favolaInfoWindow.setContent(placeCardHtml(location, place, loading));
  favolaInfoWindow.setPosition(location.position);
  favolaInfoWindow.open({ map });
}

function fetchPlaceDetails(location, map) {
  if (favolaPlaceCache.has(location.id)) {
    return Promise.resolve(favolaPlaceCache.get(location.id));
  }

  if (!window.google?.maps?.places) {
    return Promise.resolve({});
  }

  const service = new google.maps.places.PlacesService(map);

  return new Promise((resolve) => {
    service.findPlaceFromQuery(
      {
        query: location.placeQuery,
        fields: ["place_id", "name", "geometry"],
        locationBias: location.position,
      },
      (results, status) => {
        const placeId = results?.[0]?.place_id;
        if (status !== google.maps.places.PlacesServiceStatus.OK || !placeId) {
          favolaPlaceCache.set(location.id, {});
          resolve({});
          return;
        }

        service.getDetails(
          {
            placeId,
            fields: [
              "formatted_address",
              "formatted_phone_number",
              "opening_hours",
              "photos",
              "rating",
              "url",
              "user_ratings_total",
              "website",
            ],
          },
          (place, detailsStatus) => {
            const details = detailsStatus === google.maps.places.PlacesServiceStatus.OK && place ? place : {};
            favolaPlaceCache.set(location.id, details);
            resolve(details);
          },
        );
      },
    );
  });
}

function createFavolaMarker(location, map, onClick) {
  const mapElement = map.getDiv();
  let markerLayer = mapElement.querySelector(".map-marker-layer");
  if (!markerLayer) {
    markerLayer = document.createElement("div");
    markerLayer.className = "map-marker-layer";
    mapElement.appendChild(markerLayer);
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = "favola-map-marker";
  button.setAttribute("aria-label", location.name);
  button.innerHTML = '<img src="assets/mappin.svg" alt="" />';
  const handleSelect = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };
  button.addEventListener("click", handleSelect);
  button.addEventListener("pointerdown", handleSelect);
  button.addEventListener("touchstart", handleSelect, { passive: false });
  markerLayer.appendChild(button);

  class FavolaMarkerProjector extends google.maps.OverlayView {
    onAdd() {}

    draw() {
      const point = this.getProjection().fromLatLngToContainerPixel(
        new google.maps.LatLng(location.position.lat, location.position.lng),
      );
      button.style.left = `${point.x}px`;
      button.style.top = `${point.y}px`;
    }

    onRemove() {
      button.remove();
    }
  }

  const marker = new FavolaMarkerProjector();
  marker.setMap(map);
  return marker;
}

function initMapGroup({ mapId, center, zoom }) {
  const mapElement = document.getElementById(mapId);
  if (!mapElement || !window.google?.maps) return null;

  const map = new google.maps.Map(mapElement, {
    center,
    zoom,
    styles: favolaMapStyles,
    clickableIcons: false,
    disableDefaultUI: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  const groupLocations = favolaLocations.filter((location) => location.mapId === mapId);

  groupLocations.forEach((location) => {
    createFavolaMarker(location, map, () => {
      map.panTo(location.position);
      map.setZoom(Math.max(map.getZoom(), 14));
      updateInfoWindow(location, map);
      fetchPlaceDetails(location, map).then((place) => {
        updateInfoWindow(location, map, place);
      });
    });
  });

  return map;
}

window.gm_authFailure = () => {
  document.querySelectorAll(".google-map").forEach((mapElement) => {
    mapElement.innerHTML = '<div class="map-error">Mapa trenutno nije dostupna.</div>';
  });
};

window.initFavolaMaps = () => {
  initMapGroup({
    mapId: "beogradMap",
    center: { lat: 44.816, lng: 20.44 },
    zoom: 11,
  });

  initMapGroup({
    mapId: "noviSadMap",
    center: { lat: 45.2515834, lng: 19.847533 },
    zoom: 14,
  });
};
