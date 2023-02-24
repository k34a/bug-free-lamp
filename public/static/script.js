function externalLinks() {
    for (let c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        let b = c[a];
        b.getAttribute("href") && (b.hostname !== location.hostname && b.hostname !== "larryrowbsfoundation.org" && b.hostname !== "www.larryrowbsfoundation.org") && (b.target = "_blank")
    }
};

externalLinks();