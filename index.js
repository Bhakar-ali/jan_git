<script>
// Get references to the tabs and content
const homeTab = document.getElementById('home-tab');
const aboutTab = document.getElementById('about-tab');
const homeContent = document.getElementById('home-content');
const aboutContent = document.getElementById('about-content');

// Add click event listeners to the tabs
homeTab.addEventListener('click', () => {
    homeContent.style.display = 'block';
    aboutContent.style.display = 'none';
});

aboutTab.addEventListener('click', () => {
    homeContent.style.display = 'none';
    aboutContent.style.display = 'block';
});
</script>