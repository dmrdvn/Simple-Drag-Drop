const dropItem = document.querySelector('#drop-items');

new Sortable (dropItem, {
    animation: 350,
    dragClass: "sortable-drag"
});